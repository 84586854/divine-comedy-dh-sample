const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const titles={
inferno:["幽暗森林","召唤与迟疑","地狱之门","林薄与高贵城堡","风暴中的弗兰切斯卡","冷雨与恰科","财富之轮","冥河与狄斯城","复仇女神与天使","火墓中的异端者","地狱分类学","血河与半人马","自杀者之林","火雨荒原","布鲁内托","三位佛罗伦萨人","革律翁","诱骗与谄媚","买卖圣职者","占卜者","魔鬼巡逻队","恶魔内斗","伪善者的铅衣","盗贼与蛇","身份变形","尤利西斯最后航行","圭多的坏建议","制造分裂者","炼金术士","伪造者之热病","巨人之井","冰湖与叛徒","乌戈利诺","路西法与出路"],
purgatorio:["炼狱海岸","天使之舟与卡塞拉","曼弗雷迪与理性的边界","贝拉夸与迟延","暴死者的请求","索尔代洛与意大利","花谷中的君王","守护天使与蛇","鹰梦与七个P","骄傲者与浮雕","谦卑祷文","路面的警示图像","嫉妒者与缝合之眼","阿尔诺河谷","愤怒之烟","马可·伦巴多与自由意志","爱的秩序","爱与选择","海妖之梦","贪婪与王朝","斯塔提乌斯现身","诗人与神秘树","福雷塞","诗歌的新风格","灵魂与身体","欲望之火与诗人","火墙、利亚与拉结","地上乐园与玛泰尔达","教会凯旋寓言","维吉尔离去","忏悔与忘川","车辇与知识树","欧诺埃河与净化"],
paradiso:["超越人性与升天","月天与月斑","皮卡尔达","誓愿与意志","誓愿的重量","查士丁尼与帝国之鹰","十字架与救赎","金星天与差异天性","库妮扎、福尔科与喇合","日天神学家之环","方济各","多明我","所罗门与轻率判断","复活之身与火星十字","卡恰圭达与旧佛罗伦萨","祖先与城市记忆","流放预言","正义之鹰","谁能够得救","正义诸王","土星天与天梯","本笃与腐败修院","基督凯旋","信德考试","望德考试","爱德考试与亚当","伯多禄斥责教皇","天使的秩序","天使创造与堕落","光之河与白玫瑰","贝雅特丽齐离去","白玫瑰中的位置","三重圆环"]};
const realmInfo={
inferno:{zh:"地狱篇",en:"INFERNO",abbr:"Inf.",image:"assets/inferno-first-person.png",transition:"我们继续向地狱更深处下降；这里的亡魂会把生前的选择重新讲成一套理由。"},
purgatorio:{zh:"炼狱篇",en:"PURGATORIO",abbr:"Purg.",image:"assets/purgatorio-first-person.png",transition:"我们沿炼狱山向上行走；这里的灵魂并非永远定型，他们正在用时间重新训练欲望。"},
paradiso:{zh:"天堂篇",en:"PARADISO",abbr:"Par.",image:"assets/paradiso-first-person.png",transition:"我们上升到新的天球；这里的相遇不是刑罚展示，而是一次关于知识、爱与观看限度的教学。"}};
const roles={
  wanderer:{name:"秩序见习者",school:"经院神学",scholar:"托马斯·阿奎那及中世纪德性论传统",will:58,mercy:54,insight:53,thesis:"行动必须服从善的正确秩序。自由不是任性，而是意志在理性辨认的善中自我决定。",plainThesis:"别只问‘我想不想’，要问‘这件事本身对不对、目的是什么、手段是否正当’。",rules:["先辨认行动所追求的善，不因痛苦或快意改变善恶名称。","区分行为、意图与处境；好意不能自动使错误手段正当。","怜悯受苦者，但不要让怜悯取消其自由意志与责任。","把惩罚看作欲望秩序的显形，不以私人好恶改写宇宙等级。","当理性抵达边界时承认恩典，但不得借恩典逃避判断。"],plainRules:["先看这件事到底在追求什么，不能因为结果舒服就说它是好的。","动机好不等于手段对，还要看当时的具体处境。","可以同情一个人，但不能因此说他完全没有选择。","不要因为喜欢或讨厌某个人，就随意改变判断标准。","不知道时可以承认不知道，但不能把责任全推给命运或神意。"]},
  witness:{name:"尘世见证者",school:"形象论与历史现实主义",scholar:"埃里希·奥尔巴赫",will:49,mercy:66,insight:55,thesis:"亡灵不是抽象罪名的标本。永恒处境完成、放大却没有抹除他们尘世的语言、身体、政治与个性。",plainThesis:"别急着把人物叫作‘罪人’或‘圣人’，先弄清他是谁、从哪里来、经历了什么。",rules:["先记住人物怎样说话，再判断他被归入哪一类。","不得用寓意标签抹去姓名、城邦、亲缘与历史处境。","让永恒结局与尘世生命彼此照明，不把任何一边降为幻象。","保存矛盾：人物可以有罪，也可以仍然具有尊严与真实痛苦。","警惕宏大秩序遮蔽具体的人；每次裁决都要留下人的面孔。"],plainRules:["先让人物把话说完，注意他用了什么词和语气。","记住他的姓名、城市、家族和关系，不要只贴标签。","把他现在的处境和生前经历放在一起看。","一个人可以做错事，同时仍值得被当作具体的人理解。","每次判断都要问：这套大道理有没有把眼前这个人抹掉？"]},
  reader:{name:"回转校勘者",school:"皈依诗学",scholar:"约翰·弗雷切罗及奥古斯丁式阅读传统",will:52,mercy:49,insight:67,thesis:"《神曲》不只是展示彼岸，也是旅人学习重新阅读自己的过程。一次正确解释若不改变观看者，仍可能是一种迷失。",plainThesis:"重点不只是‘他对不对’，还要观察你为什么相信他，以及这次相遇有没有改变你的看法。",rules:["区分正在犯错的旅人和回望旅程的诗人；两种声音不可混为一谈。","把迷路、下降、转身与上升视为精神运动，而非旅游路线。","每次被人物打动时，检查自己的同情是否也可能是一种误读。","解释必须带来意志的转向；只增加知识而不改变自己不算通过。","保留失败和修订痕迹，因为皈依不是瞬间获得无误答案。"],plainRules:["故事里的但丁会犯错；后来写书的但丁在回头反省，两者别混为一谈。","下降和上升也代表认识方式在变化，不只是换地图。","被人物感动时，顺便问问自己是不是被漂亮的说法带偏了。","真正理解以后，你的下一步应该会改变；只记知识点不算通过。","犯错不可怕，重要的是留下记录并愿意修正。"]}
};
const portraits={
virgil:"assets/character-virgil.png",beatrice:"assets/character-beatrice.png",
francesca:"assets/character-infernal-soul.png",inferno:"assets/character-infernal-soul.png",purgatorio:"assets/character-penitent.png",paradiso:"assets/character-celestial.png"
};
const storageKey="dante-immersive-v5";
let corpus=null,index=0,phase="explore",pendingIndex=null,showAll=false,showAllChinese=false,particles=[],ctx=null,dialogueHistory=[],visibleChoiceOrder=[0,1,2];
let state=loadState();

function loadState(){try{return{role:null,visited:[],decisions:{},detours:{},stranded:null,current:0,musicOn:true,...JSON.parse(localStorage.getItem(storageKey)||"{}")}}catch{return{role:null,visited:[],decisions:{},detours:{},stranded:null,current:0,musicOn:true}}}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(state))}catch{}}
function current(){return corpus.cantos[index]}
function data(){const c=current();return window.DANTE_ENCOUNTERS[c.realm][c.canto-1]}
function title(c=current()){return titles[c.realm][c.canto-1]}
function clamp(n){return Math.max(0,Math.min(100,n))}
function stats(){const base=roles[state.role]||roles.wanderer,s={will:base.will,mercy:base.mercy,insight:base.insight};Object.values(state.decisions).forEach(d=>Object.entries(d.effect||{}).forEach(([k,v])=>s[k]=clamp(s[k]+v)));return s}
function choiceBurden(effect={}){const values=Object.values(effect),harm=values.filter(v=>v<0).reduce((sum,v)=>sum+Math.abs(v),0),help=values.filter(v=>v>0).reduce((sum,v)=>sum+v,0);if(harm>=4)return 2;if(harm>0)return 1;if(help>=5)return-1;return 0}
function keywordScore(text,words){return words.reduce((score,word)=>score+(text.includes(word)?1:0),0)}
function schoolScore(choice,role=state.role){const e=choice.effect||{},text=`${choice.text} ${choice.result}`,positive=Object.values(e).filter(v=>v>0).reduce((a,b)=>a+b,0),negative=Object.values(e).filter(v=>v<0).reduce((a,b)=>a+Math.abs(b),0);if(role==="wanderer")return positive-negative*2+keywordScore(text,["承认","责任","秩序","辨认","说明","追问","证据","节制"])*2-keywordScore(text,["伪装","混进","逃避","不负责","立即占有"])*2;if(role==="witness")return(e.mercy||0)*1.7+(e.insight||0)+keywordScore(text,["名字","记住","记录","询问","听","保留","城邦","父亲","母亲","人物"])*2-keywordScore(text,["抹去","只问","只记","拒绝替","停止观看"])*2;if(role==="reader")return(e.insight||0)*1.4+(e.will||0)+keywordScore(text,["承认","检验","修订","穿过","继续","改变","回望","错误","转向"])*2-keywordScore(text,["留在原地","等待","不再打开","停止","拒绝改变"])*2;return positive-negative}
function followsRule(choiceIndex){const choices=data().choices,marked=choices.some(c=>c.school);if(marked){const mark=choices[choiceIndex]?.school;return Array.isArray(mark)?mark.includes(state.role):mark===state.role}const scores=choices.map(c=>schoolScore(c)),best=Math.max(...scores);return scores[choiceIndex]===best}
function followed(){return Object.values(state.decisions).filter(d=>d.compliant).length}
function broken(){return Object.values(state.decisions).filter(d=>d.compliant===false).length}
function brokenRealms(){return new Set(Object.values(state.decisions).filter(d=>d.compliant===false).map(d=>d.realm)).size}
function burden(){return Math.min(7,Math.max(0,Object.values(state.decisions).reduce((sum,d)=>sum+(d.compliant?Math.min(0,d.burdenDelta??0):Math.max(1,d.burdenDelta??1)),0)))}
function formatEffect(effect={}){const labels={will:"意志",mercy:"怜悯",insight:"辨识"};return Object.entries(effect).map(([key,value])=>`${labels[key]} ${value>0?"+":""}${value}`).join(" · ")||"状态未变"}
function updateStats(){const s=stats(),b=burden();$("#willValue").textContent=s.will;$("#mercyValue").textContent=s.mercy;$("#insightValue").textContent=s.insight;$("#burdenValue").textContent=b;$("#game").classList.toggle("is-burdened",b>=3)}
function walk(){const g=$("#game");g.classList.remove("is-walking");requestAnimationFrame(()=>{g.classList.add("is-walking");setTimeout(()=>g.classList.remove("is-walking"),1150)})}
function roman(n){const pairs=[["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];let out="";for(const [r,v] of pairs)while(n>=v){out+=r;n-=v}return out}
function previousTitle(){if(index===0)return"人间那条已经迷失的正路";const p=corpus.cantos[index-1];return `上一歌“${title(p)}”`}
function school(){return roles[state.role]||roles.wanderer}
function guideFor(c=current()){
  if(c.realm==="paradiso"&&c.canto>=31)return{name:"圣伯尔纳",role:"最后的凝视引路人",portrait:portraits.paradiso};
  if(c.realm==="paradiso"||(c.realm==="purgatorio"&&c.canto>=30))return{name:"贝雅特丽齐",role:"启示与判断的引路人",portrait:portraits.beatrice};
  return{name:"维吉尔",role:"理性与诗歌的引路人",portrait:portraits.virgil};
}
function portraitFor(name,c=current()){
  if(name.includes("维吉尔"))return portraits.virgil;
  if(name.includes("贝雅特丽齐"))return portraits.beatrice;
  if(name.includes("弗兰切斯卡")||name.includes("保罗"))return portraits.francesca;
  return portraits[c.realm];
}
function characterIdentity(name){
  const identities={
    "维吉尔":"古罗马诗人 · 你的理性引路人","贝雅特丽齐":"但丁青年时代所爱之人 · 天堂引路者","弗兰切斯卡":"拉文纳贵族女性 · 与保罗同来的亡魂","卡戎":"阿刻戎河船夫","荷马":"古希腊史诗诗人","恰科":"佛罗伦萨人 · 泥雨中的贪食者","菲利波·阿尔真蒂":"但丁的佛罗伦萨政敌 · 冥河中的愤怒者","复仇女神":"古典神话中的复仇力量","法里纳塔":"佛罗伦萨吉伯林派领袖","涅索斯":"守卫血河的半人马","皮耶尔·德拉·维涅":"皇帝腓特烈二世的前书记官","卡帕纽斯":"向朱庇特挑战的底比斯战士","布鲁内托·拉蒂尼":"但丁的老师 · 佛罗伦萨学者","雅科波·鲁斯蒂库奇":"关心佛罗伦萨命运的旧城公民","革律翁":"以诚实面孔遮掩蝎尾的欺诈怪物","受骗者":"被诱骗者的合成人物 · 代表第一恶沟的受害声音","教皇尼各老三世":"因买卖圣职受罚的教皇","曼托":"与曼图亚建城传说相连的占卜者","马拉科达":"持钩恶魔的首领","钱波罗":"试图从沥青中脱身的纳瓦拉贪吏","卡塔拉诺":"穿铅衣的博洛尼亚伪善修士","万尼·富奇":"皮斯托亚盗贼 · 以预言报复但丁","阿涅洛":"在蛇群中失去形体的佛罗伦萨盗贼","尤利西斯":"古希腊英雄 · 越界的航海者","圭多·达·蒙特费尔特":"晚年入修会的军事谋略家","贝特朗·德·博恩":"因挑拨父子而受罚的诗人与领主","卡波基奥":"因伪造与炼金受罚者","亚当师傅":"伪造佛罗伦萨金币者","宁录":"与巴别塔和语言分裂相连的巨人","博卡·德利·阿巴蒂":"被指控在蒙塔佩尔蒂战役中叛变者","乌戈利诺":"比萨贵族 · 饥饿塔的囚徒","加图":"罗马共和派人物 · 炼狱山守门者","卡塞拉":"佛罗伦萨歌手 · 但丁的朋友","曼弗雷迪":"西西里国王 · 临终悔改的绝罚者","贝拉夸":"但丁的旧识 · 生前以迟缓著称","皮娅":"以一句婚姻暗语请求被记住的锡耶纳女性","索尔代洛":"曼图亚诗人","尼诺·维斯孔蒂":"加卢拉法官 · 花谷中的旧友","守护天使":"花谷中抵御蛇影的两位天使","守门天使":"在炼狱门刻下七个P的守门者","石雕中的玛利亚":"第一层浮雕中的受报形象 · 并非真实亡魂","奥德里西":"古比奥细密画家 · 反思名声者","谦卑天使":"擦去额上P字的引路天使","萨皮娅":"曾因邻人失败而欣喜的锡耶纳女子","圭多·德尔·杜卡":"批判罗马涅与阿尔诺河谷的贵族","温柔天使":"引你进入愤怒烟幕的天使","马可·伦巴多":"伦巴第廷臣 · 自由意志论者","奔跑的怠惰者":"以奔跑训练热忱的一群灵魂","海妖":"梦中由凝视塑成美貌的诱惑形象","于格·卡佩":"卡佩王朝祖先 · 后代罪行的控诉者","斯塔提乌斯":"古罗马诗人 · 已完成净化的灵魂","福雷塞":"但丁的朋友 · 在饥饿中净化欲望","博纳君塔":"卢卡诗人 · 讨论新诗风者","阿尔诺·达尼埃尔":"以奥克语说话的普罗旺斯诗人","玛泰尔达":"地上乐园的引导者","皮卡尔达":"被迫离开修院的女性","卡洛·马泰洛":"安茹王子 · 讨论天性与社会职分","库妮扎":"从情欲历史转向政治判断的金星天灵魂","查士丁尼":"东罗马皇帝 · 法典编纂者","托马斯·阿奎那":"经院哲学家与神学家","波拿文都拉":"方济各会神学家","所罗门":"《圣经》中的智慧君王","卡恰圭达":"但丁的高祖 · 十字军战士","正义之鹰":"由木星天众多正义灵魂组成的共同形象","彼得·达米安":"隐修改革者 · 土星天灵魂","本笃":"西方修院传统的重要奠基者","圣彼得":"使徒 · 信德的考官","圣雅各":"使徒 · 望德的考官","圣约翰":"使徒 · 爱德的考官","圣伯尔纳":"修院神学家 · 最后的引路人"
  };
  return identities[name]||"《神曲》本歌人物 · 由原文场景重构";
}
function routeLocation(c=current()){
  if(c.realm==="inferno"){
    if(c.canto<=2)return"黑暗森林与向阳山脚";if(c.canto===3)return"地狱之门与阿刻戎河岸";if(c.canto===4)return"第一圈林薄";if(c.canto===5)return"第二圈的永恒风暴";if(c.canto===6)return"第三圈的冰冷泥雨";if(c.canto<=8)return"贪婪者与冥河之间的低地";if(c.canto<=10)return"狄斯城与燃烧的坟墓";if(c.canto<=17)return"第七圈的三重暴力地带";if(c.canto<=30)return"第八圈马勒波尔杰的十道恶沟";if(c.canto===31)return"通往第九圈的巨人井";return"第九圈科奇土斯冰湖";
  }
  if(c.realm==="purgatorio"){
    if(c.canto<=2)return"炼狱山脚的海岸";if(c.canto<=8)return"山门以下的前炼狱";if(c.canto===9)return"刻着七个P的炼狱山门";if(c.canto<=12)return"净炼骄傲的第一层平台";if(c.canto<=14)return"净炼嫉妒的第二层平台";if(c.canto<=17)return"净炼愤怒的烟幕平台";if(c.canto<=19)return"怠惰平台与通往上层的山路";if(c.canto<=22)return"净炼贪婪的第五层平台";if(c.canto<=24)return"净炼贪食的第六层平台";if(c.canto<=27)return"净炼色欲的火墙";return"炼狱山顶的地上乐园";
  }
  if(c.canto===1)return"地上乐园上空通往月天的光路";if(c.canto<=5)return"月天及其光斑";if(c.canto===6)return"水星天";if(c.canto<=9)return"金星天";if(c.canto<=14)return"太阳天的智慧者光环";if(c.canto<=18)return"火星天的十字光阵";if(c.canto<=20)return"木星天的正义之鹰";if(c.canto<=22)return"土星天的黄金阶梯";if(c.canto<=27)return"恒星天";if(c.canto<=29)return"原动天";return"天府与白玫瑰";
}
const storyOverrides={
  "inferno-1":"你在1300年圣周前后的黑暗森林里醒来，已经偏离人间的正路。你试着爬向有阳光的山坡，却被豹、狮和母狼逼退。退回树影时，一个沉默的人影出现：他是古罗马诗人维吉尔，也是贝雅特丽齐托付给你的引路人。",
  "inferno-2":"天色已晚，你仍站在森林边缘，尚未真正进入地下世界。你担心自己既不是埃涅阿斯，也不是圣保罗，没有资格活着走进死者之国。维吉尔于是说明自己如何受贝雅特丽齐、露琪亚与圣母的关怀链条召唤，专程来找你。",
  "inferno-3":"你跟随维吉尔走到刻有绝望铭文的大门，穿过追逐空旗的无立场者，来到阿刻戎河岸。卡戎看见你有肉身、会投下影子，立刻知道你不是普通亡魂，因此举桨阻拦。",
  "inferno-5":"你和维吉尔越过审判亡魂的米诺斯，进入第二圈。狂风把被情欲支配的灵魂吹得无法落地。你看见一对始终靠在一起的影子，主动呼唤他们；他们像归巢的鸽子般离开风队。女子是弗兰切斯卡，男子是丈夫的弟弟保罗。你追问两人为何越过边界，她才讲起共同阅读《兰斯洛特》的那个下午。",
  "inferno-10":"你进入狄斯城内燃烧的石墓。法里纳塔从一座敞开的坟中直起上身，因为听出你的托斯卡纳口音而主动盘问家族与党派；这不是偶遇闲谈，而是佛罗伦萨旧政敌在死后继续辨认彼此。",
  "inferno-26":"在第八圈第八沟，每一团分叉火焰都包着以欺诈建议误导他人的灵魂。维吉尔替你向一团双角火焰发问，其中较大的火舌是尤利西斯；他回应的不是荷马故事，而是但丁另写的最后一次越界航行。",
  "inferno-33":"你穿过叛徒被冻结的科奇土斯湖，看见一个灵魂啃咬另一个人的头骨。你请求他说明仇恨的缘由，于是乌戈利诺抬起沾血的嘴，讲述自己与孩子被囚进比萨饥饿塔的经过。",
  "purgatorio-1":"你和维吉尔从地狱最深处沿路西法身旁的洞道翻转重力，终于在南半球海岸重见星空。守山人加图拦住你们：一个自杀身亡的罗马共和派人物为何守护炼狱自由，正是本歌要你思考的矛盾。",
  "purgatorio-2":"一艘由天使驾驶的船把新亡魂送到海岸。歌手卡塞拉认出活着的老友但丁；你们试图拥抱，却三次只抱到空气。你请他唱一首旧歌，于是众灵停下赶路聆听。",
  "purgatorio-16":"你在净炼愤怒的浓烟里几乎失去视力，只能听见祈祷声。马可·伦巴多从烟中回应你的问话；你问世界败坏究竟应怪星辰还是人，他才展开自由意志与政治秩序的论证。",
  "purgatorio-30":"教会寓言般的仪仗抵达地上乐园，贝雅特丽齐从花雨中出现。你下意识转向维吉尔，却发现古罗马诗人已经离去；理性引路到此结束，贝雅特丽齐以旧相识和审判者的身份直接叫出但丁的名字。",
  "paradiso-3":"月天的光中浮现出像水中倒影般的面孔。你误以为那只是反光，转身寻找实体；贝雅特丽齐纠正你后，皮卡尔达才向你说明自己是谁，以及为何被迫离开修院仍安于此处。",
  "paradiso-6":"水星天的一点光主动报出身份：他是东罗马皇帝查士丁尼。因为你想知道他的帝国使命，他用几乎整整一歌追述罗马之鹰的历史，把个人传记、法制史与救赎史连在一起。",
  "paradiso-10":"你进入太阳天，两圈智慧者的光围绕你与贝雅特丽齐旋转。托马斯·阿奎那从光环中逐一介绍同伴；这些真实的思想家被编排成一幅会说话的中世纪知识地图。",
  "paradiso-17":"在火星天，你终于向高祖卡恰圭达追问一路听见的含混预言。他不再绕弯：你将被逐出佛罗伦萨，先尝到别人的面包有多咸，再学会承担把所见写出的责任。",
  "paradiso-31":"贝雅特丽齐回到白玫瑰中的座位。你转身时发现身旁已经换成圣伯尔纳；他解释自己的身份，并把最后一段路从哲学论证转为观看训练与向圣母的祈求。",
  "paradiso-33":"圣伯尔纳祈祷后，你的目光被允许进入最后的光。此处不再出现新人物与你辩论；故事转为但丁如何用正在失效的记忆与语言，描述三重圆环和人神结合的形象。"
};
function meetingReason(d,c=current()){
  const scene=d.scene;
  if(/拦|守门|逼近|阻止|拒绝|举桨|挡住/.test(scene))return`${d.speaker}占据了你们必须经过的道路，你不能绕开这场交涉。`;
  if(/歌|声音|听见|喊|祈祷|哭|叫/.test(scene))return`你循着声音辨认出${d.speaker}，并在近处停下。`;
  if(/浮现|出现|走来|靠近|降下|升起|飞来/.test(scene))return`${d.speaker}主动进入你们的视野；${guideFor(c).name}示意你停下听取来意。`;
  if(/看见|望见|注视|影|光|火焰|面孔/.test(scene))return`你驻足观察，${d.speaker}发现你的目光后开口，使眼前景象获得了姓名和来历。`;
  const variants=[`${guideFor(c).name}认出${d.speaker}，示意你先听清来意。`,`道路在${d.speaker}面前收窄；要继续前进，你必须先听完这段话。`,`你询问眼前情形为何如此，${d.speaker}以自己的经历作答。`,`${d.speaker}注意到你与其他灵魂不同，主动把话转向你。`];
  return variants[c.global%variants.length];
}
function sceneNarration(){
  const c=current(),d=data(),key=`${c.realm}-${c.canto}`;
  if(storyOverrides[key])return storyOverrides[key];
  return `你和${guideFor(c).name}来到${routeLocation(c)}。${d.scene}`;
}
const cantoThemes={
  inferno:["journey","grace","journey","language","love","civic","wealth","civic","vision","civic","journey","civic","body","freedom","civic","civic","language","language","wealth","language","language","language","language","civic","body","journey","language","civic","body","language","language","civic","memory","journey"],
  purgatorio:["freedom","memory","grace","freedom","memory","civic","civic","vision","journey","vision","memory","vision","love","civic","love","freedom","love","freedom","vision","wealth","freedom","language","body","language","body","love","freedom","journey","vision","memory","memory","civic","grace"],
  paradiso:["journey","vision","freedom","freedom","freedom","civic","grace","freedom","love","vision","wealth","civic","freedom","body","memory","civic","memory","civic","grace","grace","vision","wealth","vision","grace","grace","love","civic","vision","language","vision","memory","grace","vision"]
};
function encounterMotif(){const c=current();return cantoThemes[c.realm][c.canto-1]}
const schoolPlain={
  wanderer:{love:"别把‘因为爱’当成免责理由，要看这份爱让人实际做了什么。",civic:"权力应服务大家，不能因为属于某个党派就自动正确。",language:"说话也会造成后果，所以内容、动机和结果都要看。",memory:"怀念过去不等于过去就是对的。",freedom:"环境会限制人，但只要还有选择，就仍要承担相应责任。",body:"身体和心不是两套互不相干的系统，行动由完整的人承担。",wealth:"钱只是工具，关键是怎样获得和使用。",grace:"信仰不能替你逃掉眼前本来能做的判断。",vision:"看见壮观景象不等于理解了真相。",journey:"先弄清做了什么、为什么做、当时有什么限制，再判断。"},
  witness:{love:"先还原两个人怎样相遇、怎样说话，别一上来只贴‘情欲’标签。",civic:"城市、党派和家族冲突会真实地影响人物，不只是背景知识。",language:"一个人怎样讲自己，能暴露他的性格、时代和自我辩护。",memory:"记住姓名、家人和城市，人物才不会变成抽象案例。",freedom:"他可能有罪，也仍然是一个值得认真听取的具体的人。",body:"姿势、伤口和声音都是人物经历的一部分，不只是象征。",wealth:"钱的问题也牵涉社会关系和制度，不能只骂个人贪心。",grace:"谈宏大的得救秩序时，也别忘了其中每个具体的人。",vision:"天堂异象仍由具体形象组成，它没有抛弃现实世界。",journey:"先搞清这个人是谁、在哪里、经历了什么，再下判断。"},
  reader:{love:"先问自己为什么被这段爱情打动，也许你正被人物的说法牵着走。",civic:"你怎样评价政治人物，也会暴露自己的立场和盲点。",language:"话说得动听不代表是真的，注意自己为什么愿意相信。",memory:"回忆的目的不是沉浸过去，而是重新理解现在。",freedom:"正确答案还不够；真正理解后，你接下来的选择应当改变。",body:"但丁的害怕、昏倒和疼痛都说明他还没完全想明白。",wealth:"别只用‘得到多少’衡量旅程，要看你的爱和判断是否改变。",grace:"有时必须承认旧办法不够用，才可能真的转向。",vision:"越接近终点，越要承认语言和视觉都有极限。",journey:"注意你看路的方式；真正困住人的往往是旧看法。"}
};
const humanitiesNodes={
  love:{title:"宫廷爱情 × 阅读史 × 道德责任",body:"《神曲》把爱情诗传统放进审判现场：动人的语言既能保存感情，也可能替选择开脱。",quotes:[{text:"我们的心不得安息，直到安息于你。",source:"奥古斯丁《忏悔录》I.1（中译）"},{text:"爱是人与上帝之间的一种友谊。",source:"托马斯·阿奎那《神学大全》II-II, q.23, a.1（意译）"}]},
  civic:{title:"城邦政治 × 帝国史 × 流放书写",body:"佛罗伦萨派争、教皇权与帝国权并非背景板；它们决定人物如何结盟、背叛、流亡并记忆城市。",quotes:[{text:"人天生是政治的动物。",source:"亚里士多德《政治学》I.2（中译）"},{text:"历史是时代的见证、真理的光、记忆的生命。",source:"西塞罗《论演说家》II.36（中译）"}]},
  language:{title:"修辞学 × 复义解释 × 叙事可信度",body:"人物证词、诗人叙述与读者判断并不总是一致。数字化并置原文、译文和选项，可以追踪意义怎样在不同声音间改变。",quotes:[{text:"这部作品的意义不止一种；更确切地说，它是复义的。",source:"但丁《致斯卡拉大亲王书》第十三封 §20（中译）"},{text:"名不正，则言不顺。",source:"《论语·子路》"}]},
  memory:{title:"记忆术 × 自传传统 × 城市书写",body:"亡魂反复讲述生前片段；记忆既保存人物，也会筛选和重排过去。旅途中每一次回想，都可能改变你理解现在的方式。",quotes:[{text:"记忆的力量是伟大的，广大而无边。",source:"奥古斯丁《忏悔录》X.8（中译）"},{text:"我劝你把我的话当作穿透未来之声，牢牢记住。",source:"但丁《天堂篇》第十七歌（意译）"}]},
  freedom:{title:"伦理学 × 自由意志 × 责任归属",body:"中世纪的自由意志讨论连接亚里士多德伦理学、基督教神学与但丁的奖惩结构：受环境影响不等于毫无选择。",quotes:[{text:"选择所关涉的，是我们力所能及的事情。",source:"亚里士多德《尼各马可伦理学》III.3（中译）"},{text:"人有自由选择；否则劝告、命令、禁止、赏罚都会失去意义。",source:"托马斯·阿奎那《神学大全》I, q.83, a.1（意译）"}]},
  body:{title:"灵魂论 × 身体史 × 复活神学",body:"影子、伤口、饥饿与光体把古代灵魂论和基督教复活观变成可见场景；身体反应也是叙事证据。",quotes:[{text:"灵魂是具有生命潜能之自然身体的形式。",source:"亚里士多德《论灵魂》II.1（意译）"},{text:"理智灵魂作为形式与身体结合。",source:"托马斯·阿奎那《神学大全》I, q.76, a.1（意译）"}]},
  wealth:{title:"财富伦理 × 社会等级 × 命运观",body:"贪婪、挥霍和买卖圣职把私人欲望连接到教会制度、家族继承与城市经济。",quotes:[{text:"财富显然不是我们所寻求的善；它只是一种工具。",source:"亚里士多德《尼各马可伦理学》I.5（意译）"},{text:"一切事物都追求善。",source:"波爱修斯《哲学的慰藉》III（中译）"}]},
  grace:{title:"恩典论 × 德性伦理 × 得救边界",body:"《神曲》不断让人的努力与超越人的帮助相遇：理性可以引路，却不能独自完成全部旅程。",quotes:[{text:"恩典并不摧毁自然，而是使自然完善。",source:"托马斯·阿奎那《神学大全》I, q.1, a.8, ad 2（中译）"},{text:"请赐下你所命令的，然后命令你所愿意的。",source:"奥古斯丁《忏悔录》X.29（中译）"}]},
  vision:{title:"视觉文化 × 神秘神学 × 语言极限",body:"从地狱的可见刑罚到天堂的强光，观看方式不断变化；最后的问题不是景象够不够壮观，而是人能否承受并表达所见。",quotes:[{text:"我的视觉愈加深入那道真实之光，愈超出语言与记忆。",source:"但丁《天堂篇》第三十三歌（意译）"},{text:"教育不是把视力放进盲眼，而是使整个灵魂转向。",source:"柏拉图《理想国》VII（意译）"}]},
  journey:{title:"史诗传统 × 朝圣叙事 × 空间人文",body:"维吉尔的冥府之旅、基督教朝圣与佛罗伦萨人的现实地理在同一条路上叠合；地图同时是心理和伦理结构。",quotes:[{text:"也许有一天，回忆这些事也会成为一种快乐。",source:"维吉尔《埃涅阿斯纪》I.203（中译）"},{text:"在人生旅程的中途，我发现自己置身一片黑暗森林。",source:"但丁《地狱篇》第一歌（中译）"}]}
};
function currentHumanities(){const node=humanitiesNodes[encounterMotif()],quote=node.quotes[current().global%node.quotes.length];return{...node,quote}}
function contextSpeech(){
  const role=state.role||"wanderer",motif=encounterMotif();return schoolPlain[role][motif];
}
function schoolReading(decision){
  const d=data(),s=school(),fit=decision.compliant,role=state.role||"wanderer",motif=encounterMotif(),plain=schoolPlain[role][motif];
  const verdict=fit?"这一判断与手册一致，道路保持稳定；若始终如此，其他解释也会逐渐被排除。":"这一判断偏离手册，道路负担增加；与此同时，一种原本会被排除的理解被保留下来。";
  return `${s.scholar.split("及")[0]}批注：面对${d.speaker}，你选择“${decision.text}”。${plain}${verdict}`;
}
function chineseExplanation(){
  const c=current(),d=data();
  return `${previousTitle()}之后：${d.scene}`;
}
function setCharacter(name,role,src){
  $("#characterPortrait").src=src;$("#characterPortrait").alt=`${name}的人物形象`;
  $("#characterName").textContent=name;$("#characterRole").textContent=role;$("#characterStage").hidden=false;
  $("#characterStage").classList.remove("is-entering");requestAnimationFrame(()=>$("#characterStage").classList.add("is-entering"));
}
function hideCharacter(){$("#characterStage").hidden=true}
function pushTrail(name,text){dialogueHistory.push({name,text});dialogueHistory=dialogueHistory.slice(-3);renderTrail()}
function renderTrail(){const box=$("#dialogueTrail");box.replaceChildren(...dialogueHistory.slice(0,-1).map(item=>{const p=document.createElement("p"),b=document.createElement("b"),span=document.createElement("span");b.textContent=item.name;span.textContent=item.text;p.append(b,span);return p}))}
function clearEncounter(){dialogueHistory=[];$("#dialogueTrail").replaceChildren();$("#spokenText").hidden=false;$("#encounterQuestion").hidden=true;$("#choiceList").hidden=true;$("#consequence").hidden=true}

class AmbientScore{
  constructor(){this.audio=null;this.master=null;this.drones=[];this.timer=null;this.realm="inferno";this.started=false}
  async start(){
    if(!state.musicOn)return;
    const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;
    if(!this.audio){this.audio=new AudioContext();this.master=this.audio.createGain();this.master.gain.value=.0001;this.master.connect(this.audio.destination);this.makeDrones()}
    if(this.audio.state==="suspended")await this.audio.resume();
    this.master.gain.cancelScheduledValues(this.audio.currentTime);this.master.gain.linearRampToValueAtTime(.045,this.audio.currentTime+.8);
    this.started=true;this.scheduleBell();updateMusicButton()
  }
  makeDrones(){
    const filter=this.audio.createBiquadFilter();filter.type="lowpass";filter.frequency.value=620;filter.Q.value=.8;filter.connect(this.master);
    [[.5,"sine",.32],[1,"triangle",.16],[1.5,"sine",.08]].forEach(([ratio,type,level])=>{const osc=this.audio.createOscillator(),gain=this.audio.createGain();osc.type=type;gain.gain.value=level;osc.connect(gain).connect(filter);osc.start();this.drones.push({osc,ratio})});
    this.setRealm(this.realm);
  }
  setRealm(realm){this.realm=realm;const root={inferno:55,purgatorio:73.42,paradiso:98}[realm];if(!this.audio)return;this.drones.forEach(d=>d.osc.frequency.exponentialRampToValueAtTime(root*d.ratio,this.audio.currentTime+1.6))}
  scheduleBell(){clearTimeout(this.timer);if(!this.started||!state.musicOn)return;this.timer=setTimeout(()=>{this.bell();this.scheduleBell()},5200+Math.random()*4200)}
  bell(){
    if(!this.audio||this.audio.state!=="running")return;const roots={inferno:[110,130.81,146.83],purgatorio:[146.83,174.61,220],paradiso:[196,246.94,293.66]};const now=this.audio.currentTime,f=roots[this.realm][Math.floor(Math.random()*3)],osc=this.audio.createOscillator(),gain=this.audio.createGain();osc.type=this.realm==="inferno"?"sine":"triangle";osc.frequency.setValueAtTime(f,now);osc.frequency.exponentialRampToValueAtTime(f*2,now+2.4);gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(.055,now+.05);gain.gain.exponentialRampToValueAtTime(.0001,now+3.2);osc.connect(gain).connect(this.master);osc.start(now);osc.stop(now+3.3)
  }
  stop(){if(!this.audio||!this.master)return;this.master.gain.cancelScheduledValues(this.audio.currentTime);this.master.gain.linearRampToValueAtTime(.0001,this.audio.currentTime+.35);this.started=false;clearTimeout(this.timer);updateMusicButton()}
}
const music=new AmbientScore();
function updateMusicButton(){const b=$("#musicToggle");b.setAttribute("aria-pressed",String(state.musicOn));b.querySelector("em").textContent=state.musicOn?(music.started?"开":"待启动"):"关";b.classList.toggle("is-off",!state.musicOn)}
function toggleMusic(){state.musicOn=!state.musicOn;save();state.musicOn?music.start():music.stop();updateMusicButton()}

function renderCanto(next){
  index=Math.max(0,Math.min(next,corpus.cantos.length-1));state.current=index;const c=current(),info=realmInfo[c.realm];
  if(!state.visited.includes(c.id))state.visited.push(c.id);save();phase="explore";pendingIndex=null;showAll=false;showAllChinese=false;dialogueHistory=[];$("#interlude").hidden=true;
  $("#continueJourney").innerHTML="<span>W</span> 继续前行";$("#continueJourney").onclick=null;$("#acceptFate").hidden=true;$("#showEvidence").textContent="翻阅本歌文本";
  $("#game").className=`game realm-${c.realm}`;$("#worldImage").src=info.image;$("#realmLabel").textContent=info.en;$("#placeTitle").textContent=title();
  $("#routeCount").textContent=`${String(c.global).padStart(3,"0")} / 100`;$("#routeBar").style.width=`${c.global}%`;
  $("#encounterPanel").hidden=true;$("#worldPrompt").hidden=false;$("#promptText").textContent="向前走";hideCharacter();clearEncounter();
  renderRecord();renderSchool();renderLines();renderMap();updateStats();resetParticles(c.realm);music.setRealm(c.realm)
}
function showScene(){
  if(phase!=="explore")return;phase="scene";walk();const d=data();clearEncounter();
  const narration=sceneNarration();setTimeout(()=>{$("#speakerName").textContent="旁白";$("#encounterStage").textContent=`抵达 · ${d.source}`;$("#spokenText").textContent=narration;pushTrail("旁白",narration);$("#encounterPanel").hidden=false;$("#promptText").textContent=`走近${d.speaker}`},360)
}
function showGuide(){
  if(phase!=="speaker")return;phase="guide";const guide=guideFor(),speech=contextSpeech();setCharacter(guide.name,guide.role,guide.portrait);
  $("#speakerName").textContent=guide.name;$("#encounterStage").textContent=`${school().school}手册 · 本歌准则`;$("#spokenText").textContent=`“${speech}”`;pushTrail(guide.name,speech);$("#promptText").textContent="作出判断"
}
function showSpeaker(){
  if(phase!=="scene")return;phase="speaker";const d=data();setCharacter(d.speaker,characterIdentity(d.speaker),portraitFor(d.speaker));
  $("#speakerName").textContent=d.speaker;$("#encounterStage").textContent="人物证词";$("#spokenText").textContent=`“${d.spoken}”`;pushTrail(d.speaker,d.spoken);$("#promptText").textContent=`听取${guideFor().name}的提醒`
}
function showChoice(){
  if(phase!=="guide")return;phase="choice";const d=data();$("#encounterStage").textContent=`你的判断 · ${school().school}`;$("#spokenText").hidden=true;$("#encounterQuestion").textContent=d.question;$("#encounterQuestion").hidden=false;
  const permutations=[[0,1,2],[1,2,0],[2,0,1],[0,2,1],[2,1,0],[1,0,2]];visibleChoiceOrder=permutations[(current().global-1)%permutations.length];
  const list=$("#choiceList");list.replaceChildren(...visibleChoiceOrder.map((choiceIndex,displayIndex)=>{const c=d.choices[choiceIndex],b=document.createElement("button");b.className="choice";b.type="button";b.dataset.choice=choiceIndex;b.innerHTML=`<span>${String.fromCharCode(65+displayIndex)}</span><strong></strong>`;b.querySelector("strong").textContent=c.text;return b}));list.hidden=false;$("#worldPrompt").hidden=true
}
function advanceStory(){
  if(!$("#compendium").hidden)return;
  if(phase==="explore")showScene();else if(phase==="scene")showSpeaker();else if(phase==="speaker")showGuide();else if(phase==="guide")showChoice();else if(phase==="result")continueJourney();else if(phase==="interlude")finishInterlude()
}
function choose(i){
  if(phase!=="choice")return;const c=current(),picked=data().choices[i];if(!picked)return;
  const compliant=followsRule(i);state.decisions[c.id]={choice:i,text:picked.text,result:picked.result,effect:picked.effect,burdenDelta:choiceBurden(picked.effect),compliant,realm:c.realm,source:data().source};save();phase="result";
  const decision=state.decisions[c.id],reading=schoolReading(decision);$("#choiceList").hidden=true;$("#encounterQuestion").hidden=true;$("#speakerName").textContent=compliant?"手册确认：安全":"手册警告：偏离规则";$("#spokenText").hidden=false;$("#spokenText").textContent=picked.result;$("#encounterStage").textContent=`${school().school} · 页边批注`;
  $("#consequenceText").textContent=`${reading} ${formatEffect(picked.effect)} · 旅途负担 ${burden()} / 7`;
  $("#consequence").hidden=false;renderRecord();renderSchool();updateStats()
}
function continueJourney(){if(phase!=="result")return;const b=burden(),id=current().id;if(b>=7){renderRoadBlock("sealed");return}if(b>=5&&index>0&&!state.detours[id]){state.detours[id]=true;save();renderRoadBlock("detour");return}if(index===corpus.cantos.length-1){renderEnding();return}showInterlude(index+1)}
function showInterlude(next){
  const from=current(),to=corpus.cantos[next],item=currentHumanities();pendingIndex=next;phase="interlude";hideCharacter();$("#encounterPanel").hidden=true;$("#worldPrompt").hidden=true;
  $("#interludeRoute").textContent=`${realmInfo[from.realm].abbr} ${roman(from.canto)} · ${title(from)}  →  ${realmInfo[to.realm].abbr} ${roman(to.canto)} · ${title(to)}`;
  $("#interludeQuote").textContent=item.quote.text;$("#interludeSource").textContent=`— ${item.quote.source}`;$("#interlude").hidden=false
}
function finishInterlude(){if(phase!=="interlude"||pendingIndex===null)return;const next=pendingIndex;$("#interlude").hidden=true;walk();renderCanto(next)}
function renderRoadBlock(kind){
  const c=current(),names={inferno:"地狱",purgatorio:"炼狱山",paradiso:"天球"},sealed={inferno:"出口从岩壁上消失了。你已经开始用地狱的逻辑解释自己。",purgatorio:"山路闭合成一圈。你仍在移动，却没有继续上升。",paradiso:"光不再显形。并非道路消失，而是你的观看已经失去尺度。"};
  phase=kind==="sealed"?"detained":"detour";hideCharacter();$("#encounterPanel").hidden=false;$("#worldPrompt").hidden=true;$("#encounterQuestion").hidden=true;$("#choiceList").hidden=true;$("#consequence").hidden=false;$("#speakerName").textContent=kind==="sealed"?"道路封锁":"错误回路";$("#encounterStage").textContent=`${names[c.realm]} · 负担 ${burden()} / 7`;$("#spokenText").textContent=kind==="sealed"?sealed[c.realm]:"你以为自己在前进，却回到了刚才经过的标记旁。此前的判断正在改变道路。";$("#consequenceText").textContent=kind==="sealed"?"退回上一歌并改变判断，可以重新寻找出口；拒绝修订，则这一轮旅程在此结束。":"道路把你送回上一歌。只有改变造成负担的判断，才能避免再次绕回这里。";$("#continueJourney").textContent="退回上一歌并修订";$("#continueJourney").onclick=recoverFromRoadBlock;$("#acceptFate").hidden=kind!=="sealed";$("#showEvidence").textContent="查阅手册";
}
function recoverFromRoadBlock(){const target=Math.max(0,index-1);walk();renderCanto(target)}
function renderStranding(){const c=current(),endings={inferno:"你留在了地狱。后来者在岩壁上发现你的手册，最后一页仍停在这一歌。",purgatorio:"你留在炼狱山的回路里。时间继续流动，山顶却不再接近。",paradiso:"你停在无法承受的光中。旅程没有坠落，却也没有抵达最后的凝视。"};state.stranded={index,realm:c.realm};save();phase="stranded";$("#encounterPanel").hidden=false;$("#worldPrompt").hidden=true;$("#speakerName").textContent="旅程中止";$("#encounterStage").textContent=`${realmInfo[c.realm].abbr} ${roman(c.canto)}`;$("#spokenText").textContent=endings[c.realm];$("#consequence").hidden=false;$("#consequenceText").textContent="这是你的选择造成的结局。重新进入会清除本轮判断。";$("#showEvidence").textContent="查阅手册";$("#acceptFate").hidden=true;$("#continueJourney").textContent="重新进入";$("#continueJourney").onclick=resetJourney}
function resetJourney(){state={role:null,visited:[],decisions:{},detours:{},stranded:null,current:0,musicOn:state.musicOn};save();renderCanto(0);$("#roleGate").hidden=false}
function renderEnding(){
  const s=stats(),values=Object.values(s),spread=Math.max(...values)-Math.min(...values),f=followed(),b=broken(),realms=brokenRealms();let heading="可修订结局",body="你带回了一本保留证据、结果与修订痕迹的手册。它不是答案，而是下一位旅者能够继续检验的地图。";
  if(realms===3&&b>=9&&burden()<5){heading="隐藏结局：第四本手册";body=`你没有丢弃${school().school}，也不再把它当成唯一道路。三界中九次以上有意识的偏离，使三种阅读在同一页上互相校正。你带回的第四本手册没有固定规则，只有证据、异议和允许后来者继续修订的空白。`}else if(f>=90&&b<3){heading="安全结局：正确的恶";body=`《${school().school}手册》使你几乎毫发无伤地走完三界。每一件事都得到了正确解释；也正因此，所有不能被这套解释容纳的声音都从记录中消失了。你安全抵达，却没有真正离开手册。`}else if(spread>22&&s.will===Math.max(...values)){heading="封闭结局";body="你走完了三界，也把每一次遭遇都变成不可更改的命令。手册保护了你，却开始像地狱一样凝固。"}else if(spread>22&&s.insight===Math.max(...values)&&s.mercy<58){heading="失语结局";body="你识破了许多叙述，却越来越少相信说话的人。档案保持精确，人物从里面消失。"}
  phase="ending";hideCharacter();$("#speakerName").textContent="旅程终点";$("#encounterStage").textContent=`意志 ${s.will} · 怜悯 ${s.mercy} · 辨识 ${s.insight}`;$("#spokenText").textContent=heading;$("#consequenceText").textContent=body;$("#consequence").hidden=false;
  $("#acceptFate").hidden=true;$("#continueJourney").textContent="重新进入";$("#continueJourney").onclick=resetJourney;$("#encounterPanel").hidden=false;$("#worldPrompt").hidden=true
}
function renderRecord(){
  const c=current(),d=data(),decision=state.decisions[c.id];$("#recordRef").textContent=`${realmInfo[c.realm].abbr} ${roman(c.canto)} · lines 1–${c.lines.length}`;$("#recordTitle").textContent=title();
  $("#recordDialogue").innerHTML="";[["旁白",sceneNarration()],[d.speaker,d.spoken],[guideFor().name,contextSpeech()]].forEach(([name,text])=>{const p=document.createElement("p"),b=document.createElement("b"),span=document.createElement("span");b.textContent=name;span.textContent=text;p.append(b,span);$("#recordDialogue").append(p)});
  $("#recordBody").textContent=decision?decision.result:"本歌尚未作出判断。";$("#fateStatus").textContent=`旅途负担 ${burden()} / 7${burden()>=7?" · 道路封锁":burden()>=5?" · 可能折返":burden()>=3?" · 道路不稳":""}`;
  $("#schoolVerdict").querySelector("span").textContent=`${school().school} · ${school().scholar.split("及")[0]}`;$("#schoolVerdict").querySelector("p").textContent=decision?schoolReading(decision):`本歌尚未裁决。规则会保护你，但不会告诉你它删去了什么。`;
  $("#errorMark").hidden=!decision;if(decision){const e=decision.effect||{},dominant=Object.entries(e).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1]))[0],labels={will:"意志",mercy:"怜悯",insight:"辨识"};$("#errorLabel").textContent=`${labels[dominant?.[0]]||"判断"} ${dominant?.[1]>0?"增强":"受损"}`;$("#manualInk").innerHTML=`<b>${title()}</b><em>${decision.text}</em>`}else $("#manualInk").innerHTML="<b>旅程记录</b><em>尚未写入本歌判断</em>"
}
function renderSchool(){const s=school();$("#schoolHud").textContent=state.role?`${s.school} · 遵守 ${followed()} · 偏离 ${broken()}`:"尚未选择规则手册";$("#schoolName").textContent=`${s.name}的规则手册`;$("#schoolScholar").textContent=`解释传统：${s.scholar}`;$("#schoolThesis").textContent=s.plainThesis;$("#schoolRules").replaceChildren(...s.plainRules.map(rule=>{const li=document.createElement("li");li.textContent=rule;return li}));$("#schoolSafety").textContent=`遵守规则 ${followed()} 次`;$("#schoolDoubt").textContent=`偏离规则 ${broken()} 次 · ${brokenRealms()} / 3 界`;$("#schoolWarning").textContent=brokenRealms()===3&&broken()>=9?"三界的裂缝已经彼此连通。保持低负担并抵达终点，可能出现手册没有记载的道路。":"遵守规则可以保持安全；若从未让别的解释进入，你只能抵达这本手册允许的结局。"}
function renderLines(){
  const c=current(),info=realmInfo[c.realm],lines=showAll?c.lines:c.lines.slice(0,18);$("#textRef").textContent=`${info.abbr} ${roman(c.canto)} · 1–${c.lines.length}行`;$("#alignmentState").textContent=`意大利文与英译逐行编排 · 中文译文按段落编排`;$("#toggleLines").textContent=showAll?"收起意/英":"展开意/英全歌";$("#chineseExplanation").textContent=chineseExplanation();renderChinese();
  const box=$("#lineWindow");box.replaceChildren();
  for(let i=0;i<lines.length;i+=3){const group=lines.slice(i,i+3),row=document.createElement("article"),ref=document.createElement("span"),it=document.createElement("div"),en=document.createElement("div");row.className="tercet";ref.className="line-ref";const start=group[0].n,end=group[group.length-1].n;ref.textContent=`${info.abbr} ${roman(c.canto)}. ${start}${end>start?`–${end}`:""}`;it.lang="it";en.lang="en";group.forEach(l=>{const ip=document.createElement("p"),ep=document.createElement("p");ip.textContent=l.it;ep.textContent=l.en;it.append(ip);en.append(ep)});row.append(ref,it,en);box.append(row)}
}
function renderChinese(){
  const c=current(),zh=c.zh;if(!zh)return;
  const paragraphs=showAllChinese?zh.paragraphs:zh.paragraphs.slice(0,3),notes=[];
  $("#chineseRef").textContent=`${zh.realm} ${zh.cantoLabel} · 王维克译 · 1949`;
  $("#chineseSummary").textContent=`篇要：${zh.summary}`;
  $("#toggleChinese").textContent=showAllChinese?"收起本篇译文":"展开本篇译文";
  const box=$("#chineseText");box.replaceChildren();
  paragraphs.forEach((paragraph)=>{const p=document.createElement("p");p.textContent=paragraph.text;if(paragraph.notes.length){const sup=document.createElement("sup"),start=notes.length+1;paragraph.notes.forEach(note=>notes.push(note));sup.textContent=paragraph.notes.length===1?`〔${start}〕`:`〔${start}–${notes.length}〕`;p.append(sup)}box.append(p)});
  const noteBox=$("#translatorNotes"),list=$("#translatorNotesList");list.replaceChildren(...notes.map((note,i)=>{const li=document.createElement("li");li.value=i+1;li.textContent=note;return li}));noteBox.hidden=!notes.length;$("#translatorNotesSummary").textContent=`王维克译者注（当前显示 ${notes.length} 条）`;
}
function renderMap(){const box=$("#cantoMap");box.replaceChildren(...corpus.cantos.map((c,i)=>{const b=document.createElement("button");b.type="button";b.textContent=String(c.canto).padStart(2,"0");b.title=`${realmInfo[c.realm].zh} · ${title(c)}`;if(state.visited.includes(c.id))b.classList.add("visited");if(i===index)b.classList.add("current");b.disabled=!state.visited.includes(c.id);b.dataset.index=i;return b}));$("#visitedCount").textContent=`${state.visited.length} / 100`}
function openManual(panel="record"){$("#compendium").hidden=false;switchPanel(panel)}function closeManual(){$("#compendium").hidden=true}
function switchPanel(name){$$("[data-panel]").forEach(b=>b.classList.toggle("is-active",b.dataset.panel===name));$$("[data-manual-panel]").forEach(p=>{const on=p.dataset.manualPanel===name;p.hidden=!on;p.classList.toggle("is-active",on)})}
function selectRole(key){if(!roles[key]||!corpus)return;state={role:key,visited:[],decisions:{},detours:{},stranded:null,current:0,musicOn:state.musicOn};save();$("#roleGate").hidden=true;document.activeElement?.blur();music.start();renderCanto(0);openManual("school");walk()}
function bind(){
  $("#worldPrompt").addEventListener("click",()=>{document.activeElement?.blur();advanceStory()});$("#choiceList").addEventListener("click",e=>{const b=e.target.closest("[data-choice]");if(b)choose(Number(b.dataset.choice))});
  $("#continueJourney").addEventListener("click",continueJourney);$("#interludeContinue").addEventListener("click",finishInterlude);$("#acceptFate").addEventListener("click",renderStranding);$("#manualButton").addEventListener("click",()=>openManual("record"));$("#openArchive").addEventListener("click",()=>openManual("map"));$("#closeCompendium").addEventListener("click",closeManual);$("#showEvidence").addEventListener("click",()=>openManual("text"));$("#toggleLines").addEventListener("click",()=>{showAll=!showAll;renderLines()});$("#toggleChinese").addEventListener("click",()=>{showAllChinese=!showAllChinese;renderChinese()});$("#musicToggle").addEventListener("click",toggleMusic);
  $$("[data-panel]").forEach(b=>b.addEventListener("click",()=>switchPanel(b.dataset.panel)));$("#cantoMap").addEventListener("click",e=>{const b=e.target.closest("[data-index]");if(b&&!b.disabled){renderCanto(Number(b.dataset.index));closeManual()}});$$("[data-role]").forEach(b=>b.addEventListener("click",()=>selectRole(b.dataset.role)));
  document.addEventListener("keydown",e=>{const typing=e.target.matches("input,select,textarea,[contenteditable=true]");if(typing)return;if(e.key==="Tab"){e.preventDefault();$("#compendium").hidden?openManual("record"):closeManual();return}if(e.key==="Escape"){closeManual();return}if(["a","A","b","B","c","C"].includes(e.key)&&phase==="choice"){e.preventDefault();choose(visibleChoiceOrder[e.key.toUpperCase().charCodeAt(0)-65]);return}if(["w","W","ArrowUp","e","E","Enter"].includes(e.key)){e.preventDefault();if(state.musicOn&&!music.started)music.start();advanceStory()}});
  document.addEventListener("pointermove",e=>{const x=(e.clientX/innerWidth-.5)*-18,y=(e.clientY/innerHeight-.5)*-12;document.documentElement.style.setProperty("--look-x",`${x}px`);document.documentElement.style.setProperty("--look-y",`${y}px`)})
}
function setupAtmosphere(){const canvas=$("#atmosphere");ctx=canvas.getContext("2d");const resize=()=>{const d=Math.min(devicePixelRatio,2);canvas.width=innerWidth*d;canvas.height=innerHeight*d;canvas.style.width=`${innerWidth}px`;canvas.style.height=`${innerHeight}px`;ctx.setTransform(d,0,0,d,0,0)};addEventListener("resize",resize);resize();requestAnimationFrame(drawParticles)}
function resetParticles(realm){const count=realm==="paradiso"?80:realm==="inferno"?58:38;particles=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:.2+Math.random()*.8,r:.5+Math.random()*1.8,v:.15+Math.random()*.55,realm}))}
function drawParticles(){if(!ctx){requestAnimationFrame(drawParticles);return}ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of particles){p.y-=p.v*(.4+p.z);p.x+=Math.sin((p.y+p.z*80)*.01)*.12;if(p.y<-10){p.y=innerHeight+10;p.x=Math.random()*innerWidth}ctx.globalAlpha=.12+p.z*.55;ctx.fillStyle=p.realm==="inferno"?"#ff6a32":p.realm==="purgatorio"?"#f4d2a0":"#ffffff";ctx.beginPath();ctx.arc(p.x,p.y,p.r*p.z,0,Math.PI*2);ctx.fill()}requestAnimationFrame(drawParticles)}
async function init(){bind();setupAtmosphere();updateMusicButton();try{const response=await fetch("corpus.json",{cache:"no-store"});if(!response.ok)throw new Error(response.status);corpus=await response.json();index=Math.max(0,Math.min(Number(state.stranded?.index??state.current)||0,99));renderCanto(index);$("#roleGate").hidden=Boolean(state.role);if(state.stranded)renderStranding()}catch{$("#promptText").textContent="档案未能载入";$("#worldPrompt").disabled=true}}
init();
