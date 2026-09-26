// Canonical encounter data: one finalized record for each of the 100 cantos.
// Dialogue marked in the interface as original-text translation or dramatic adaptation.
const encounters = {
  "inferno": [
    {
      "speaker": "维吉尔",
      "scene": "三只野兽封死了向阳的山坡。一个古代诗人的影子从林间出现。",
      "spoken": "我不能带你直上那座山；若要离开，你必须先从另一条路穿过去。",
      "question": "维吉尔提出一条必须先下降、才能重新上升的道路。你怎样回应这位陌生引路人？",
      "choices": [
        {
          "text": "接受维吉尔引路，但先问清道路通向哪里",
          "result": "你把恐惧交给一项有方向、有边界的行动。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请维吉尔先说出姓名与来意",
          "result": "古代诗人的身份、使命和你们为何相遇得到确认。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认自己仍想绕过下降，直接爬向阳光",
          "result": "最初的误读被说破：看似向上的捷径并未改变迷失。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第一歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "山路尚未开始，你已经为这趟活人进入死者世界的旅行感到恐惧。",
      "spoken": "贝雅特丽齐离开天国来找我；她说，是怜悯让她来到这里。",
      "question": "听见这份委托后，你怎么回应？",
      "choices": [
        {
          "text": "把是否出发建立在受托使命上，而非英雄自比",
          "result": "行动获得了正当理由，不再取决于你能否扮演古代英雄。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "追问贝雅特丽齐、露琪亚与圣母怎样彼此传递关怀",
          "result": "这次救援显出由多位女性构成的关系链。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认‘我不配’也可能是在替退缩寻找高尚说法",
          "result": "谦卑与恐惧被重新区分。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二歌"
    },
    {
      "speaker": "卡戎",
      "scene": "门上的铭文结束于“舍弃一切希望”。门内，无立场者追逐空旗；河岸挤满亡魂。",
      "spoken": "活着的灵魂，不要登我的船。",
      "question": "卡戎举桨逼近时，你如何过河？",
      "choices": [
        {
          "text": "留在维吉尔身旁，不与卡戎争夺渡船",
          "result": "你服从引路次序，等待不属于自己强取的通道。",
          "effect": {
            "will": 4
          },
          "school": "wanderer"
        },
        {
          "text": "看清河岸亡魂为何急切奔向审判",
          "result": "恐怖场景重新成为许多具体意志共同造成的队列。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "检查门上‘绝望’二字为何让自己也像亡魂般失去选择",
          "result": "铭文没有被当作对活人的最终判决。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三歌"
    },
    {
      "speaker": "荷马",
      "scene": "没有刑具的昏暗边境里，古代诗人与哲人住在一座七重城墙的高贵城堡。",
      "spoken": "他们没有罪的污点，却生在得知救赎之前。",
      "question": "当诗人们邀请你加入行列，你如何进入？",
      "choices": [
        {
          "text": "以旅人的身份进入，不冒领与古代诗人相等的功绩",
          "result": "荣誉有了尺度，同行没有变成自我加冕。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请他们逐一报出姓名与作品",
          "result": "‘异教贤者’这一总称重新分解为不同人物与传统。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何因被名家接纳便忘记这里仍是林薄",
          "result": "文学荣誉对痛苦现实的遮蔽被看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第四歌"
    },
    {
      "speaker": "弗兰切斯卡",
      "scene": "风暴卷着情欲者永不落地。弗兰切斯卡讲起她与保罗共读兰斯洛特的下午。",
      "spoken": "爱情，不容被爱者不爱，使我如此强烈地爱上了他。",
      "question": "她停下来等你回应。你说什么？",
      "choices": [
        {
          "text": "问她在爱情之外做过哪些选择",
          "result": "强烈感情没有取消行动、婚姻和责任。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "让弗兰切斯卡讲完阅读、亲吻与死亡的经过",
          "result": "判词暂时退后，一个十三世纪女性的语言和处境被听见。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "先别回答；分辨优美语句是否正在替她完成辩护",
          "result": "同情仍被保留，却不再等同于相信全部叙述。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第五歌"
    },
    {
      "speaker": "恰科",
      "scene": "冰冷污雨下，刻耳柏洛斯撕抓泥中的贪食者。你依维吉尔的指点叫住一个还能坐起的灵魂；他自称恰科，与你同属佛罗伦萨。你问城中党争将走向何处。",
      "spoken": "权力会在两派之间翻转；城中只有两个正直的人，却无人听从。回到人间后，请你让人记得我。",
      "question": "预言说完，恰科就要重新倒进泥里。你还来得及回应一句。",
      "choices": [
        {
          "text": "答应只转述自己亲耳听见的话",
          "result": "你承担传信，却没有把亡魂的预言冒充成自己的知识。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "问清他的姓名、家族和生前处境",
          "result": "城邦灾难重新落到一个具体人的生活里。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己刚才只把他当成预言工具",
          "result": "你的提问方式发生改变，恰科不再只是通往未来的入口。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第六歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "守门怪物普路托发出含混的吼声。越过它以后，你看见两队灵魂用胸口推着巨石相撞，一边喊‘为什么紧握’，另一边喊‘为什么挥霍’；冲撞后，他们又沿半圆退回，永远重复相反的动作。",
      "spoken": "他们已被失衡的欲望磨得难以辨认。财富本由‘命运’在人间流转，却没有一个分配结果能替人决定该怎样使用它。",
      "question": "两队再次撞在一起。你从这幅相反却相同的刑罚中先辨认什么？",
      "choices": [
        {
          "text": "区分财富、使用财富的目的与失去节制的行为",
          "result": "石头不再像罪的来源；真正受判断的是意志怎样对待可用之物。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "追问为何这些人连姓名和面孔也变得模糊",
          "result": "惩罚显出一种尘世后果：他们曾以财物代替人的身份，如今自己也无法被认出。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "说出你为何本能地把挥霍看得比吝啬更自由",
          "result": "两种相反姿态共享的占有欲进入了你的判断。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第七歌"
    },
    {
      "speaker": "菲利波·阿尔真蒂",
      "scene": "弗莱居阿斯的小舟划过冥河。一个满身泥浆的灵魂忽然抓住船舷，问你为何在死期以前来到这里；你从声音和面孔认出佛罗伦萨政敌菲利波·阿尔真蒂。",
      "spoken": "你是谁，竟活着穿过死者的泥沼？",
      "question": "你对他的厌恶先于回答涌上来。船仍在前进，你怎样处理这次相认？",
      "choices": [
        {
          "text": "让他松开船舷，同时不把私人快意说成正义",
          "result": "边界得到维持，你也没有用刑罚满足自己的报复。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "叫出他的姓名，承认你们在佛罗伦萨已有旧怨",
          "result": "冲突获得历史位置，不再伪装成你对陌生罪人的纯粹判断。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "先承认自己正在享受仇敌受罚，再决定是否开口",
          "result": "旅人的愤怒没有被诗人的判词自动洗成正确。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第八歌"
    },
    {
      "speaker": "复仇女神",
      "scene": "狄斯城墙上，复仇女神撕开胸口，呼喊美杜莎前来。维吉尔先命你转身，又亲手遮住你的眼睛；城外的沼泽上传来一个脚步声。",
      "spoken": "不要回头。这里的危险不是被杀，而是被凝固成再也不能改变的形状。",
      "question": "美杜莎尚未现身，踏水而来的力量也还没有抵达。你怎样守住这段等待？",
      "choices": [
        {
          "text": "服从维吉尔，把双手也覆在眼上",
          "result": "你承认此刻的勇敢是接受保护，而不是抢先观看。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "只听城墙上的声音，分辨恐吓来自谁",
          "result": "你没有夺走目光，却保存了复仇女神各自的声音。",
          "effect": {
            "insight": 3,
            "mercy": 1
          },
          "school": "witness"
        },
        {
          "text": "注意自己为何如此想看美杜莎",
          "result": "诱惑从外部怪物转回你的观看欲，凝固尚未发生。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第九歌"
    },
    {
      "speaker": "法里纳塔",
      "scene": "燃烧的墓穴中，法里纳塔挺直上身谈论佛罗伦萨；卡瓦尔坎特突然追问儿子圭多。",
      "spoken": "你的口音暴露了你的城邦和党派。",
      "question": "法里纳塔的政治盘问与卡瓦尔坎特的父亲之痛同时逼近。你怎样处理两种声音？",
      "choices": [
        {
          "text": "先回答法里纳塔的党派追问，再纠正卡瓦尔坎特的误会",
          "result": "你按问题的实际后果处理两段对话，没有用沉默制造新的伤害。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "先告诉卡瓦尔坎特：他的儿子当时仍活着",
          "result": "父亲对儿子的恐惧没有被政治辩论淹没。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认自己更愿与挺立的政敌辩论，而忽略突然倒下的父亲",
          "result": "你看见宏大政治怎样劫持自己的注意力。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "你与维吉尔躲在一座教皇石墓后适应深处的恶臭。趁停留，他解释下方为什么先是暴力，再是欺诈，最深处则是对特殊信任的背叛。",
      "spoken": "暴力使用人与兽共有的力量；欺诈却滥用了只属于人的理性，所以位置更深。",
      "question": "分类听来整齐，但你仍不明白为什么放贷者也在暴力圈。你从哪里追问？",
      "choices": [
        {
          "text": "请维吉尔说明每一层判断行为的共同尺度",
          "result": "你先检验分类依据是否一致，再继续下降。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "问这些罪类会不会抹去每个亡魂的不同处境",
          "result": "秩序仍在，人物却没有被分类彻底吞没。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "回想自己为何更害怕欺诈而不是血腥暴力",
          "result": "地狱地图开始照见你的判断习惯。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十一歌"
    },
    {
      "speaker": "涅索斯",
      "scene": "弥诺陶洛斯撞击崩塌岩石。血河中，暴君按暴力程度浸没，半人马在岸上巡逻。",
      "spoken": "越界者将被箭射回他应在的深度。",
      "question": "半人马让你骑上他的背渡河。",
      "choices": [
        {
          "text": "依涅索斯指示坐稳，只在允许的浅处渡河",
          "result": "你尊重血河的边界，也不把半人马当作可以任意驱使的坐骑。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "询问河中不同深度对应哪些暴力者",
          "result": "受罚者重新获得时代、统治方式与受害关系。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "撤回‘半人马必然代表失控兽性’这个预设",
          "result": "古典形象与眼前能判断、能护送的涅索斯被重新区分。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十二歌"
    },
    {
      "speaker": "皮耶尔·德拉·维涅",
      "scene": "折断的枯枝流出血并开口。自杀者成为树，败家者被黑犬追撕。",
      "spoken": "你的手为什么要伤害我？",
      "question": "树枝在你手中流血。",
      "choices": [
        {
          "text": "立即停手，并承担自己因无知造成的伤害",
          "result": "不知道树会流血没有使折枝变成无事发生。",
          "effect": {
            "will": 4,
            "mercy": 1
          },
          "school": "wanderer"
        },
        {
          "text": "请皮耶尔讲清宫廷谗言、失宠与自尽的经过",
          "result": "会说话的树重新成为腓特烈二世宫廷中的具体官员。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "面对自己必须先伤害对方才肯相信维吉尔的事实",
          "result": "求证冲动的代价进入理解。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十三歌"
    },
    {
      "speaker": "卡帕纽斯",
      "scene": "燃烧沙地落下火雨。卡帕纽斯仰面躺着，仍向朱庇特叫嚣。",
      "spoken": "即使他再次把我击倒，我也不会满足他的复仇。",
      "question": "火势随着他的怒声升高。你如何经过？",
      "choices": [
        {
          "text": "沿维吉尔指出的石堤通过，不用争辩回应挑衅",
          "result": "前进服从道路条件，卡帕纽斯的怒火没有决定你的行动。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "听出他仍以底比斯战士和反抗者的身份说话",
          "result": "亵渎不再是一句抽象罪名，而是贯穿生死的性格姿态。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "把‘不屈’与‘自由’暂时分开，再看他的怒火",
          "result": "看似没有屈服的语言，也可能说明一个人仍被愤怒支配。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十四歌"
    },
    {
      "speaker": "布鲁内托·拉蒂尼",
      "scene": "一队灵魂在火雨下不停奔跑。你的旧师布鲁内托离队靠近，预言你将遭到佛罗伦萨排斥。",
      "spoken": "记住我的《宝库》，我仍活在其中。",
      "question": "他请求你不要停下脚步。",
      "choices": [
        {
          "text": "一边继续行走，一边回答老师的问题",
          "result": "你同时遵守火雨中的行动限制与师生交谈的责任。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "询问布鲁内托的预言、教诲与《宝库》如何相连",
          "result": "老师没有只剩罪类，他的学术、城市关切和对学生的期望仍在说话。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认敬爱老师与判断其处境可以同时存在",
          "result": "旅人不必靠否认感情来服从全诗的秩序。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十五歌"
    },
    {
      "speaker": "雅科波·鲁斯蒂库奇",
      "scene": "三位不断奔跑的佛罗伦萨旧公民围成圆圈，既不能停步，也不愿错过一个来自故乡的活人。他们询问礼节、勇气与城市现状。直到谈话结束，维吉尔才走向悬崖，解下你腰间的绳索。",
      "spoken": "新贵和骤来的财富已经使佛罗伦萨骄横失度。告诉我们，那座城是否还剩下值得眷恋的东西？",
      "question": "三人保持奔跑，等待你对共同故乡作答。",
      "choices": [
        {
          "text": "直说城中的败坏，也说明自己同样身在其中",
          "result": "判断没有把你置于城邦责任之外。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "先问出三人的姓名与各自经历，再回答城市",
          "result": "佛罗伦萨不再只是一个抽象的败坏标本。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认他们的问题激起了你的羞耻与优越感",
          "result": "你没有把政治批评变成自我洁白的工具。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十六歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "悬崖边出现革律翁：它有诚实人的面孔、蛇形躯干、彩色花纹和蝎子尾。维吉尔先独自与它交涉，又让你去看沙地上的高利贷者；回来时，这只欺诈的形象已经伏在深渊边等待载你们下降。",
      "spoken": "你坐在前面，我在后面护住你，也挡住那条尾巴。下降时抱紧；这里没有另一条路。",
      "question": "一张温和的人脸正贴着悬崖，危险却藏在身后。你怎样登上革律翁？",
      "choices": [
        {
          "text": "按维吉尔安排坐稳，并把注意力放在尾巴和下降次序上",
          "result": "信任建立在明确行动与保护关系上，不建立在革律翁的面孔上。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "上去前再看一眼以家徽钱袋代替姓名的高利贷者",
          "result": "欺诈怪物与把关系折算成金钱的人间生活彼此照亮。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认自己明知有蝎尾，仍因那张人脸而稍感安心",
          "result": "外表怎样影响判断被当场看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十七歌"
    },
    {
      "speaker": "受骗者",
      "scene": "恶沟第一道壕沟中，魔鬼鞭打诱骗者。队伍里既有以婚姻承诺欺骗女子的贵族，也有把女子交给君王的伊阿宋。一个受骗者隔着壕沟认出他们曾使用过的同一种语气。",
      "spoken": "他们先让我相信未来属于我，等我交出选择以后，未来就只剩他们的目的。",
      "question": "鞭声逼着队伍继续移动。你要追问哪一件事？",
      "choices": [
        {
          "text": "追问承诺怎样一步步变成支配",
          "result": "欺诈被还原为一连串可承担责任的行动。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请她说出自己当时听见的原话",
          "result": "她的声音先于对诱骗者的概括被你听见。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "回想自己何时也曾把漂亮的未来误听成同意",
          "result": "诱骗不再只是别人的故事，也成为你的阅读考验。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十八歌"
    },
    {
      "speaker": "教皇尼各老三世",
      "scene": "买卖圣职者倒插石孔，脚底燃烧。尼各老三世误以为你是未来会到来的教皇卜尼法斯。",
      "spoken": "你这么早就到了吗，卜尼法斯？",
      "question": "他把你认成另一个人。",
      "choices": [
        {
          "text": "先纠正身份，再追问他如何把圣职变成交易",
          "result": "错误期待被澄清，谈话随即回到可负责的行动。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "问他为何认定下一位教皇也会来到这个石孔",
          "result": "一个亡魂的惊讶牵出具体的教会政治与继任关系。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何因能斥责教皇而感到道德优越",
          "result": "正义言辞也开始接受说话者自身动机的检验。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第十九歌"
    },
    {
      "speaker": "曼托",
      "scene": "占卜者的头被扭向背后，只能倒退行走。你因他们变形的身体落泪，维吉尔却提醒你不要用眼泪取消刑罚；随后，他讲出曼托与曼图亚建城的另一版本。",
      "spoken": "他们生前越过人的限度窥探未来，如今只能看见身后。至于我的城市，你应听我把来源讲清。",
      "question": "你的怜悯、对未来的好奇和对维吉尔权威的信任同时受到考验。",
      "choices": [
        {
          "text": "先问预知未来为何会破坏当下责任",
          "result": "你把罪名落到行动结构，而不是畸形外观。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "继续看清这些倒行者各自是谁",
          "result": "身体的怪异没有抹去他们不同的历史。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己也想从他们口中偷听流放结局",
          "result": "你发现被惩罚的欲望并不只属于他们。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十歌"
    },
    {
      "speaker": "马拉科达",
      "scene": "第五恶沟的沸腾沥青藏着贪吏，持钩恶魔在岸边巡逻。首领马拉科达暂时制止手下，声称前方断桥旁另有一座完好的桥，还派出十名恶魔‘护送’你们。",
      "spoken": "沿这道岩脊走，下一座桥完好无损。我的手下会替你们带路。",
      "question": "你无法立刻证明他在说谎，却知道说话者以折磨和欺骗为乐。出发前你怎么做？",
      "choices": [
        {
          "text": "把路线当作暂时信息，同时与维吉尔约定退路",
          "result": "你既没有把敌人的话当真理，也没有因怀疑而停在沥青边。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "留意十名恶魔各自的称呼、动作和彼此关系",
          "result": "‘恶魔护卫’不再是一个抽象威胁，你开始看见这支队伍怎样运作。",
          "effect": {
            "mercy": 1,
            "insight": 4
          },
          "school": "witness"
        },
        {
          "text": "不要因首领语气笃定，就替尚未核实的路线补上可信",
          "result": "权威姿态对判断的影响先被识破。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十一歌"
    },
    {
      "speaker": "钱波罗",
      "scene": "钱波罗被恶魔钩出沥青。他声称只要暂时解开束缚，就能用口哨叫来更多贪吏；维吉尔和恶魔都知道他可能说谎，但钩魔仍被捕猎的兴奋驱使。",
      "spoken": "退开一点，我就能把七个同伴叫上岸。若我逃跑，你们再用钩子抓我。",
      "question": "他还没有逃走。你看见恶魔正在为是否接受交易争吵。",
      "choices": [
        {
          "text": "要求他先说出同伴姓名，再决定是否松绑",
          "result": "承诺被拆成可以承担后果的部分。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "提醒众人他此刻也是被钩住的受刑者",
          "result": "判断没有把一个人完全化为骗子。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何盼着看他骗过恶魔",
          "result": "围观欲被揭开，骗局不再只是台上的表演。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十二歌"
    },
    {
      "speaker": "卡塔拉诺",
      "scene": "伪善者穿镀金铅衣缓慢行走；该亚法被钉在地上，所有人踩过。",
      "spoken": "魔鬼说谎并不值得惊讶。",
      "question": "维吉尔发现所谓完好桥梁根本不存在。",
      "choices": [
        {
          "text": "接受路线判断已经错误，立即寻找岩壁上的出口",
          "result": "理性引路人可以犯错，修正比维护权威更重要。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "请卡塔拉诺说明钉在地上的该亚法是谁",
          "result": "断桥消息没有让你错过伪善者刑罚背后的历史人物。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认自己曾把维吉尔接受护送等同于路线可靠",
          "result": "信任被修订为可以校正的关系。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十三歌"
    },
    {
      "speaker": "万尼·富奇",
      "scene": "你们从断桥废墟艰难爬入盗贼之沟。万尼·富奇被蛇咬中，烧成灰又重新聚成人形；被认出后，他因羞耻承认盗窃圣器，又故意预言佛罗伦萨白党将遭失败。",
      "spoken": "我把未来告诉你，只为让你也尝到痛苦。",
      "question": "这则预言既可能是真话，也被当作伤人的武器。你怎样接住它？",
      "choices": [
        {
          "text": "承认预言内容与说话目的必须分开判断",
          "result": "恶意没有自动使消息为假，真消息也没有使恶意变善。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "追问他的羞耻、盗窃和党派仇恨怎样缠在一起",
          "result": "预言背后的皮斯托亚人与佛罗伦萨政治重新出现。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "观察自己的恐惧是否正替他完成报复",
          "result": "未来尚未发生，你此刻的阅读却已开始改变行动。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十四歌"
    },
    {
      "speaker": "阿涅洛",
      "scene": "蛇与佛罗伦萨盗贼彼此缠绕：一人化灰后复形，另一人与六足蛇熔成同一张脸，阿涅洛的身体则被同伴夺去。你只能凭变化的顺序辨认谁曾是谁。",
      "spoken": "别只盯着最后的形状；名字是在变化过程中丢失的。",
      "question": "又一次变形开始，你怎样避免把两个人认成同一个？",
      "choices": [
        {
          "text": "按动作先后辨认谁主动侵入谁",
          "result": "责任由变化过程决定，而非最后外观。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "反复叫出每个人原来的姓名",
          "result": "姓名为正在消失的人保留历史边界。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "注意自己为何总想抓住一个固定形象",
          "result": "你承认观看方式也在制造错误身份。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十五歌"
    },
    {
      "speaker": "尤利西斯",
      "scene": "双角火焰里，尤利西斯讲述最后航行：他以追求知识鼓动年老的同伴越过赫拉克勒斯之柱。",
      "spoken": "想想你们的出身：不是为了像野兽般活着，而是追求德性与知识。",
      "question": "尤利西斯的演说既崇高又把全船带向毁灭。你怎样判断这段最后航行？",
      "choices": [
        {
          "text": "指出追求知识仍受对同伴、家园与人类限度的责任约束",
          "result": "高尚目的没有自动使越界航行成为善。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "追问那些被他一句演说带走的老水手是否还能反对",
          "result": "英雄独白背后重新出现同伴的年龄、家人与被说服的处境。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认自己也几乎被‘德性与知识’这句话说服",
          "result": "修辞力量成为阅读对象，而不只是故事内容。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十六歌"
    },
    {
      "speaker": "圭多·达·蒙特费尔特",
      "scene": "圭多·达·蒙特费尔特的火焰讲起晚年：他已披上方济各会服，教皇卜尼法斯却以预先赦罪为交换，逼他献出攻破帕莱斯特里纳的欺诈计策。圭多死后，圣方济各与黑天使为他的灵魂争执。",
      "spoken": "我相信教皇能先解除尚未犯下的罪，于是把那句欺诈建议说了出来。",
      "question": "圭多仍把教皇许诺当作自己决定的主要理由。你怎样回应？",
      "choices": [
        {
          "text": "指出赦罪不能与保留犯罪意志同时成立",
          "result": "权威许诺失效，行动重新回到圭多本人。",
          "effect": {
            "will": 3,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "追问教皇怎样利用他的恐惧与服从",
          "result": "制度压力被看见，却没有替个人决定免责。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "说出你是否也渴望一种不必改变自己的赦免",
          "result": "圭多的辩解转成了你的精神陷阱。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十七歌"
    },
    {
      "speaker": "贝特朗·德·博恩",
      "scene": "制造分裂者的伤口愈合后再次裂开。贝特朗·德·博恩提着自己的头走来，解释自己曾挑拨亨利王子反对父亲，因此头与身体永远分离。",
      "spoken": "我使父与子彼此分开，所以我的头也与生命的根分开。",
      "question": "他把自己的伤口解释成生前关系的形状。你先看哪里？",
      "choices": [
        {
          "text": "追问他具体怎样把猜疑变成行动",
          "result": "分裂不再只是立场，而是一连串可追责的手段。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "问那对父子后来分别承受了什么",
          "result": "伤口之外，被破坏的关系重新出现。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何被提头的奇观吸引",
          "result": "你的目光从刑罚 spectacle 转回理解。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十八歌"
    },
    {
      "speaker": "卡波基奥",
      "scene": "炼金术士与伪造者受疥癣折磨。格里福利诺说，他在人间因玩笑夸口会飞而被烧死，在这里受罚却是因为伪造金属；卡波基奥在一旁嘲笑锡耶纳人的轻信。",
      "spoken": "把我送上火刑柱的是一句夸口，把我送到这里的却是另一件事。不要把两种判决混成一个故事。",
      "question": "人间死因和地狱罪类并不相同。你如何追问？",
      "choices": [
        {
          "text": "分别追问夸口、诈骗与炼金行为的责任",
          "result": "不同判断对象不再被同一个罪名覆盖。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请格里福利诺讲清审判他的人和城市关系",
          "result": "制度与地方历史进入了个人遭遇。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己刚才也因结局相同而草率归类",
          "result": "误读被及时修订，没有变成下一层规则。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第二十九歌"
    },
    {
      "speaker": "亚当师傅",
      "scene": "水肿的伪币者亚当师傅与发热的伪证者西农互揭旧丑，拳头、臭味和辱骂一齐升级。你看得出神，直到维吉尔严厉责备；你羞愧得说不出话。",
      "spoken": "想继续看这种争吵，本身就是卑下的欲望。跟上来。",
      "question": "你确实听见了若干事实，但也发现自己正在把两人的痛苦当作表演。你怎样离开？",
      "choices": [
        {
          "text": "立即跟上，并承认真实信息不能替围观欲辩护",
          "result": "行动重新服从旅程目的，揭丑不再冒充求真。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "记住两人各自伪造了什么，却不再煽动他们互辱",
          "result": "具体罪行与具体人物被保留，羞辱场面没有继续为你服务。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "向维吉尔承认自己为何被争吵吸引",
          "result": "羞耻没有变成自我辩护，而成为一次阅读自己的机会。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三十歌"
    },
    {
      "speaker": "宁录",
      "scene": "巨人围成井壁。宁录说着无人能懂的语言；安泰俄愿意把你放到冰湖。",
      "spoken": "Raphèl maí amècche zabí almi。",
      "question": "你如何回应无法翻译的声音？",
      "choices": [
        {
          "text": "不假装听懂，只依可见动作判断是否保持距离",
          "result": "行动建立在真实可知范围内，没有用猜测填补语言。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "把宁录的声音作为无法互通的语言来听，而非兽吼",
          "result": "巴别的惩罚没有抹去说话者仍在尝试表达的事实。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "把听不懂留下为空白，不要立即判定对方毫无意义",
          "result": "理解失败被归回听者，而不是全部推给陌生声音。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三十一歌"
    },
    {
      "speaker": "博卡·德利·阿巴蒂",
      "scene": "科奇土斯冰湖把叛徒冻到颈部。你行走时踢中一张低垂的脸；对方拒绝报姓名，你因愤怒抓住他的头发。旁边的灵魂忽然喊出：这是蒙塔佩尔蒂战役中的博卡·德利·阿巴蒂。",
      "spoken": "你尽管拔光我的头发，我也不会自己说出姓名。",
      "question": "姓名已经由仇敌喊出，而你的手还抓着他的头发。你下一步做什么？",
      "choices": [
        {
          "text": "松手，把他的拒绝、旁人的指认与已知战事分开判断",
          "result": "你不再用暴力索取已经得到的答案，也没有把敌对指认当成自证事实。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "问喊出姓名的人与博卡有什么关系",
          "result": "冰湖中的仇恨网络进入证词，博卡重新成为关系中的具体人物。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认求知欲已经让自己复制此地的暴力",
          "result": "知道姓名不再替取得姓名的方式免责。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三十二歌"
    },
    {
      "speaker": "乌戈利诺",
      "scene": "你在科奇土斯湖看见乌戈利诺啃咬鲁杰里大主教的头。他应你的请求抬起嘴，讲述自己与儿孙被封死在饥饿塔中的日子，最后说出一句既可指饥饿杀死他、也可能暗示更可怕结局的话。",
      "spoken": "后来，饥饿比悲痛更有力量。",
      "question": "乌戈利诺沉默下来，仍把牙齿咬回仇人的头骨。你怎样继续？",
      "choices": [
        {
          "text": "追问他自己的政治背叛，而不只控诉鲁杰里",
          "result": "受害没有自动取消乌戈利诺此前的责任。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "先承认孩子们承受的恐惧与无辜",
          "result": "政治寓言重新落到塔中每个具体的人。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "拒绝用最骇人的猜测填满那句沉默",
          "result": "你察觉自己也在消费故事的残酷。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三十三歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "路西法三张脸咀嚼犹大、布鲁图与卡西乌斯。你们抓住他的毛发向地心下降，方向突然翻转。",
      "spoken": "我们已经越过世界最重的中心；你以为向下，其实现在正在向上。",
      "question": "出口在狭窄岩洞上方。",
      "choices": [
        {
          "text": "照维吉尔指示抓紧毛发，在重心翻转后重新调整方向",
          "result": "出口来自准确行动；感觉中的‘向下’没有压过已经改变的方位。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "在离开前记住三张脸与口中三名叛徒的不同关系",
          "result": "最深处不只剩一个怪物轮廓，政治与宗教背叛仍有姓名。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认自己一直把下降理解成远离出口",
          "result": "空间翻转也修正了你对失败与前进的想象。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《地狱篇》第三十四歌"
    }
  ],
  "purgatorio": [
    {
      "speaker": "加图",
      "scene": "南半球海岸迎来黎明。加图质问两个从地狱出来的旅人，命令你洗去脸上的污迹并束上芦苇。",
      "spoken": "自由如此珍贵，懂得它的人愿为它舍弃生命。",
      "question": "加图命令你洗净地狱留下的污迹，并以芦苇束腰。你怎样进入这座以自由为目的、却有严格次序的山？",
      "choices": [
        {
          "text": "按加图命令洗脸，并只取一根柔韧芦苇束腰",
          "result": "进入新的国度先接受净化次序，不把自由误作无约束。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "询问一个为政治自由自尽的人为何守护炼狱",
          "result": "加图的罗马身份、死亡与基督教职责之间的张力没有被略过。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "改正刚离开地狱便把‘自由’理解成摆脱规则的念头",
          "result": "炼狱的第一课开始改变旧有反应。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第一歌"
    },
    {
      "speaker": "卡塞拉",
      "scene": "天使之舟送来新灵魂。旧友卡塞拉唱起但丁自己的情歌，所有人停下脚步聆听。",
      "spoken": "如果新的法则没有夺走记忆，我仍能用歌声安慰你。",
      "question": "加图突然催促众人上山。",
      "choices": [
        {
          "text": "听见加图催促后立刻停止停留，继续上山",
          "result": "歌声的善没有被否认，却不能取代此刻应做的事。",
          "effect": {
            "will": 4,
            "mercy": 1
          },
          "school": "wanderer"
        },
        {
          "text": "临走前向卡塞拉道别，承认拥抱不到的身体与仍在的友谊",
          "result": "旧友不只是一首插曲，死亡怎样改变相遇被保留下来。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认自己正用熟悉的歌拖延陌生的净化道路",
          "result": "安慰怎样变成停滞被你亲自看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二歌"
    },
    {
      "speaker": "曼弗雷迪",
      "scene": "你因肉身投下影子，亡魂们惊讶地围拢。西西里国王曼弗雷迪从人群中走出，露出眉骨和胸前的伤口；他说明自己虽被教会绝罚，临终时仍以悔意转向神，并请求你把消息带给女儿康斯坦察。",
      "spoken": "教会的诅咒并不能封死永恒的爱。回到人间后，请把真相告诉我的女儿。",
      "question": "人间的公开判决与他讲述的最后一刻彼此冲突。你先怎样回应？",
      "choices": [
        {
          "text": "答应传话，同时不替自己宣判他的最终位置",
          "result": "你承担可以完成的承诺，也把永恒判断留在权限之外。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请他把临终悔改与被掩埋、迁葬的经过讲清",
          "result": "国王、绝罚者、父亲和受伤的身体出现在同一段生命里。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "把制度排除与神的最后判决分开",
          "result": "旅人熟悉的权威尺度开始被炼狱修订。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第三歌"
    },
    {
      "speaker": "贝拉夸",
      "scene": "贝拉夸抱膝坐在巨石阴影里，姿势和生前一样懒散。他必须在山外等待与拖延悔改等长的时间。",
      "spoken": "兄弟，向上看有什么用？天使还不会让我进去。",
      "question": "他邀请你坐下。",
      "choices": [
        {
          "text": "短暂喘息后按太阳位置继续上升",
          "result": "休息服从身体需要，没有变成再次拖延的借口。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "问贝拉夸生前的迟缓为何仍塑造他现在的姿态",
          "result": "炼狱等待与但丁旧识的性格被放在一起理解。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认嘲笑他时，自己也可能正借谈话逃避爬山",
          "result": "对他人的机智判断转回了自己的行动。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第四歌"
    },
    {
      "speaker": "皮娅",
      "scene": "暴死者发现你仍有肉身，纷纷靠近，请求把消息带回人间。邦孔泰讲完天使与恶魔争夺最后一滴悔泪后，皮娅只留下关于锡耶纳、马雷马和婚姻的短短数语。",
      "spoken": "等你终于能够休息时，请记得我。锡耶纳造就我，马雷马毁了我。",
      "question": "维吉尔提醒你不能在每一个声音前停留同样久。你怎样回应皮娅？",
      "choices": [
        {
          "text": "只许下自己能够兑现的传信承诺",
          "result": "善意接受了时间和能力的约束。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请她说出愿意留下的姓名，其余不强迫追问",
          "result": "短暂而含混的证词仍保持她自己的边界。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认自己更容易记住戏剧性更强的故事",
          "result": "你开始修正注意力对沉默者的不公。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第五歌"
    },
    {
      "speaker": "索尔代洛",
      "scene": "索尔代洛仅因听见“曼图亚”便拥抱维吉尔；诗人随即把这份乡情转成对分裂意大利的控诉。",
      "spoken": "我们不曾相识，但同一座城足以让我拥抱你。",
      "question": "你是否报出自己的城邦？",
      "choices": [
        {
          "text": "报出城邦，同时说明同乡之情不能替公共责任免责",
          "result": "归属获得承认，却没有成为党争的通行证。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请索尔代洛讲曼图亚名字为何足以触发拥抱",
          "result": "流亡诗人的乡情与分裂意大利的现实连在一起。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "反省自己何时把城市身份当成判断陌生人的捷径",
          "result": "共同出身的温暖与偏见同时进入视野。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第六歌"
    },
    {
      "speaker": "索尔代洛",
      "scene": "天色将晚，索尔代洛说明日落后谁也不能继续上山，并带你们进入花谷。他逐一指出谷中曾掌握权力、如今只能等待的欧洲君王。",
      "spoken": "不是山路夺走了自由，而是夜色让向上的意愿暂时不能化成行动。先看看这些曾经指挥众人的人，如今怎样学习等待。",
      "question": "太阳正在落下。你必须决定怎样度过不能攀登的夜晚。",
      "choices": [
        {
          "text": "接受山的时间，在谷中守夜",
          "result": "意志没有因停止移动而被误认成失败。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请索尔代洛继续辨认谷中的君王",
          "result": "等待成为理解他们生前责任的机会。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "观察自己为何把停下等同于退步",
          "result": "旧有的进度尺度在炼狱中开始松动。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第七歌"
    },
    {
      "speaker": "尼诺·维斯孔蒂",
      "scene": "晚祷后，两位天使持无刃火剑降到花谷两端。加卢拉法官尼诺认出你仍活着，询问人间亲属；谈话间，一条蛇从草丛逼近，天使随即俯冲把它赶走。",
      "spoken": "我在人间的妻子已经另嫁。回去后，请让我的女儿记得为我祈祷。",
      "question": "蛇已经退去，尼诺仍等着一个来自人间的回答。",
      "choices": [
        {
          "text": "答应传达确切请求，不替他审判家人",
          "result": "承诺有明确对象，也没有扩张成私刑。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请他先说清女儿和妻子的处境",
          "result": "家事不再只是死者受伤自尊的注脚。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "留意自己如何被蛇打断后更愿相信怨言",
          "result": "你没有让危险感替尼诺的叙述作证。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第八歌"
    },
    {
      "speaker": "守门天使",
      "scene": "鹰梦之后，你醒在炼狱门前。三层台阶、灰衣守门者和七个刻在额上的P构成入口。",
      "spoken": "进入后不要回头；回头的人会重新到门外。",
      "question": "门在身后沉重合拢。",
      "choices": [
        {
          "text": "依次踏过三层台阶，接受钥匙开门并不回头",
          "result": "悔改以具体次序进入行动，而不是靠一时激动完成。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "留意守门天使的灰衣、双钥匙与刻下的七个P",
          "result": "门槛上的身体动作和教会仪式没有被抽成一句寓意。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "说清你为何既想入门，又想确认退路仍在",
          "result": "真正改变与保留旧身份的矛盾被看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第九歌"
    },
    {
      "speaker": "石雕中的玛利亚",
      "scene": "第一层平台的浮雕比自然更逼真：玛利亚受报、约柜前的大卫和为寡妇停下军队的图拉真仿佛同时带着声音与动作。它们仍是石头，却迫使观看者弯身接近。",
      "spoken": "我在这里。愿照你的话成就在我身上。",
      "question": "受报浮雕使你不由自主放低视线。你怎样观看它？",
      "choices": [
        {
          "text": "保持距离，先确认三个场景共同表现什么行动",
          "result": "谦卑被理解为行动秩序，而不是视觉魔术。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "跪下，与浮雕中的人物保持同一高度",
          "result": "身体姿态使无名寡妇和玛利亚都不再只是图案。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "注意自己为何急于确认石像是否真的会说话",
          "result": "你从奇观欲转向图像正在改变的观看方式。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十歌"
    },
    {
      "speaker": "奥德里西",
      "scene": "骄傲者背负巨石弯腰。细密画家奥德里西承认名声总被后来者取代，并指出为城邦降尊的普罗文扎诺。",
      "spoken": "契马布埃以为自己独占画坛，如今乔托的声名遮住了他。",
      "question": "他问你希望自己的作品被记多久。",
      "choices": [
        {
          "text": "回答名声不能代替作品和此刻应做的善",
          "result": "荣耀被放回行动之后，而不是成为行动目的。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请奥德里西讲契马布埃、乔托和普罗文扎诺各自的处境",
          "result": "更替的名声重新属于具体艺术家、城市与政治行动。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己听见‘后来者会取代你’时首先感到不安",
          "result": "对名声的依恋从别人的石块下回到自己身上。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十一歌"
    },
    {
      "speaker": "谦卑天使",
      "scene": "傲慢者失败的图像刻在脚下，你必须低头才能读完。到平台出口，谦卑天使张开翅膀，擦去你额上的第一个P；上升忽然比此前轻松。",
      "spoken": "来吧，这里的台阶比你想象得容易。",
      "question": "身体变轻后，你怎样理解刚刚读过的那些失败图像？",
      "choices": [
        {
          "text": "把变轻视为改正欲望后的真实结果",
          "result": "净化不是奖励图章，而是行动能力发生变化。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "回想图像中每个被傲慢伤害的人",
          "result": "课程没有被胜负名单取代。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "不要把擦去一个P误写成净化已经完成",
          "result": "进步感没有成为新的傲慢。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十二歌"
    },
    {
      "speaker": "萨皮娅",
      "scene": "嫉妒者眼皮被铁丝缝住，互相依靠听见爱的声音。萨皮娅承认曾因邻人的失败而欣喜。",
      "spoken": "我向上天喊：现在你还怕我吗？",
      "question": "她听见你的脚步，请你说明自己是谁。",
      "choices": [
        {
          "text": "报出自己仍活着，并答应只承担能够完成的请求",
          "result": "诚实身份与有限承诺同时保护了行动。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请萨皮娅讲清她为何因锡耶纳人的失败而欢呼",
          "result": "嫉妒从抽象恶习变成城邦、邻人和一个女人的回忆。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "收回因暂时能看见而产生的优越感",
          "result": "感官优势没有悄悄变成新的嫉妒。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十三歌"
    },
    {
      "speaker": "圭多·德尔·杜卡",
      "scene": "圭多沿阿尔诺河列出一连串以野兽命名的腐败城镇，并哭泣着预言侄子的暴行。",
      "spoken": "人的心把共同财富设成禁区，于是嫉妒开始生长。",
      "question": "他要求你说出来自阿尔诺哪一段。",
      "choices": [
        {
          "text": "说出来自阿尔诺河段，但不把出生地当作道德答案",
          "result": "事实得到交代，城邦归属没有替个人行动定罪或免责。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请圭多说明每个野兽比喻对应的城市生活与人物",
          "result": "咒骂重新落回罗马涅和阿尔诺河谷的历史现实。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "留意自己被问故乡时为何立刻想隐藏或辩护",
          "result": "城市羞耻怎样塑造自我叙述得到辨认。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十四歌"
    },
    {
      "speaker": "温柔天使",
      "scene": "温柔天使的光擦去第二个P。你在强光中看见受迫害者仍保持温柔的异象；异象散去后，通往下一层的浓烟吞没道路，维吉尔让你贴近他。",
      "spoken": "在看不见的地方，不要把最先出现的恐惧当成方向。跟着我的声音。",
      "question": "烟使你连自己的手也看不见。你怎样迈出第一步？",
      "choices": [
        {
          "text": "先确认维吉尔声音的位置，再按步跟随",
          "result": "谨慎与服从共同维持了行动。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "回应烟中其他祈祷声，确认身边还有谁",
          "result": "黑暗没有把共同体缩成你和向导两个人。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "注意自己如何把不可见自动解释为敌意",
          "result": "愤怒的起点在行动前被察觉。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十五歌"
    },
    {
      "speaker": "马可·伦巴多",
      "scene": "愤怒之烟中，马可抓住你的声音。他反驳“星辰决定人类行为”，把败坏归于自由意志和错误领导。",
      "spoken": "如果天体决定一切，奖惩就不再公正。",
      "question": "他问你认为城邦败坏应归咎于谁。",
      "choices": [
        {
          "text": "把败坏归于自由选择与失职的领导，而非星辰",
          "result": "责任回到能够行动和修正的人间制度。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "请马可说明教权与政权混合怎样伤及具体城邦生活",
          "result": "制度论重新显出它影响的道路、家庭与公民。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认宿命解释最吸引你的地方，正是它能免除责任",
          "result": "宿命论给人的心理安慰被揭开。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十六歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "离开烟雾后，愤怒的幻象像梦一样袭来。维吉尔开始解释：任何行动都由爱推动，问题在对象与尺度。",
      "spoken": "没有创造物没有爱；自然之爱不会错，选择之爱可能错。",
      "question": "你要如何处理一股强烈但方向不明的欲望？",
      "choices": [
        {
          "text": "先判断欲望对象是否善，再决定强度与行动方式",
          "result": "爱没有被压制，却接受对象和尺度的引导。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "追问这股欲望牵涉哪些人、会怎样改变关系",
          "result": "爱的伦理不再只发生在孤立心灵里。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "观察自己如何给欲望命名，以及这个名字是否已在替它辩护",
          "result": "解释欲望的语言本身进入修订。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十七歌"
    },
    {
      "speaker": "奔跑的怠惰者",
      "scene": "夜里，净炼怠惰的灵魂从你身边疾跑，高喊圣母赶往山地、凯撒奔赴西班牙等热忱榜样。他们拒绝停下长谈，因为奔跑本身就是正在学习的意志。",
      "spoken": "爱能够醒来，但醒来以后还必须由行动追上。不要让问题成为新的拖延。",
      "question": "队伍即将跑远，你只能随行片刻。",
      "choices": [
        {
          "text": "一边跟跑一边问行动如何训练欲望",
          "result": "求知没有要求别人暂停正在完成的净化。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "听清他们各自高喊的榜样和反例",
          "result": "群体奔跑仍保留了不同的历史声音。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "给‘还没想清’规定期限，随后仍要迈出一步",
          "result": "反思没有继续冒充停留的理由。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十八歌"
    },
    {
      "speaker": "海妖",
      "scene": "梦中的海妖起初口吃、斜眼、畸形；在你的凝视下，她却变得美丽并唱自己曾诱惑尤利西斯。",
      "spoken": "我如此甜美，听过我的人很少离开。",
      "question": "她要求你继续看着她。",
      "choices": [
        {
          "text": "接受梦中圣女揭开海妖，并转身离开歌声",
          "result": "行动服从已经显出的真相，不再等待诱惑自行消失。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "记住海妖起初的口吃与畸形怎样被凝视改造成美貌",
          "result": "诱惑获得了发生过程，而不是天生全能的妖术。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "承认使她变美的不只歌声，也有自己持续观看的欲望",
          "result": "你不再把诱惑全部外包给对象。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第十九歌"
    },
    {
      "speaker": "于格·卡佩",
      "scene": "贪婪者伏地高喊贫穷与慷慨的榜样。法国王族先祖于格列举后代的掠夺，山体突然震动。",
      "spoken": "树坏了，不是因为它的根完全无罪，而是枝条把欲望变成王朝。",
      "question": "地震时，所有灵魂唱起荣耀颂。",
      "choices": [
        {
          "text": "在震动中站稳并听从众灵的赞歌，不擅自逃离平台",
          "result": "未知现象没有取消秩序，行动等待能够辨认的意义。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "把于格对王朝的控诉与伏地受罚的身体一起记住",
          "result": "卡佩王朝史没有脱离说话者自己也需净化的贪欲。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "改读这次山震：它也可能意味着一个灵魂终于获释",
          "result": "地狱养成的阅读习惯在炼狱被修正。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十歌"
    },
    {
      "speaker": "斯塔提乌斯",
      "scene": "斯塔提乌斯追上你们，解释山震意味着一个灵魂已完成净化。他不知道身旁正是自己敬爱的维吉尔。",
      "spoken": "《埃涅阿斯纪》既是我的母亲，也是我的乳母。",
      "question": "维吉尔示意你暂时不要揭露身份。",
      "choices": [
        {
          "text": "遵从维吉尔暗示，等斯塔提乌斯把话说完再揭晓身份",
          "result": "时机服务于完整理解，而不是用惊喜打断对话。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "细听斯塔提乌斯怎样把诗人、信徒和获释者三段生命连起来",
          "result": "仰慕不只指向名号，也显出一首诗在历史中的作用。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何急着观看偶像相认的场面",
          "result": "戏剧期待没有抢走斯塔提乌斯自己的叙述。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十一歌"
    },
    {
      "speaker": "斯塔提乌斯",
      "scene": "斯塔提乌斯说维吉尔的诗使他成为诗人，又在无意中引向信仰；一棵倒悬果树让饥饿者无法摘取。",
      "spoken": "你像夜行者身后的灯，照亮别人却没有照亮自己。",
      "question": "维吉尔听见这句赞美。",
      "choices": [
        {
          "text": "承认作品可能产生作者未能亲自抵达的善",
          "result": "善的因果得到承认，也不伪造维吉尔已有信仰。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "请斯塔提乌斯说明哪些诗句在何种生活处境中帮助了他",
          "result": "‘影响’重新变成一个读者与文本相遇的具体历史。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "把作者意图从唯一边界改成一项需要核对的证据",
          "result": "读者的改变迫使原有解释尺度扩大。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十二歌"
    },
    {
      "speaker": "福雷塞",
      "scene": "饥饿者的脸瘦到难以辨认。福雷塞将自己加速净化归功于妻子内拉的祈祷。",
      "spoken": "我不是靠饥饿被迫向上；是欲望使我们主动接近这棵树。",
      "question": "他让你辨认自己。",
      "choices": [
        {
          "text": "承认一时认不出他，再依据声音与自报身份相认",
          "result": "你没有凭猜测覆盖事实，也没有逃避旧友重逢。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "询问内拉的祈祷怎样缩短他的等待",
          "result": "枯瘦面孔背后出现婚姻、友谊与生者对亡者的帮助。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "面对自己先以外貌判断这是否还是福雷塞",
          "result": "身体变化怎样动摇人物连续性成为阅读问题。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十三歌"
    },
    {
      "speaker": "博纳君塔",
      "scene": "博纳君塔认出你是写下‘温柔新诗风’诗句的人。他没有要求你表演，而是追问你与自己、圭托等前代诗人的差别。",
      "spoken": "我现在看见那道结：我们写在爱所口授的话之外，而你说自己紧随它的呼吸。",
      "question": "他等待你解释‘听从爱’是否意味着不再判断。",
      "choices": [
        {
          "text": "说明灵感仍要对词语和后果负责",
          "result": "爱没有变成取消修订的最高命令。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "承认这套说法也建立了一条排除前人的谱系",
          "result": "文学革新没有抹去被命名为旧派的人。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "回想自己何时借‘爱在说话’逃避作者责任",
          "result": "诗学理论转成了自我检验。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十四歌"
    },
    {
      "speaker": "斯塔提乌斯",
      "scene": "维吉尔请斯塔提乌斯解释影子为何能消瘦。回答从生成、灵魂到死后气质身体层层展开。",
      "spoken": "这里受苦的不是普通肉身，而是灵魂塑成的可感形体。",
      "question": "解释很长，你的同伴催促赶路。",
      "choices": [
        {
          "text": "请斯塔提乌斯先说明灵魂如何形成可受苦的形体",
          "result": "长解释依照因果次序展开，不用神秘一词跳过关键环节。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "追问这种形体如何保留声音、饥饿与个人面貌",
          "result": "哲学说明重新联系你一路遇见的具体身体。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "耐心听完论证，不把简短误当作清楚",
          "result": "急于赶路的阅读节奏也成为理解障碍。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十五歌"
    },
    {
      "speaker": "阿尔诺·达尼埃尔",
      "scene": "两队在火中净炼欲望的灵魂相遇、亲吻后迅速分开。圭尼采利为你指认阿尔诺·达尼埃尔；这位普罗旺斯诗人没有离开火焰，只用奥克语请求未来的记忆。",
      "spoken": "我悔恨过去，也喜悦眼前；请在适当的时候记得我的痛苦。",
      "question": "阿尔诺说完便重新隐入火中。你如何回应这个陌生语言中的请求？",
      "choices": [
        {
          "text": "以一句简短承诺回应，不阻断他的净化",
          "result": "承诺与此刻能完成的行动相称。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请圭尼采利解释他的生平与诗歌位置",
          "result": "陌生语言背后的人没有被熟悉传统遮住。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己更愿记住听得懂的诗人",
          "result": "理解的舒适区被看见，也开始被修订。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十六歌"
    },
    {
      "speaker": "维吉尔",
      "scene": "天使宣布必须穿过火墙。火后，你梦见利亚采花；醒来时维吉尔说他的引导已经完成。",
      "spoken": "你的意志现在自由、正直而健全；从此由你自己决定。",
      "question": "没有命令的第一步摆在你面前。",
      "choices": [
        {
          "text": "依已经形成的正直意志迈出第一步",
          "result": "自由表现为能够自行选择善，不是等待新的外部命令。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "向即将结束引导的维吉尔致谢，并承认关系正在改变",
          "result": "老师的职责结束了，老师本人没有因此消失。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认没有命令时仍想让别人替自己保证正确",
          "result": "依赖被看见，真正的自主才可能开始。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十七歌"
    },
    {
      "speaker": "玛泰尔达",
      "scene": "地上乐园里，玛泰尔达在花间行走，方向与河水相反。你们隔着清澈溪流相望；她解释这里的风、水和植物，也说明古代诗人的黄金时代只是对这里的朦胧记忆。",
      "spoken": "这条水不来自地上的雨。你若要理解眼前的春天，先别急着把它叫作你已经知道的黄金时代。",
      "question": "河流隔开你们，你还不能自行渡过。你先问什么？",
      "choices": [
        {
          "text": "问清河流在净化次序中的作用",
          "result": "行动边界先于占有乐园的冲动。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "询问玛泰尔达为何独自在这里采花",
          "result": "地上乐园第一次有了具体生活其中的人。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "让眼前风景先存在，不急着套进熟悉的黄金时代传说",
          "result": "旧文本没有替眼前世界提前命名。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十八歌"
    },
    {
      "speaker": "玛泰尔达",
      "scene": "七盏灯、二十四长老、四活物与狮鹫牵引的车辇进入森林，整场仪式由《启示录》与教会象征织成。",
      "spoken": "不要只追一件奇观；队列的次序也是意义。",
      "question": "车辇经过时，你把目光停在哪里？",
      "choices": [
        {
          "text": "先按队列次序辨认灯、长老、活物、车辇与狮鹫",
          "result": "观看获得结构，不被最耀眼的局部牵走。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "观察长老、活物与舞者怎样围绕车辇彼此回应",
          "result": "象征仍表现为一群有位置、有动作的参与者。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "留意自己最想追逐哪一件奇观，以及为何忽略其余部分",
          "result": "注意力的偏向成为理解仪式的一部分。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第二十九歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "花雨中贝雅特丽齐出现。你本能地转向维吉尔，却发现他已经离去；她随即以近乎审判的口吻责备你。",
      "spoken": "不要因为维吉尔离去而哭；你还要为另一把剑而哭。",
      "question": "你发现自己在众目之下落泪。",
      "choices": [
        {
          "text": "站在原地听完贝雅特丽齐的指控，不借维吉尔离去逃开",
          "result": "悔改先承担真实指控，再寻找安慰。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "承认维吉尔离去带来的哀痛，也直面贝雅特丽齐的具体关系",
          "result": "旧引路人与新引路人都没有被压成抽象阶段。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "承认眼泪不只属于维吉尔离去，也遮着自己的偏离",
          "result": "悲伤中隐藏的自我保护开始松动。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第三十歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "贝雅特丽齐追问：在她死后，究竟是什么尘世诱惑使你偏离曾经指向的善。羞愧堵住喉咙；只有明确承认以后，玛泰尔达才会带你进入忘川。",
      "spoken": "低下头看水面：你必须知道自己正在忘记什么。",
      "question": "河水就在面前，但遗忘不能替代回答。你怎样开口？",
      "choices": [
        {
          "text": "明确承认曾被眼前之物引离更高的善",
          "result": "忏悔落到真实选择，不以含糊羞愧代替责任。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "说出自己的偏离怎样影响与贝雅特丽齐及他人的关系",
          "result": "罪不再只是一场私人心理失败。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "在饮忘川前辨认自己最想保留的借口",
          "result": "遗忘不被用来抢先逃过理解。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第三十一歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "车辇系在知识树上以后，鹰、狐狸与龙依次袭来；车辇长出怪异的头角，娼妇与巨人又在其上争斗。贝雅特丽齐要你把亲眼所见带回人间，但异象没有附上一张逐项对照的答案。",
      "spoken": "把你所见的写下，带回仍活着的人中。",
      "question": "写作本就是这次遭遇中的行动。你怎样既服从命令，又不把多层异象伪装成唯一解码？",
      "choices": [
        {
          "text": "先写清出现次序，并区分所见、推断与无法确定之处",
          "result": "见证服从真实，也接受理性不能越过的边界。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "保留每个形象的动作、关系和造成的伤害，再联系教会历史",
          "result": "寓言没有脱离它指向的制度、身体和时间。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "同时写下自己在哪一步改变了解释，并留下未解之处",
          "result": "书写没有隐藏阅读者，也没有把暂时理解封成终局。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第三十二歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "贝雅特丽齐给出关于车辇更新的含混预言，又追问你为何听见后仍不发问。随后，玛泰尔达牵你饮下欧诺埃河：忘川曾洗去罪的记忆，这条河则使已经行过的善重新获得力量。",
      "spoken": "现在不要只记得自己曾经偏离；也要恢复那部分能使你继续向上的记忆。",
      "question": "你将离开炼狱。怎样理解这次‘记起善’，才不会把净化误作删除过去？",
      "choices": [
        {
          "text": "把善的记忆当作继续行动的能力，而不是功劳凭证",
          "result": "恢复服务于下一步，没有变成给过去结算分数。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "记起哪些人曾帮助你、又曾被你的选择影响",
          "result": "净化后的自我仍由真实关系和受过的恩惠构成。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "让被洗去的罪与被恢复的善共同说明自己怎样改变",
          "result": "回转保留过程，不把旧我假装成从未存在。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《炼狱篇》第三十三歌"
    }
  ],
  "paradiso": [
    {
      "speaker": "贝雅特丽齐",
      "scene": "你望向她望向太阳的目光，身体没有迈步却开始上升。诗人必须造出“超越人性”这个词。",
      "spoken": "不要问翅膀在哪里；先确认是谁改变了观看者。",
      "question": "地面正在远离。",
      "choices": [
        {
          "text": "把目光依贝雅特丽齐的方向转向更高处",
          "result": "上升不是任意飞翔，而是意志顺应已经辨认的善。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "留意她的目光、姿势与沉默怎样引导你的身体",
          "result": "‘超越人性’仍通过两个人之间具体的模仿发生。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认自己一直在寻找一双翅膀，却忽略观看者已改变",
          "result": "空间奇迹让位于认知与欲望的转变。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第一歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "月天表面显出深浅斑纹。她先否定“物质稀密”解释，再让你想象一个镜子实验。",
      "spoken": "经验若不受理性约束，会像无艺术的弓箭一样偏离。",
      "question": "三面镜子已经摆好。",
      "choices": [
        {
          "text": "按镜面距离实验逐步排除‘稀密物质’解释",
          "result": "感觉被保留，却接受可重复推理的约束。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "询问这种天体学解释来自怎样的古代知识传统",
          "result": "月斑问题重新位于亚里士多德宇宙论与中世纪学习中。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "把第一个直观解释退回假设，而不是亲眼证实的事实",
          "result": "经验与解释之间的距离被看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二歌"
    },
    {
      "speaker": "皮卡尔达",
      "scene": "皮卡尔达与被迫离开修院的灵魂显现在月天。她说所有天堂灵魂的意志与神意和谐，因此不嫉妒更高位置。",
      "spoken": "在他的意志中，我们得到安宁。",
      "question": "皮卡尔达说自己完全安于月天的位置。你怎样理解这种满足，而不抹去她曾遭受的强迫？",
      "choices": [
        {
          "text": "区分遭受外在强迫与意志在压力下仍可能让步",
          "result": "责任没有无视暴力，也没有把内在选择完全取消。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请皮卡尔达讲她如何被带离修院，以及康斯坦察的处境",
          "result": "月天光影重新成为两位遭受家族与政治强迫的女性。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "暂时放下尘世竞争，不把较低位置等同于较少幸福",
          "result": "天堂等级没有继续沿用尘世竞争的眼光。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第三歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "你同时困惑两件事：被迫违誓者为何仍受影响，以及灵魂是否真的住在各个天球。",
      "spoken": "最危险的误解往往不是完全错误，而是把显现位置当成最终居所。",
      "question": "两个问题只能先问一个。",
      "choices": [
        {
          "text": "先问被迫违誓者的责任，因为它直接关系行动判断",
          "result": "问题依实践紧迫性排序，另一疑问仍被保留。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "先问灵魂为何显现在月天，以免误解皮卡尔达的真实居所",
          "result": "人物的处境先从错误空间想象中解放出来。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "说出两个疑问如何都来自把显现当成全部真实",
          "result": "问题不再互相竞争，而暴露同一种阅读习惯。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第四歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "贝雅特丽齐解释誓愿由献出的自由意志与具体承诺共同构成；替换承诺不能只比较礼物贵贱，也不能由个人热心随意决定。说完，你们从月天升向水星天。",
      "spoken": "人从上帝得到的最大礼物是自由意志。起誓，就是把这份自由放进一个真实承诺里。",
      "question": "你追问：若履行原誓已经造成更大的错误，是否仍必须照做？",
      "choices": [
        {
          "text": "区分承诺本身与执行方式，并接受合法判断",
          "result": "忠实没有变成盲目执行。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "先听清誓愿牵涉的其他人会承受什么",
          "result": "誓愿不再只是个人与天国之间的私事。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认你偏爱昂贵补偿，是因为它比真正改变更轻松",
          "result": "补偿冲动被识别为逃避改变的可能。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第五歌"
    },
    {
      "speaker": "查士丁尼",
      "scene": "水星天的一点光报出身份：东罗马皇帝查士丁尼。他以罗马之鹰为主语追述从埃涅阿斯到帝国的历史，又以被谗毁的忠臣罗密欧收束长篇叙述。",
      "spoken": "归尔甫与吉伯林都把鹰据为党派私产：一方反对它，另一方假借它行事。",
      "question": "查士丁尼讲完后，你怎样理解这只贯穿历史的鹰？",
      "choices": [
        {
          "text": "问每一次征服是否都真正服务共同善",
          "result": "帝国象征仍须接受行动目的的判断。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请他回到无名忠臣罗密欧的遭遇",
          "result": "宏大罗马史没有吞掉被谗毁的个人。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认自己也想用一个符号替历史作结论",
          "result": "整齐叙事对你的诱惑被暴露。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第六歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "你不明白：既然基督受难是救赎，为何它同时又是应受惩罚的罪。贝雅特丽齐从人的行为、基督的双重本性和救赎秩序分别回答。",
      "spoken": "同一件受难，就施暴者的意志而言极不正义；就基督的人性承担而言又修复了失序。关系不同，判断也不同。",
      "question": "你必须同时保留受害、施暴与救赎三个层次。哪一层先不能被省略？",
      "choices": [
        {
          "text": "先判断施暴者实际选择了什么",
          "result": "神圣结果没有倒过来替错误手段免责。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "先看受难身体和历史暴力由谁承受",
          "result": "救赎论没有抹去受害者的位置。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "先承认自己总想用一个答案消除矛盾",
          "result": "理解从容纳不同关系开始。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第七歌"
    },
    {
      "speaker": "卡洛·马泰洛",
      "scene": "金星天中，安茹王子卡洛·马泰洛认出你，并解释同一家族为何会产生不同天性：社会若强迫每个人继承不合适的职位，公共秩序也会受损。",
      "spoken": "让生来适合持剑的人讲道，让适合讲道的人做国王，脚步就会偏离道路。",
      "question": "你问王子：尊重天性是否意味着人不必再训练或承担职责？",
      "choices": [
        {
          "text": "区分禀赋、训练与公共责任",
          "result": "天性提供方向，没有成为拒绝成长的借口。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "追问家族制度怎样压迫不合继承位置的人",
          "result": "个人差异被放回社会结构中理解。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "不要用‘真正的我’替自己取消训练与改变",
          "result": "自我发现没有变成新的宿命论。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第八歌"
    },
    {
      "speaker": "库妮扎",
      "scene": "库妮扎、福尔科与喇合在金星天发光。他们并不掩饰生前受欲望支配的历史，却把现在的目光转向悔改、故乡政治和教会贪欲。",
      "spoken": "我曾深受这颗星的影响；如今我不因被看见而羞惭，因为我的快乐来自已经改变的秩序。",
      "question": "你问库妮扎：不再羞惭，是否意味着过去已经无关紧要？",
      "choices": [
        {
          "text": "问她现在如何判断过去的具体行动",
          "result": "宽恕没有取消善恶名称。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请她讲清欲望、家族与政治环境如何交织",
          "result": "人物没有被压成一则悔改公式。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "观察自己为何更想听丑闻而不是改变",
          "result": "阅读欲望成为本歌真正的考验。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第九歌"
    },
    {
      "speaker": "托马斯·阿奎那",
      "scene": "太阳天的十二道光围成圆环。托马斯·阿奎那逐一介绍同伴，其中包括曾与他思想传统冲突、甚至被怀疑为异端的西格尔。",
      "spoken": "你看见的不是没有分歧的人，而是不同追问在同一真理周围各自发光。",
      "question": "西格尔的名字使你迟疑。你向托马斯追问什么？",
      "choices": [
        {
          "text": "问共同真理怎样判断真实的错误",
          "result": "和谐没有取消辨别。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "问西格尔为何仍以自己的姓名被介绍",
          "result": "差异没有被胜利者吞并。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认自己原以为天堂只会留下同意者",
          "result": "你对和谐的想象被重新校正。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十歌"
    },
    {
      "speaker": "托马斯·阿奎那",
      "scene": "多明我会的托马斯没有赞美自己阵营，而是讲述方济各如何与‘贫穷女士’结合，并在教会之内实践一种令人不安的更新。",
      "spoken": "方济各赤足追随贫穷，不是因为匮乏本身神圣，而是因为这段关系使他的爱获得了方向。",
      "question": "你问：贫穷为什么在这里不是单纯缺少财物？",
      "choices": [
        {
          "text": "追问自愿贫穷具体服务哪一种善",
          "result": "手段必须由所指向的善获得意义。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请托马斯讲方济各与真实穷人及教会的关系",
          "result": "圣徒传重新获得社会和制度的质地。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "撤回‘反制度英雄’的现成形象，再听方济各的选择",
          "result": "现代投射没有替人物完成解释。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十一歌"
    },
    {
      "speaker": "波拿文都拉",
      "scene": "第二圈光环围住第一圈起舞。方济各会的波拿文都拉接过话头，却没有赞美自己的会祖；他讲述多明我，又转而批评本会已经偏离方济各。两位神学家交叉称颂对方传统。",
      "spoken": "一只车需要两只轮子。赞美另一轮，也正好照见自己这一轮已经偏向何处。",
      "question": "这两篇圣徒传并非细节完全相同的镜像。你怎样理解它们的对称？",
      "choices": [
        {
          "text": "比较两位圣徒各自回应了教会的哪一种需要",
          "result": "和谐来自互补使命，不来自抹掉事实差异。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "保留方济各、多明我及两个修会各自的历史性格",
          "result": "圣徒没有被压成可以互换的完美模型。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "让对立阵营的称颂打乱你原本期待的站队方式",
          "result": "交叉称颂迫使你的阅读位置移动。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十二歌"
    },
    {
      "speaker": "托马斯·阿奎那",
      "scene": "托马斯澄清‘所罗门无人能及’只指作为君王所需的智慧，并警告人不要从一株植物当前的样子断定最终果实。",
      "spoken": "我见过冬日的荆棘后来开花，也见过航船在港口前最后一刻沉没。不要太快成为裁判。",
      "question": "你问：暂缓终局判断，会不会使人逃过当下应负的责任？",
      "choices": [
        {
          "text": "保留当前判断，但不把它冒充最后命运",
          "result": "责任与认识限度同时得到保存。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "说明现有证据来自谁、可能遗漏谁",
          "result": "名声不再代替具体人物。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "说出确定判词为何会让你感到安全",
          "result": "轻率判断的情感收益被揭开。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十三歌"
    },
    {
      "speaker": "所罗门",
      "scene": "所罗门回答复活后的身体问题：灵魂重获身体后不会因光更强而失去个体，反会因人格完整而更能看见、更能爱。众光高呼阿门，随即在火星天组成发亮的十字。",
      "spoken": "我们渴望身体，也因身体想到父母和所爱的人；天堂不是把这些关系抹去。",
      "question": "眼前的光越来越强。你怎样避免把荣耀误读成灵魂彼此融化？",
      "choices": [
        {
          "text": "区分光的强度与人格是否完整",
          "result": "更强的显现没有违反复活所恢复的人的秩序。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "从众灵对父母与身体的渴望理解他们",
          "result": "光中的声音重新连回亲缘、感官和具体生命。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "改掉‘越精神就越少身体’这一组习惯性等号",
          "result": "习惯性的二分被天堂经验改写。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十四歌"
    },
    {
      "speaker": "卡恰圭达",
      "scene": "火星十字里的一点光沿十字臂滑下，自报为你的高祖卡恰圭达。他先以拉丁语致意，再回忆旧佛罗伦萨：城小、生活节制、婚姻和服饰尚未被奢华支配。",
      "spoken": "城墙以内曾有和平与节制；但你听见的是一个祖先从天堂回望故乡，并不是整座城市自己开口。",
      "question": "他的旧城既是伦理批判，也带着家族记忆的选择。你怎样听下去？",
      "choices": [
        {
          "text": "追问旧城的节制具体表现在哪些生活选择中",
          "result": "怀旧必须落到可判断的行动，不能只靠年代获得善名。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请他也说出妇女、邻里与被家族谱系略过的人",
          "result": "祖先的城市获得比贵族姓名更宽的生活表面。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "把高祖的认可与旧城图是否可信分开",
          "result": "亲缘权威和乡愁对你的影响进入阅读。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十五歌"
    },
    {
      "speaker": "卡恰圭达",
      "scene": "卡恰圭达继续讲佛罗伦萨旧家族、人口扩张和政治变迁。他一面承认血统使人自豪，一面把贵族荣耀比作会被时间剪短的斗篷。",
      "spoken": "血统只是一件很快变短的斗篷；后代若不增添价值，祖先不能替他们保持荣耀。",
      "question": "你问自己的高祖：家族来源究竟能给后来者什么？",
      "choices": [
        {
          "text": "回答：它带来义务，却不能代替个人行动",
          "result": "继承被转化为需要承担的责任。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请他说出被荣耀叙事遗漏的邻人和旧家族",
          "result": "城市历史没有只剩胜者族谱。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认自己也因祖先认可而感到高人一等",
          "result": "血统诱惑在变成判断前被看见。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十六歌"
    },
    {
      "speaker": "卡恰圭达",
      "scene": "卡恰圭达终于说出你早已在别处听到的流放预言：你会离开所爱的一切，尝到别人的面包多咸、别人的楼梯多难走。他又命令你不要因害怕权贵而隐去三界所见。",
      "spoken": "你的呼喊应像风吹击最高的树冠。人起初觉得刺耳，消化以后却会得到生命。",
      "question": "写出真相会伤及自己，也可能把私人怨恨伪装成正义。你准备怎样承担作者位置？",
      "choices": [
        {
          "text": "写清可负责的事实、判断理由与自己的涉入",
          "result": "勇敢没有取消准确和责任。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "保留姓名、处境与受权力影响的人，而非只写抽象恶习",
          "result": "预言成为历史见证，不是无主语的谴责。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "在落笔前检查流放创伤怎样塑造自己的声音",
          "result": "自我反省没有使见证失语，反而限制了报复性写作。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十七歌"
    },
    {
      "speaker": "正义之鹰",
      "scene": "火星天的战士光芒散去后，木星天的灵魂先拼成‘爱正义’的字句，再汇成一只鹰。成千上万的光点同时开口，却只使用一个‘我’。",
      "spoken": "我由许多爱正义的灵魂组成；我的声音是一个，喜乐却来自每一颗光。",
      "question": "你听见单数声音，却看见复数灵魂。你如何理解这个‘我’？",
      "choices": [
        {
          "text": "问共同判断怎样约束每个成员的行动",
          "result": "统一没有取消个体责任。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "请求鹰说明不同灵魂如何保留各自姓名",
          "result": "共同体没有把成员磨成无名材料。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "同时怀疑‘只有一个声音可信’和‘只有碎片可信’",
          "result": "你对集体与个人的旧偏见同时被检验。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十八歌"
    },
    {
      "speaker": "正义之鹰",
      "scene": "正义之鹰提出难题：一个生在印度河岸、从未听说基督却正直生活的人，为何不能得救？它随即反问人类凭什么在看不见全局时坐上永恒审判席。",
      "spoken": "你的眼睛连海底也看不见，又凭什么断言千里之外灵魂的终局？",
      "question": "你必须回应的不是陌生人的命运，而是自己的判断权限。",
      "choices": [
        {
          "text": "承认永恒判决超出权限，同时保留对行为的伦理判断",
          "result": "谦卑没有变成道德沉默。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "先想象那个从未被教义触及的具体人生",
          "result": "抽象难题重新拥有一个人的处境。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "允许问题暂时敞开，不用另一种绝对判断填满它",
          "result": "不确定没有立即被另一种绝对判断填满。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第十九歌"
    },
    {
      "speaker": "正义之鹰",
      "scene": "鹰眼中的君王逐一发光，其中竟有异教的图拉真和但丁时代无人预料会得救的特洛伊人里斐斯。鹰解释，人类看到的是结果，却看不见恩典怎样经过希望与信德改变他们。",
      "spoken": "这两人离开肉身时已不是你们以为的异教者；希望曾沿你们看不见的道路抵达他们。",
      "question": "例外没有推翻正义，却证明你的分类并不拥有全部过程。",
      "choices": [
        {
          "text": "修正自己对规则适用范围的理解",
          "result": "秩序被保留，也承认认识有限。",
          "effect": {
            "insight": 4
          },
          "school": "wanderer"
        },
        {
          "text": "追问两人的不同经历，而不只把他们称作例外",
          "result": "异常案例重新成为两段具体生命。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认自己总想用例外证明旧规则全错或全对",
          "result": "非黑即白的阅读方式开始松动。",
          "effect": {
            "insight": 3,
            "will": 1
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十歌"
    },
    {
      "speaker": "彼得·达米安",
      "scene": "土星天没有音乐，因为你的感官还承受不了。黄金阶梯向上超出视野，隐修者的光沿阶梯降下，彼得·达米安从其中靠近。",
      "spoken": "我们不是没有歌；歌声被收起，是为了不摧毁尚未能够承受它的听者。",
      "question": "你问：沉默怎样可能是照顾，而不是缺失？",
      "choices": [
        {
          "text": "接受显现必须配合承受能力",
          "result": "尺度限制了手段，却没有改变真理。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "请彼得说明隐修生活如何训练这种承受",
          "result": "沉默重新拥有历史实践与人的身体。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "不再以感官刺激的强弱衡量真理的多少",
          "result": "观看与聆听的欲望被重新教育。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十一歌"
    },
    {
      "speaker": "本笃",
      "scene": "本笃指责修院富有腐败，拒绝你直接看见他的完整形象；贝雅特丽齐随后让你俯瞰七重天与渺小地球。",
      "spoken": "我的面容只有在最高天才能按你的愿望显现。",
      "question": "她命令你回头向下看。",
      "choices": [
        {
          "text": "依贝雅特丽齐命令俯看七重天与地球，再调整尺度",
          "result": "观看服从承受能力与旅程次序，不以眷恋拒绝转身。",
          "effect": {
            "will": 4,
            "insight": 1
          },
          "school": "wanderer"
        },
        {
          "text": "把本笃对修院腐败的控诉联系到他曾建立的共同生活",
          "result": "高处的责备重新指向具体制度、劳动与群体。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "俯看地球时，拒绝把尺度变小误作责任变轻",
          "result": "宇宙尺度没有成为轻蔑尘世责任的理由。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十二歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "基督与玛利亚的凯旋像群星围绕太阳。你转回贝雅特丽齐时，她提醒你：即使所有诗神一同帮助，诗也无法写出她此刻微笑的万分之一。",
      "spoken": "你的诗必须从这里跳过去，不是因为这里没有内容，而是因为记忆和语言都承受不了全部光。",
      "question": "无法完整说出所见时，你还能诚实地留下什么？",
      "choices": [
        {
          "text": "写清自己能够断言的范围与失败之处",
          "result": "诚实限制了表达，却没有伪造完整性。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "保留贝雅特丽齐此刻与你的关系，而不把她化成光的单位",
          "result": "不可言说没有抹去人物。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "观察语言失败怎样改变自己的观看方式",
          "result": "缺口本身成为旅程的一部分。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十三歌"
    },
    {
      "speaker": "圣彼得",
      "scene": "圣彼得从光群中靠近，像检验金币成色那样接连询问：信是什么，你从哪里得到定义，又凭什么相信《圣经》具有神圣权威。贝雅特丽齐在一旁注视，但不能替你作答。",
      "spoken": "先告诉我信是什么；然后说明你为什么把它当作真理，而不只是熟悉的句子。",
      "question": "你必须回答教义，也必须显出这教义怎样成为自己的认识。你从哪里开始？",
      "choices": [
        {
          "text": "先给出定义，再逐步说明依据与推论",
          "result": "信仰没有被降成情绪，也没有越过论证应有的次序。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "说明这些经文经由哪些见证者、共同体与历史传到你这里",
          "result": "抽象权威重新拥有传承它的人和时间。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "区分会背诵答案的自己与真正被答案改变的自己",
          "result": "考试不只确认知识，也暴露阅读是否发生。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十四歌"
    },
    {
      "speaker": "圣雅各",
      "scene": "圣雅各接替圣彼得考问希望。贝雅特丽齐先证明你确实拥有希望，你仍须说明它是什么、从何而来。与此同时，你想到也许有一天能凭这部长诗返回佛罗伦萨，在洗礼堂受桂冠。",
      "spoken": "希望指向尚未看见的未来善。现在说明：它凭什么不只是愿望？",
      "question": "重返故乡的个人愿望与永恒希望同时在心中出现。你怎样回答而不让两者互相冒名？",
      "choices": [
        {
          "text": "区分可受挫的返乡计划与由信赖支撑的终极希望",
          "result": "两种未来各得其位，个人愿望没有借永恒替自己担保。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "说出流放生活为何使‘归返’具有具体重量",
          "result": "神学回答没有删除诗人失去故乡的历史。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "不要借天堂考试替尘世成功索取保证",
          "result": "希望开始改变欲望，而不是替旧欲望加冕。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十五歌"
    },
    {
      "speaker": "圣约翰",
      "scene": "你误以为圣约翰的肉身已经在天堂，长久凝视他的强光，双眼因而暂时失明。看不见圣徒与贝雅特丽齐时，爱德考试仍继续：你必须说明自己的爱最终指向什么，以及什么经验把它唤醒。",
      "spoken": "我的身体仍在尘土中。不要再用错误期待逼迫眼睛；现在即使看不见，也回答你所爱的是什么。",
      "question": "视觉被撤走以后，你靠什么继续辨认自己的爱？",
      "choices": [
        {
          "text": "按爱的对象、理由与所产生的行动依次回答",
          "result": "失明没有打乱判断次序，爱也没有被说成无方向的热情。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "从被造世界与他人怎样使你经验善说起",
          "result": "爱德没有脱离身体、关系和曾经接受的恩惠。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "承认这次失明来自自己把期待误当事实",
          "result": "错误没有被遮掩，反而成为更诚实回答的起点。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十六歌"
    },
    {
      "speaker": "圣彼得",
      "scene": "圣彼得的光因愤怒变红，谴责继承自己位置的腐败教皇把罗马变成血与污秽之地。说完，众光一同上升，你再次俯看地球。",
      "spoken": "我在地上的位置已经成为买卖与暴力的工具；不要因为批判来自制度内部，就把它删成沉默。",
      "question": "你尊敬圣彼得，也身处他正在审判的教会传统。你怎样承受这段话？",
      "choices": [
        {
          "text": "区分职位的正当性与任职者的具体罪责",
          "result": "忠诚没有替腐败行为免责。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "追问受腐败教会伤害的具体人群",
          "result": "制度批判不再只是一场神圣愤怒。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "保留批判所指向的具体人物，不把它稀释成普遍寓言",
          "result": "抽象化逃避具体责任的冲动被截住。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十七歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "一个几乎无法直视的光点被九圈火焰围绕；越靠近中心，圆圈越小、转速却越快。你困惑于它和物质宇宙正好相反，贝雅特丽齐解释这里的尺度不是空间大小，而是爱与力量。",
      "spoken": "物质天球越大越快；天使圆环越接近中心越快。两幅秩序以不同尺度对应，不是把一张图简单翻转。",
      "question": "旧地图不能直接套上眼前景象。你怎样重建它们的关系？",
      "choices": [
        {
          "text": "分别说明两套秩序的尺度，再建立对应",
          "result": "结构得到保留，形式相反也没有被误判为矛盾。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "追问每一圈天使承担什么职分，而不只比较几何位置",
          "result": "圆环重新成为有行动和关系的群体。",
          "effect": {
            "mercy": 2,
            "insight": 3
          },
          "school": "witness"
        },
        {
          "text": "允许两幅图暂时不重合，先修正自己的观看工具",
          "result": "观看工具的局限成为需要改变的对象。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十八歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "贝雅特丽齐解释天使的创造与堕落，随后突然转向人间讲坛：有些讲道者用笑话和无来源的奇谈取代福音，只求听众发笑和赞叹。",
      "spoken": "羊群从讲坛回来，只吃到风；传道者却因斗篷鼓胀而自得。",
      "question": "如果一个故事寓意动人却来源可疑，你应怎样听？",
      "choices": [
        {
          "text": "先区分可证事实、比喻和传闻",
          "result": "好目的没有替虚假来源免责。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "追问故事由谁传播、服务谁的权力",
          "result": "讲坛上的声音获得了社会位置。",
          "effect": {
            "mercy": 3,
            "insight": 2
          },
          "school": "witness"
        },
        {
          "text": "承认故事越精彩，你越容易降低对来源的要求",
          "result": "被打动的过程进入了阅读反思。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第二十九歌"
    },
    {
      "speaker": "贝雅特丽齐",
      "scene": "九重天的空间感突然消失。你先看见一道光河，两岸开满春花；当眼睛饮下光，河流又显成圆形湖泊，天使与得救者最终组成白玫瑰。",
      "spoken": "先让眼睛饮下这道光。你不是在三个景象中挑一个真的，而是在学习承受同一真实的不同显现。",
      "question": "光河就在眼前。你怎样进入这次观看变化？",
      "choices": [
        {
          "text": "依照贝雅特丽齐指示接近光河",
          "result": "你接受观看也有次序和条件。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "留意每次变化中哪些面孔和关系仍被保存",
          "result": "异象没有把其中的人变成纯粹装饰。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "放下寻找唯一图形的冲动，让旧视野被改变",
          "result": "转变本身成为抵达天府的道路。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第三十歌"
    },
    {
      "speaker": "圣伯尔纳",
      "scene": "你从白玫瑰转向身旁，准备再问贝雅特丽齐，却发现那里已经站着圣伯尔纳。贝雅特丽齐远在玫瑰高处；你向她致谢，她微笑着看了你一眼，随后把目光转回永恒之源。",
      "spoken": "她已经完成把你带到这里的使命。最后的凝视需要另一位引路人；先向上看。",
      "question": "关系已经改变，却没有正式告别。你怎样接受最后一位向导？",
      "choices": [
        {
          "text": "完成致谢，然后接受伯尔纳此刻承担的职责",
          "result": "转换没有被依恋阻断，也没有否认先前关系的善。",
          "effect": {
            "will": 3,
            "mercy": 2
          },
          "school": "wanderer"
        },
        {
          "text": "记住贝雅特丽齐从尘世女子到引路人的完整历程",
          "result": "她没有在功能完成后从故事中消失。",
          "effect": {
            "mercy": 4,
            "insight": 1
          },
          "school": "witness"
        },
        {
          "text": "留意自己为何把引路人更替体验为被遗弃",
          "result": "失落被理解，却不再决定最后的观看。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第三十一歌"
    },
    {
      "speaker": "圣伯尔纳",
      "scene": "圣伯尔纳解释白玫瑰的座次：玛利亚与夏娃相对，希伯来妇女形成分界，夭折儿童的位置又引出预定、恩典与人的功劳之间的难题。",
      "spoken": "你能看见座位的秩序，却不能据此称量每个灵魂所得恩典的全部原因。",
      "question": "你仍觉得儿童之间的不同位置难以理解。你怎样继续追问？",
      "choices": [
        {
          "text": "承认现有原则与自己权限的边界",
          "result": "理性继续工作，却不冒充全知。",
          "effect": {
            "will": 2,
            "insight": 3
          },
          "school": "wanderer"
        },
        {
          "text": "坚持这些位置首先涉及具体儿童而非抽象难题",
          "result": "人的面孔没有被神学结构吞没。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "检查不适感是在拒绝问题，还是在推动自己改变尺度",
          "result": "伦理震动被保存为继续观看的动力。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第三十二歌"
    },
    {
      "speaker": "圣伯尔纳",
      "scene": "圣伯尔纳向玛利亚祈祷后，你的视线进入神光。宇宙像散落书页在其中合为一册，三个同色同量的圆环显出一与三，人的形象又出现在第二环中；当理智无法说明圆与人怎样相合，一道闪光使欲望和意志同时转动。",
      "spoken": "最后并不是你解开了神性的图形，而是你的愿望终于与推动太阳和群星的爱同向。",
      "question": "语言已经不能复制所见。旅程最后能诚实留下什么？",
      "choices": [
        {
          "text": "明确说出自己看见到哪里、理智又在哪里停止",
          "result": "表达服从真实边界，没有用完整图解冒充圆满知识。",
          "effect": {
            "will": 3,
            "insight": 2
          },
          "school": "wanderer"
        },
        {
          "text": "保留伯尔纳、玛利亚、贝雅特丽齐以及一路引你到此的关系",
          "result": "终极异象没有吞掉使观看成为可能的人。",
          "effect": {
            "mercy": 4
          },
          "school": "witness"
        },
        {
          "text": "写下意志怎样被改变，而不是声称占有所见",
          "result": "作品以回转的结果收束，不以无误答案封闭。",
          "effect": {
            "insight": 4
          },
          "school": "reader"
        }
      ],
      "source": "《天堂篇》第三十三歌"
    }
  ]
};

window.DANTE_ENCOUNTERS = encounters;
