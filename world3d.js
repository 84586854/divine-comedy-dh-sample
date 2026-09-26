(function(){
  "use strict";

  const vertexSource=`
    attribute vec2 aPosition;
    void main(){gl_Position=vec4(aPosition,0.0,1.0);}
  `;

  const fragmentSource=`
    precision highp float;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uProgress;
    uniform float uLateral;
    uniform vec2 uLook;

    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float noise(vec2 p){
      vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
      return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),f.x),mix(hash(i+vec2(0.0,1.0)),hash(i+1.0),f.x),f.y);
    }
    float capsule(vec3 p,vec3 a,vec3 b,float r){
      vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0);
      return length(pa-ba*h)-r;
    }
    vec2 mapScene(vec3 p){
      float rough=(noise(p.xz*0.42)-0.5)*0.13;
      vec2 hit=vec2(p.y+1.22+rough,1.0);
      float wallLine=3.15+sin(p.z*0.27)*0.33+noise(vec2(p.z*0.18,p.y*0.22))*0.32;
      float walls=abs(abs(p.x)-wallLine)-0.3;
      walls=max(walls,abs(p.y-0.25)-3.6);
      if(walls<hit.x)hit=vec2(walls,2.0);
      float repeatZ=mod(p.z+2.8,5.6)-2.8;
      float pillars=length(vec2(abs(p.x)-2.58,repeatZ))-0.28;
      pillars=max(pillars,abs(p.y-0.1)-2.45);
      if(pillars<hit.x)hit=vec2(pillars,2.0);
      vec3 one=p-vec3(-0.42,-0.05,-9.1);
      vec3 two=p-vec3(0.38,-0.12,-9.35);
      float souls=min(capsule(one,vec3(0.0,-0.75,0.0),vec3(0.0,0.62,0.0),0.24),capsule(two,vec3(0.0,-0.72,0.0),vec3(0.0,0.72,0.0),0.22));
      souls=min(souls,length(one-vec3(0.0,0.88,0.0))-0.23);
      souls=min(souls,length(two-vec3(0.0,0.98,0.0))-0.22);
      if(souls<hit.x)hit=vec2(souls,3.0);
      return hit;
    }
    vec3 normalAt(vec3 p){
      vec2 e=vec2(0.003,0.0);float d=mapScene(p).x;
      return normalize(vec3(mapScene(p+e.xyy).x-d,mapScene(p+e.yxy).x-d,mapScene(p+e.yyx).x-d));
    }
    void main(){
      vec2 frag=gl_FragCoord.xy;
      vec2 uv=(frag*2.0-uResolution.xy)/uResolution.y;
      vec3 ro=vec3(uLateral,0.02,mix(7.5,-4.7,uProgress));
      float yaw=uLook.x*0.34,pitch=uLook.y*0.18;
      vec3 forward=normalize(vec3(sin(yaw),pitch,-cos(yaw)));
      vec3 right=normalize(cross(forward,vec3(0.0,1.0,0.0)));
      vec3 up=normalize(cross(right,forward));
      vec3 rd=normalize(forward+uv.x*right+uv.y*up*0.74);
      float travel=0.0;vec2 hit=vec2(0.0);bool found=false;
      for(int i=0;i<72;i++){
        vec3 p=ro+rd*travel;hit=mapScene(p);
        if(hit.x<0.0025){found=true;break;}
        travel+=max(hit.x*0.72,0.018);
        if(travel>34.0)break;
      }
      vec3 skyTop=vec3(0.055,0.012,0.009),skyLow=vec3(0.16,0.035,0.014);
      float storm=noise(vec2(uv.x*2.2+uTime*0.04,uv.y*1.4-uTime*0.16));
      vec3 color=mix(skyLow,skyTop,clamp(uv.y*0.65+0.55,0.0,1.0))+storm*vec3(0.035,0.012,0.005);
      if(found){
        vec3 p=ro+rd*travel,n=normalAt(p),lightDir=normalize(vec3(-0.45,0.72,0.2));
        float diffuse=max(dot(n,lightDir),0.0),rim=pow(1.0-max(dot(n,-rd),0.0),2.4);
        vec3 material=hit.y<1.5?vec3(0.18,0.075,0.035):hit.y<2.5?vec3(0.105,0.06,0.045):vec3(0.75,0.31,0.15);
        if(hit.y>2.5)material+=vec3(0.45,0.22,0.08)*(0.55+0.45*sin(uTime*3.0+p.y*5.0));
        color=material*(0.24+diffuse*0.92)+rim*vec3(0.28,0.075,0.025);
        float fog=1.0-exp(-travel*0.075);color=mix(color,skyLow,fog*0.76);
      }
      float streakGrid=fract((uv.x*0.75+uv.y)*17.0+uTime*1.6+noise(floor(uv*12.0)));
      float streak=smoothstep(0.965,1.0,streakGrid)*(0.28+0.72*noise(uv*8.0+uTime));
      color+=streak*vec3(0.48,0.14,0.055)*(0.3+0.7*(1.0-uProgress));
      float vignette=1.0-smoothstep(0.38,1.35,length(uv));
      color*=0.45+0.55*vignette;
      color=pow(color,vec3(0.86));
      gl_FragColor=vec4(color,1.0);
    }
  `;

  class InfernoWorld{
    constructor(canvas){
      this.canvas=canvas;this.gl=null;this.program=null;this.visible=false;this.interactive=false;this.ready=false;
      this.progress=0;this.lateral=0;this.look={x:0,y:0};this.onProgress=null;this.startTime=performance.now();
      this.resize=this.resize.bind(this);this.draw=this.draw.bind(this);
      this.available=this.setup();
      if(this.available){addEventListener("resize",this.resize,{passive:true});this.resize();requestAnimationFrame(this.draw)}
    }
    shader(type,source){const gl=this.gl,s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s}
    setup(){
      try{
        const gl=this.canvas.getContext("webgl",{alpha:false,antialias:false,powerPreference:"high-performance"});if(!gl)return false;this.gl=gl;
        const program=gl.createProgram();gl.attachShader(program,this.shader(gl.VERTEX_SHADER,vertexSource));gl.attachShader(program,this.shader(gl.FRAGMENT_SHADER,fragmentSource));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
        this.program=program;gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
        const position=gl.getAttribLocation(program,"aPosition");gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
        this.uniforms={resolution:gl.getUniformLocation(program,"uResolution"),time:gl.getUniformLocation(program,"uTime"),progress:gl.getUniformLocation(program,"uProgress"),lateral:gl.getUniformLocation(program,"uLateral"),look:gl.getUniformLocation(program,"uLook")};
        return true;
      }catch(error){console.warn("3D scene fallback:",error);return false}
    }
    resize(){if(!this.available)return;const ratio=Math.min(devicePixelRatio||1,1.5),w=Math.max(1,Math.floor(innerWidth*ratio)),h=Math.max(1,Math.floor(innerHeight*ratio));if(this.canvas.width!==w||this.canvas.height!==h){this.canvas.width=w;this.canvas.height=h;this.gl.viewport(0,0,w,h)}}
    draw(now){
      if(this.available&&this.visible){const gl=this.gl,u=this.uniforms;gl.useProgram(this.program);gl.uniform2f(u.resolution,this.canvas.width,this.canvas.height);gl.uniform1f(u.time,(now-this.startTime)/1000);gl.uniform1f(u.progress,this.progress);gl.uniform1f(u.lateral,this.lateral);gl.uniform2f(u.look,this.look.x,this.look.y);gl.drawArrays(gl.TRIANGLES,0,6)}
      requestAnimationFrame(this.draw)
    }
    enter(onProgress){if(!this.available)return false;this.visible=true;this.interactive=true;this.ready=false;this.progress=0;this.lateral=0;this.onProgress=onProgress;this.canvas.hidden=false;this.canvas.classList.add("is-active");this.emit();return true}
    leave(){this.visible=false;this.interactive=false;this.ready=false;this.canvas.classList.remove("is-active");this.canvas.hidden=true}
    pause(){this.interactive=false}
    step(amount=0.105){if(!this.interactive)return;this.progress=Math.min(1,this.progress+amount);this.ready=this.progress>=0.995;this.emit()}
    strafe(direction){if(!this.interactive)return;this.lateral=Math.max(-1.15,Math.min(1.15,this.lateral+direction*0.18));this.emit()}
    setLook(x,y){if(!this.visible)return;this.look.x=Math.max(-1,Math.min(1,x));this.look.y=Math.max(-1,Math.min(1,y))}
    emit(){if(this.onProgress)this.onProgress(this.progress,this.ready,this.lateral)}
  }

  window.DanteWorld3D={create(canvas){return new InfernoWorld(canvas)}};
})();
