const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const titles={
inferno:["幽暗森林","召唤与迟疑","地狱之门","林薄与高贵城堡","风暴中的弗兰切斯卡","冷雨与恰科","财富之轮","冥河与狄斯城","复仇女神与天使","火墓中的异端者","地狱分类学","血河与半人马","自杀者之林","火雨荒原","布鲁内托","三位佛罗伦萨人","革律翁","诱骗与谄媚","买卖圣职者","占卜者","魔鬼巡逻队","恶魔内斗","伪善者的铅衣","盗贼与蛇","身份变形","尤利西斯最后航行","圭多的坏建议","制造分裂者","炼金术士","伪造者之热病","巨人之井","冰湖与叛徒","乌戈利诺","路西法与出路"],
purgatorio:["炼狱海岸","天使之舟与卡塞拉","曼弗雷迪与理性的边界","贝拉夸与迟延","暴死者的请求","索尔代洛与意大利","花谷中的君王","守护天使与蛇","鹰梦与七个P","骄傲者与浮雕","谦卑祷文","路面的警示图像","嫉妒者与缝合之眼","阿尔诺河谷","愤怒之烟","马可·伦巴多与自由意志","爱的秩序","爱与选择","海妖之梦","贪婪与王朝","斯塔提乌斯现身","诗人与神秘树","福雷塞","诗歌的新风格","灵魂与身体","欲望之火与诗人","火墙、利亚与拉结","地上乐园与玛泰尔达","教会凯旋寓言","维吉尔离去","忏悔与忘川","车辇与知识树","欧诺埃河与净化"],
paradiso:["超越人性与升天","月天与月斑","皮卡尔达","誓愿与意志","誓愿的重量","查士丁尼与帝国之鹰","十字架与救赎","金星天与差异天性","库妮扎、福尔科与喇合","日天神学家之环","方济各","多明我","所罗门与轻率判断","复活之身与火星十字","卡恰圭达与旧佛罗伦萨","祖先与城市记忆","流放预言","正义之鹰","谁能够得救","正义诸王","土星天与天梯","本笃与腐败修院","基督凯旋","信德考试","望德考试","爱德考试与亚当","伯多禄斥责教皇","天使的秩序","天使创造与堕落","光之河与白玫瑰","贝雅特丽齐离去","白玫瑰中的位置","三重圆环"]};
const realmInfo={
inferno:{zh:"地狱篇",en:"INFERNO",abbr:"Inf.",image:"assets/inferno-first-person.png",transition:"我们继续向地狱更深处下降；这里的亡魂会把生前的选择重新讲成一套理由。"},
purgatorio:{zh:"炼狱篇",en:"PURGATORIO",abbr:"Purg.",image:"assets/purgatorio-first-person.png",transition:"我们沿炼狱山向上行走；这里的灵魂并非永远定型，他们正在用时间重新训练欲望。"},
paradiso:{zh:"天堂篇",en:"PARADISO",abbr:"Par.",image:"assets/paradiso-first-person.png",transition:"我们上升到新的天球；这里的相遇不是刑罚展示，而是一次关于知识、爱与观看限度的教学。"}};
const roles={wanderer:{name:"迷途者",will:55,mercy:55,insight:55},witness:{name:"见证者",will:48,mercy:70,insight:47},reader:{name:"校勘者",will:50,mercy:44,insight:72}};
const portraits={
virgil:"assets/character-virgil.png",beatrice:"assets/character-beatrice.png",
inferno:"assets/character-infernal-soul.png",purgatorio:"assets/character-penitent.png",paradiso:"assets/character-celestial.png"
};
const storageKey="dante-immersive-v4";
let corpus=null,index=0,phase="explore",showAll=false,showAllChinese=false,particles=[],ctx=null,dialogueHistory=[];
let state=loadState();

function loadState(){try{return{role:null,visited:[],decisions:{},current:0,musicOn:true,...JSON.parse(localStorage.getItem(storageKey)||"{}")}}catch{return{role:null,visited:[],decisions:{},current:0,musicOn:true}}}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(state))}catch{}}
function current(){return corpus.cantos[index]}
function data(){const c=current();return window.DANTE_ENCOUNTERS[c.realm][c.canto-1]}
function title(c=current()){return titles[c.realm][c.canto-1]}
function clamp(n){return Math.max(0,Math.min(100,n))}
function stats(){const base=roles[state.role]||roles.wanderer,s={will:base.will,mercy:base.mercy,insight:base.insight};Object.values(state.decisions).forEach(d=>Object.entries(d.effect||{}).forEach(([k,v])=>s[k]=clamp(s[k]+v)));return s}
function updateStats(){const s=stats();$("#willValue").textContent=s.will;$("#mercyValue").textContent=s.mercy;$("#insightValue").textContent=s.insight}
function walk(){const g=$("#game");g.classList.remove("is-walking");requestAnimationFrame(()=>{g.classList.add("is-walking");setTimeout(()=>g.classList.remove("is-walking"),1150)})}
function roman(n){const pairs=[["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];let out="";for(const [r,v] of pairs)while(n>=v){out+=r;n-=v}return out}
function previousTitle(){if(index===0)return"人间那条已经迷失的正路";const p=corpus.cantos[index-1];return `上一歌“${title(p)}”`}
function guideFor(c=current()){
  if(c.realm==="paradiso"&&c.canto>=31)return{name:"圣伯尔纳",role:"最后的凝视引路人",portrait:portraits.paradiso};
  if(c.realm==="paradiso"||(c.realm==="purgatorio"&&c.canto>=30))return{name:"贝雅特丽齐",role:"启示与判断的引路人",portrait:portraits.beatrice};
  return{name:"维吉尔",role:"理性与诗歌的引路人",portrait:portraits.virgil};
}
function portraitFor(name,c=current()){
  if(name.includes("维吉尔"))return portraits.virgil;
  if(name.includes("贝雅特丽齐"))return portraits.beatrice;
  return portraits[c.realm];
}
function contextSpeech(){
  const c=current(),d=data(),info=realmInfo[c.realm];
  return `${previousTitle()}已经在身后。现在是${info.zh}第${c.canto}歌“${title()}”。${info.transition} ${d.scene}`;
}
function chineseExplanation(){
  const c=current(),d=data();
  return `${realmInfo[c.realm].zh}第${c.canto}歌“${title()}”承接${previousTitle()}。${d.scene} ${d.speaker}的发言把情节推进到这个具体问题：“${d.question}”这里说明的是本歌情节与互动改写的关系；王维克中文译文另列，意大利文和英译则按原作行号对照。`;
}
function setCharacter(name,role,src){
  $("#characterPortrait").src=src;$("#characterPortrait").alt=`${name}的人物形象`;
  $("#characterName").textContent=name;$("#characterRole").textContent=role;$("#characterStage").hidden=false;
  $("#characterStage").classList.remove("is-entering");requestAnimationFrame(()=>$("#characterStage").classList.add("is-entering"));
}
function hideCharacter(){$("#characterStage").hidden=true}
function pushTrail(name,text){dialogueHistory.push({name,text});dialogueHistory=dialogueHistory.slice(-3);renderTrail()}
function renderTrail(){const box=$("#dialogueTrail");box.replaceChildren(...dialogueHistory.slice(0,-1).map(item=>{const p=document.createElement("p"),b=document.createElement("b"),span=document.createElement("span");b.textContent=item.name;span.textContent=item.text;p.append(b,span);return p}))}
function clearEncounter(){dialogueHistory=[];$("#dialogueTrail").replaceChildren();$("#encounterQuestion").hidden=true;$("#choiceList").hidden=true;$("#consequence").hidden=true}

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
  if(!state.visited.includes(c.id))state.visited.push(c.id);save();phase="explore";showAll=false;showAllChinese=false;dialogueHistory=[];
  $("#continueJourney").innerHTML="<span>W</span> 继续前行";$("#continueJourney").onclick=null;
  $("#game").className=`game realm-${c.realm}`;$("#worldImage").src=info.image;$("#realmLabel").textContent=info.en;$("#placeTitle").textContent=title();
  $("#routeCount").textContent=`${String(c.global).padStart(3,"0")} / 100`;$("#routeBar").style.width=`${c.global}%`;
  $("#encounterPanel").hidden=true;$("#worldPrompt").hidden=false;$("#promptText").textContent="向前走";hideCharacter();clearEncounter();
  renderRecord();renderLines();renderMap();updateStats();resetParticles(c.realm);music.setRealm(c.realm)
}
function showScene(){
  if(phase!=="explore")return;phase="scene";walk();const d=data();clearEncounter();
  setTimeout(()=>{$("#speakerName").textContent="环境";$("#encounterStage").textContent=d.source;$("#spokenText").textContent=d.scene;pushTrail("环境",d.scene);$("#encounterPanel").hidden=false;$("#promptText").textContent="听取引路人说明"},360)
}
function showGuide(){
  if(phase!=="scene")return;phase="guide";const guide=guideFor(),speech=contextSpeech();setCharacter(guide.name,guide.role,guide.portrait);
  $("#speakerName").textContent=guide.name;$("#encounterStage").textContent="前情与位置";$("#spokenText").textContent=`“${speech}”`;pushTrail(guide.name,speech);$("#promptText").textContent=`走近${data().speaker}`
}
function showSpeaker(){
  if(phase!=="guide")return;phase="speaker";const d=data();setCharacter(d.speaker,"本歌人物",portraitFor(d.speaker));
  $("#speakerName").textContent=d.speaker;$("#encounterStage").textContent="人物证词";$("#spokenText").textContent=`“${d.spoken}”`;pushTrail(d.speaker,d.spoken);$("#promptText").textContent="回应"
}
function showChoice(){
  if(phase!=="speaker")return;phase="choice";const d=data();$("#encounterStage").textContent="你的判断";$("#encounterQuestion").textContent=d.question;$("#encounterQuestion").hidden=false;
  const list=$("#choiceList");list.replaceChildren(...d.choices.map((c,i)=>{const b=document.createElement("button");b.className="choice";b.type="button";b.dataset.choice=i;b.innerHTML=`<span>${String.fromCharCode(65+i)}</span><strong></strong>`;b.querySelector("strong").textContent=c.text;return b}));list.hidden=false;$("#worldPrompt").hidden=true
}
function advanceStory(){
  if(!$("#compendium").hidden)return;
  if(phase==="explore")showScene();else if(phase==="scene")showGuide();else if(phase==="guide")showSpeaker();else if(phase==="speaker")showChoice();else if(phase==="result")continueJourney()
}
function choose(i){
  if(phase!=="choice")return;const c=current(),picked=data().choices[i];if(!picked)return;
  state.decisions[c.id]={choice:i,text:picked.text,result:picked.result,effect:picked.effect,source:data().source};save();phase="result";
  $("#choiceList").hidden=true;$("#encounterQuestion").hidden=true;$("#speakerName").textContent="判断结果";$("#spokenText").textContent=picked.result;$("#encounterStage").textContent="结果已写入手册";
  $("#consequenceText").textContent=`索引：${realmInfo[c.realm].abbr} ${roman(c.canto)}，全歌第1—${c.lines.length}行。打开手册可查看意大利文、Longfellow英译、王维克中文全译与译者注。`;
  $("#consequence").hidden=false;renderRecord();updateStats()
}
function continueJourney(){if(phase!=="result")return;if(index===corpus.cantos.length-1){renderEnding();return}walk();renderCanto(index+1)}
function renderEnding(){
  const s=stats(),values=Object.values(s),spread=Math.max(...values)-Math.min(...values);let heading="可修订结局",body="你带回了一本保留证据、结果与修订痕迹的手册。它不是答案，而是下一位旅者能够继续检验的地图。";
  if(spread>22&&s.will===Math.max(...values)){heading="封闭结局";body="你走完了三界，也把每一次遭遇都变成不可更改的命令。手册保护了你，却开始像地狱一样凝固。"}else if(spread>22&&s.insight===Math.max(...values)&&s.mercy<58){heading="失语结局";body="你识破了许多叙述，却越来越少相信说话的人。档案保持精确，人物从里面消失。"}
  phase="ending";hideCharacter();$("#speakerName").textContent="旅程终点";$("#encounterStage").textContent=`意志 ${s.will} · 怜悯 ${s.mercy} · 辨识 ${s.insight}`;$("#spokenText").textContent=heading;$("#consequenceText").textContent=body;$("#consequence").hidden=false;
  $("#continueJourney").textContent="重新进入";$("#continueJourney").onclick=()=>{state={role:null,visited:[],decisions:{},current:0,musicOn:state.musicOn};save();renderCanto(0);$("#roleGate").hidden=false};$("#encounterPanel").hidden=false;$("#worldPrompt").hidden=true
}
function renderRecord(){
  const c=current(),d=data(),decision=state.decisions[c.id];$("#recordRef").textContent=`${realmInfo[c.realm].abbr} ${roman(c.canto)} · lines 1–${c.lines.length}`;$("#recordTitle").textContent=title();
  $("#recordDialogue").innerHTML="";[[guideFor().name,contextSpeech()],[d.speaker,d.spoken]].forEach(([name,text])=>{const p=document.createElement("p"),b=document.createElement("b"),span=document.createElement("span");b.textContent=name;span.textContent=text;p.append(b,span);$("#recordDialogue").append(p)});
  $("#recordBody").textContent=decision?`${decision.result} 依据入口：${decision.source}；原文按本歌行号完整列出。`:"本歌尚未作出判断。这里保存前情与人物证词，但不会预先告诉你如何选择。";
  $("#errorMark").hidden=!decision;if(decision){const e=decision.effect||{},dominant=Object.entries(e).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1]))[0],labels={will:"意志",mercy:"怜悯",insight:"辨识"};$("#errorLabel").textContent=`${labels[dominant?.[0]]||"判断"} ${dominant?.[1]>0?"增强":"受损"}`;$("#manualInk").innerHTML=`<b>${title()}</b><em>${decision.text}</em>`}else $("#manualInk").innerHTML="<b>旅程记录</b><em>尚未写入本歌判断</em>"
}
function renderLines(){
  const c=current(),info=realmInfo[c.realm],lines=showAll?c.lines:c.lines.slice(0,18);$("#textRef").textContent=`${info.abbr} ${roman(c.canto)} · 1–${c.lines.length}行`;$("#alignmentState").textContent=`意/英 ${corpus.meta.lineCount.toLocaleString("zh-CN")} 行精确 · 中文 100 篇段落对照`;$("#toggleLines").textContent=showAll?"收起意/英":"展开意/英全歌";$("#chineseExplanation").textContent=chineseExplanation();renderChinese();
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
function selectRole(key){if(!roles[key]||!corpus)return;state={role:key,visited:[],decisions:{},current:0,musicOn:state.musicOn};save();$("#roleGate").hidden=true;document.activeElement?.blur();music.start();renderCanto(0);walk()}
function bind(){
  $("#worldPrompt").addEventListener("click",()=>{document.activeElement?.blur();advanceStory()});$("#choiceList").addEventListener("click",e=>{const b=e.target.closest("[data-choice]");if(b)choose(Number(b.dataset.choice))});
  $("#continueJourney").addEventListener("click",continueJourney);$("#manualButton").addEventListener("click",()=>openManual("record"));$("#openArchive").addEventListener("click",()=>openManual("map"));$("#closeCompendium").addEventListener("click",closeManual);$("#showEvidence").addEventListener("click",()=>openManual("text"));$("#toggleLines").addEventListener("click",()=>{showAll=!showAll;renderLines()});$("#toggleChinese").addEventListener("click",()=>{showAllChinese=!showAllChinese;renderChinese()});$("#musicToggle").addEventListener("click",toggleMusic);
  $$("[data-panel]").forEach(b=>b.addEventListener("click",()=>switchPanel(b.dataset.panel)));$("#cantoMap").addEventListener("click",e=>{const b=e.target.closest("[data-index]");if(b&&!b.disabled){renderCanto(Number(b.dataset.index));closeManual()}});$$("[data-role]").forEach(b=>b.addEventListener("click",()=>selectRole(b.dataset.role)));
  document.addEventListener("keydown",e=>{const typing=e.target.matches("input,select,textarea,[contenteditable=true]");if(typing)return;if(e.key==="Tab"){e.preventDefault();$("#compendium").hidden?openManual("record"):closeManual();return}if(e.key==="Escape"){closeManual();return}if(["a","A","b","B","c","C"].includes(e.key)&&phase==="choice"){e.preventDefault();choose(e.key.toUpperCase().charCodeAt(0)-65);return}if(["w","W","ArrowUp","e","E","Enter"].includes(e.key)){e.preventDefault();if(state.musicOn&&!music.started)music.start();advanceStory()}});
  document.addEventListener("pointermove",e=>{const x=(e.clientX/innerWidth-.5)*-18,y=(e.clientY/innerHeight-.5)*-12;document.documentElement.style.setProperty("--look-x",`${x}px`);document.documentElement.style.setProperty("--look-y",`${y}px`)})
}
function setupAtmosphere(){const canvas=$("#atmosphere");ctx=canvas.getContext("2d");const resize=()=>{const d=Math.min(devicePixelRatio,2);canvas.width=innerWidth*d;canvas.height=innerHeight*d;canvas.style.width=`${innerWidth}px`;canvas.style.height=`${innerHeight}px`;ctx.setTransform(d,0,0,d,0,0)};addEventListener("resize",resize);resize();requestAnimationFrame(drawParticles)}
function resetParticles(realm){const count=realm==="paradiso"?80:realm==="inferno"?58:38;particles=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:.2+Math.random()*.8,r:.5+Math.random()*1.8,v:.15+Math.random()*.55,realm}))}
function drawParticles(){if(!ctx){requestAnimationFrame(drawParticles);return}ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of particles){p.y-=p.v*(.4+p.z);p.x+=Math.sin((p.y+p.z*80)*.01)*.12;if(p.y<-10){p.y=innerHeight+10;p.x=Math.random()*innerWidth}ctx.globalAlpha=.12+p.z*.55;ctx.fillStyle=p.realm==="inferno"?"#ff6a32":p.realm==="purgatorio"?"#f4d2a0":"#ffffff";ctx.beginPath();ctx.arc(p.x,p.y,p.r*p.z,0,Math.PI*2);ctx.fill()}requestAnimationFrame(drawParticles)}
async function init(){bind();setupAtmosphere();updateMusicButton();try{const response=await fetch("corpus.json",{cache:"no-store"});if(!response.ok)throw new Error(response.status);corpus=await response.json();index=Math.max(0,Math.min(Number(state.current)||0,99));renderCanto(index);$("#roleGate").hidden=Boolean(state.role)}catch{$("#promptText").textContent="档案未能载入";$("#worldPrompt").disabled=true}}
init();
