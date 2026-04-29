export const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uScrollProgress;
  uniform vec2  uMouse;
  uniform vec2  uResolution;
  // Ripples — vec4(originX, originY[0..1, y-up], startTime, strength[0|1]).
  // 6 slots in a ring buffer; inactive slots carry strength=0.
  uniform vec4  uRipples[6];
  varying vec2  vUv;
  varying float vElevation;
  varying float vRipple;

  // ── Ripple field — concentric damped wave, stone-in-lake ──
  // age     : seconds since click
  // front   : expanding ring radius in aspect-corrected uv
  // env     : gaussian envelope around the ring front (wider → multi-crest visible)
  // phase   : sin oscillation inside envelope, frequency tuned so ~3 rings sit in band
  // decay   : time decay + lifetime falloff
  float rippleField(vec2 uvPos, float aspect, float time){
    float total = 0.0;
    for(int i=0; i<6; i++){
      vec4 r = uRipples[i];
      if(r.w < 0.5) continue;
      float age = time - r.z;
      if(age < 0.0 || age > 3.6) continue;
      vec2 ro = vec2((r.x - 0.5) * aspect, r.y - 0.5);
      vec2 pr = vec2((uvPos.x - 0.5) * aspect, uvPos.y - 0.5);
      float d = length(pr - ro);
      float front = age * 0.40;
      float env = exp(-pow((d - front) / 0.22, 2.0));
      float phase = d * 42.0 - age * 11.0;
      float decay = exp(-age * 0.75) * (1.0 - smoothstep(2.6, 3.6, age));
      total += cos(phase) * env * decay;
    }
    return total;
  }

  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod(i,289.0);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=1.0/7.0;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main(){
    vUv=uv;
    float scroll=uScrollProgress;
    float tBase=uTime*0.036;
    float tRipple=uTime*0.054;
    vec3 pos=position;
    float n1=snoise(vec3(pos.xy*0.5,tBase+scroll*0.45))*0.16;
    float n2=snoise(vec3(pos.xy*1.6,tRipple*1.25+scroll*0.28))*0.05;
    vec2 mouse=(uMouse-0.5)*2.0;
    float mouseDist=length(pos.xy-mouse);
    float mousePush=smoothstep(1.4,0.0,mouseDist)*0.10;

    float aspect=uResolution.x/max(uResolution.y,1.0);
    float rip=rippleField(uv,aspect,uTime);
    vRipple=rip;

    float elevation=n1+n2+mousePush;

    // ── Edge pin ──
    // Plane vertices live on a perspective-projected mesh. Pushing Z
    // on edge vertices makes them recede visually in screen space,
    // tearing a wavy gap along the viewport border that exposes the
    // WebGL clear color behind the plane (reads as black in void, as
    // a torn-paper frame in day). Fix at the source: attenuate
    // elevation toward 0 in a thin band at each edge so border
    // vertices stay flush at Z=0. 0.06 uv units ≈ 6% inset — small
    // enough to be invisible, wide enough to hide per-vertex noise.
    float edgeDist=min(min(uv.x,1.0-uv.x),min(uv.y,1.0-uv.y));
    float edgePin=smoothstep(0.0,0.06,edgeDist);
    elevation*=edgePin;

    pos.z+=elevation;
    vElevation=elevation;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uScrollProgress;
  uniform vec2  uResolution;
  uniform vec4  uRipples[6];
  // Theme crossfade scalar: 0.0 = void (cool dark silver), 1.0 = day (warm cream).
  uniform float uFlip;
  // Theme flip "transition pass": bell-shaped 0→1→0 over ~1.5s (see uTransitionDir).
  uniform float uTransitionWarp;
  // +1 = void→day (rise / dawn), -1 = day→void (set / nightfall).
  uniform float uTransitionDir;
  // Crest centre in UV space (bottom-up Y, same as uMouse).
  uniform vec2  uTransitionOrigin;
  // Beacon radius: 0.0 = Void consumes all, 1.0 = light pushes Void to edges.
  uniform float uBeaconRadius;
  varying vec2  vUv;
  varying float vElevation;
  varying float vRipple;

  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0);
    const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.0-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    i=mod(i,289.0);
    vec4 p=permute(permute(permute(
      i.z+vec4(0.0,i1.z,i2.z,1.0))
      +i.y+vec4(0.0,i1.y,i2.y,1.0))
      +i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=1.0/7.0;
    vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z);
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0;
    vec4 s1=floor(b1)*2.0+1.0;
    vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
    m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  float fbm(vec3 p){
    float val=0.0;
    float amp=0.5;
    float frq=1.0;
    mat2 rot=mat2(cos(1.618),sin(1.618),-sin(1.618),cos(1.618));
    for(int i=0;i<6;i++){
      val+=amp*snoise(p*frq);
      p.xy*=rot;
      p.yz*=rot;
      frq*=2.0;
      amp*=0.5;
    }
    return val;
  }

  // ═══════════════════════════════════════════════════════════════
  // VOID BEACON — Hollow Knight abyss overlay
  // ═══════════════════════════════════════════════════════════════
  // Hash + fBm for the viscous tendril field. Separate namespace
  // from the fluid fBm above — different rot, different octave count.

  float vhash(vec2 p){
    vec3 p3=fract(vec3(p.xyx)*0.1031);
    p3+=dot(p3,p3.yzx+33.33);
    return fract((p3.x+p3.y)*p3.z);
  }

  float vvnoise(vec2 p){
    vec2 i=floor(p);
    vec2 f=fract(p);
    vec2 u=f*f*(3.0-2.0*f);
    return mix(
      mix(vhash(i),                    vhash(i+vec2(1.0,0.0)),u.x),
      mix(vhash(i+vec2(0.0,1.0)),    vhash(i+vec2(1.0,1.0)),u.x),
      u.y
    );
  }

  float vfbm(vec2 p){
    float v=0.0;
    float a=0.5;
    mat2 rot=mat2(0.80,0.60,-0.60,0.80);
    for(int i=0;i<5;i++){
      v+=a*vvnoise(p);
      p=rot*p*2.03;
      a*=0.48;
    }
    return v;
  }

  float vturbulentInk(vec2 p,float t){
    // Time scaled to 0.25x — thick tar, heavy smoke, not fast water
    float tt=t*0.25;
    vec2 q=vec2(
      vfbm(p+vec2(0.0,0.0)+0.015*tt),
      vfbm(p+vec2(5.2,1.3)+0.013*tt)
    );
    vec2 r=vec2(
      vfbm(p+3.5*q+vec2(1.7,9.2)-0.022*tt),
      vfbm(p+3.5*q+vec2(8.3,2.8)+0.017*tt)
    );
    return vfbm(p+4.2*r);
  }

  float vtendrils(vec2 p,float t,vec2 center){
    vec2 d=p-center;
    float ang=atan(d.y,d.x);
    float rad=length(d);
    // Slow angular drift — tendrils writhe like viscous ink in oil
    vec2 polar=vec2(ang*3.0,rad*5.5-t*0.22);
    float n=vturbulentInk(polar*0.6,t*0.12);
    // Harsh smoothstep — sharp crest-to-trough, no soft smoke
    float s=smoothstep(0.42,0.82,n);
    return pow(s,1.6);
  }

  // Compute the Void mask (0 = clear, 1 = consumed by absolute black).
  // The beaconLight parameter controls the clear-zone radius at centre.
  float computeVoid(vec2 uv, float t, float beaconLight){
    float aspect=uResolution.x/uResolution.y;
    vec2 p=vec2(uv.x*aspect,uv.y);
    vec2 center=vec2(0.5*aspect,0.5);

    vec2 d=p-center;
    float dist=length(d);

    // Light radius from beacon (screen-space)
    float maxDim=sqrt(aspect*aspect+1.0);
    float lightR=beaconLight*maxDim*0.65;

    // Viscous ink body
    vec2 inkP=p*2.8+0.6*d/max(dist,0.04);
    float ink=vturbulentInk(inkP,t);
    // Harsh smoothstep creates viscous liquid-metal edges
    ink=smoothstep(0.32,0.76,ink);

    // Tendril field
    float tend=vtendrils(p*1.3,t,center);

    // Light-front mask: inside = clear (0), outside = consumed (1)
    float feather=0.08+0.03*sin(t*3.2+dist*4.0);
    float voidMask=smoothstep(lightR-feather,lightR+feather,dist);

    // Tendrils reach past the front
    float tendrilReach=smoothstep(lightR-0.02,lightR+0.45,dist);

    // Composite
    float shadow=voidMask*mix(ink,1.0,0.72);
    shadow=max(shadow,tend*tendrilReach*0.92);

    // Contrast shaping
    shadow=pow(shadow,mix(1.4,0.85,beaconLight));

    return shadow;
  }
  // ═══════════════════════════════════════════════════════════════

  void main(){
    float aspect=uResolution.x/uResolution.y;
    float tw=uTransitionWarp;
    float td=uTransitionDir;
    vec2 uvw=vUv;
    vec2 wobble=vec2(
      snoise(vec3(vUv*6.0,uTime*0.2)),
      snoise(vec3(vUv*6.0+vec2(2.0),uTime*0.2))
    )*0.016*tw;
    // Radial warp from crest (matches CSS clip-path circle at --flip-ox/--flip-oy).
    vec2 uvRel=vUv-uTransitionOrigin;
    float rUV=length(uvRel)+1e-5;
    vec2 radial=uvRel/rUV;
    float ringPhase=rUV*28.0-uTime*2.4;
    vec2 radialWarp=radial*(
      sin(ringPhase)*0.012+sin(ringPhase*1.7+vUv.x*9.0)*0.006
    )*tw;
    vec2 voidPull=-radial*0.022*tw*max(-td,0.0);
    vec2 sunPush=radial*0.011*tw*max(td,0.0);
    uvw+=wobble+radialWarp+voidPull+sunPush;
    vec2 p=(uvw-0.5)*vec2(aspect,1.0);
    float scroll=uScrollProgress;

    float tSlow=uTime*0.032;
    float tRipple=uTime*0.048;

    vec2 scrollDrift=vec2(scroll*0.95,-scroll*0.62);
    vec2 ps=p+scrollDrift;

    float flowAngle=(uTime*0.011+scroll*0.35);
    mat2 rotFlow=mat2(cos(flowAngle),sin(flowAngle),-sin(flowAngle),cos(flowAngle));
    vec2 psr=rotFlow*ps;

    vec2 mouse=(uMouse-0.5)*vec2(aspect,1.0);
    float mouseProximity=1.0-smoothstep(0.0,0.32,length(p-mouse));

    float scScroll=scroll;
    vec2 q=vec2(
      fbm(vec3(psr*0.28,tSlow+scScroll*0.32)),
      fbm(vec3(psr*0.28+vec2(5.2,1.3),tSlow+scScroll*0.24))
    );
    vec2 r=vec2(
      fbm(vec3(psr*0.28+2.8*q+vec2(1.7,9.2),tSlow*0.7+scScroll*1.55)),
      fbm(vec3(psr*0.28+2.8*q+vec2(8.3,2.8),tRipple*0.88+scScroll*1.25))
    );
    float f=fbm(vec3(psr*0.28+2.0*r+vec2(mouseProximity*0.12),tRipple*0.42+scScroll*0.62));

    float burst=snoise(vec3(psr*8.0,uTime*0.55+td*0.6))
      *0.22*tw;
    f+=burst;

    // ── Theme palette ──
    // v_* = void (cool dark silver, features brighter than base)
    // d_* = day (warm cream, features darker/warmer than base)
    vec3 v_l0=vec3(0.032, 0.033, 0.037);
    vec3 v_l1=vec3(0.068, 0.070, 0.079);
    vec3 v_l2=vec3(0.112, 0.117, 0.134);
    vec3 v_l3=vec3(0.150, 0.159, 0.187);
    vec3 v_l4=vec3(0.185, 0.197, 0.232);

    vec3 d_l0=vec3(0.949, 0.925, 0.882);
    vec3 d_l1=vec3(0.910, 0.870, 0.792);
    vec3 d_l2=vec3(0.855, 0.790, 0.670);
    vec3 d_l3=vec3(0.780, 0.675, 0.498);
    vec3 d_l4=vec3(0.680, 0.545, 0.340);

    vec3 l0=mix(v_l0,d_l0,uFlip);
    vec3 l1=mix(v_l1,d_l1,uFlip);
    vec3 l2=mix(v_l2,d_l2,uFlip);
    vec3 l3=mix(v_l3,d_l3,uFlip);
    vec3 l4=mix(v_l4,d_l4,uFlip);

    vec3 col=l0;
    col=mix(col,l1,smoothstep(-0.45,0.55,f)*0.92);
    col=mix(col,l2,smoothstep(-0.1,0.72,f)*0.78);

    float crest=smoothstep(0.05,0.85,f)*smoothstep(0.10,0.75,length(q));
    float peak=smoothstep(0.40,0.95,f*length(r));

    float breatheCrest=0.94+0.06*sin(uTime*0.15);
    float breathePeak=0.96+0.04*sin(uTime*0.11+1.7);

    col=mix(col,l3,crest*0.55*breatheCrest);
    col=mix(col,l4,peak*0.35*breathePeak);

    col+=l2*smoothstep(0.04,0.18,vElevation)*0.30;
    col+=l3*smoothstep(0.10,0.22,vElevation)*0.15;
    float wake=mouseProximity*mouseProximity*mouseProximity;
    col+=l2*wake*0.35;
    col+=l3*wake*0.20;
    col+=l4*wake*0.08;

    // ── Ripple tint ──
    float crestRip=max(vRipple,0.0);
    float troughRip=max(-vRipple,0.0);
    vec3 v_moon=vec3(0.62,0.70,0.86);
    vec3 d_moon=vec3(0.95,0.88,0.70);
    vec3 moonTint=mix(v_moon,d_moon,uFlip);
    col+=moonTint*crestRip*0.32;
    col+=l4*crestRip*0.10;
    col-=l1*troughRip*0.14;

    // Soft inner glow at every active impact point.
    float coreGlow=0.0;
    for(int i=0;i<6;i++){
      vec4 rr=uRipples[i];
      if(rr.w<0.5) continue;
      float age=uTime-rr.z;
      if(age<0.0||age>3.6) continue;
      vec2 ro=vec2((rr.x-0.5)*aspect,rr.y-0.5);
      float d=length(p-ro);
      coreGlow+=exp(-pow(d/0.11,2.0))*exp(-age*1.8);
    }
    col+=moonTint*coreGlow*0.16;

    float vig=1.0-smoothstep(0.06,0.98,length(p*0.78));
    float vigVoid=pow(vig,1.24);
    col*=mix(vigVoid,1.0,uFlip);
    col*=mix(0.74,0.88,uFlip)+mix(0.19,0.11,uFlip)*(f*0.6+0.4*length(q));
    float lum=dot(col,vec3(0.2126,0.7152,0.0722));
    col=mix(vec3(lum),col,0.90);
    col=max(col,vec3(0.0));

    // ═══════════════════════════════════════════════════════════════
    // VOID BEACON COMPOSITE
    // The Hollow Knight Void overlays the fluid background.
    // When uBeaconRadius is 0, the void consumes all.
    // When uBeaconRadius is 1, light pushes the void to screen edges.
    // Only active in void theme (uFlip < 0.5) — in day mode the
    // void aesthetic is inappropriate; the beacon has no effect.
    // ═══════════════════════════════════════════════════════════════
    if(uFlip < 0.5 && uBeaconRadius > 0.001){
      // ── Idle breathing ──
      // Even when no one types, the Void pushes and pulls by a few pixels.
      // Slow sine oscillation (~22s cycle) gives the darkness a living pulse.
      float breathingBeacon = uBeaconRadius + 0.04 * sin(uTime * 0.28 + 1.1);
      breathingBeacon = clamp(breathingBeacon, 0.0, 1.0);

      // Compute mouse light (existing mouse proximity)
      float mouseDist=length(p-mouse);
      float mouseLight=smoothstep(0.5,0.0,mouseDist)*0.35;

      // Compute beacon light (radial clear zone from centre)
      float maxDim=sqrt(aspect*aspect+1.0);
      float lightR=breathingBeacon*maxDim*0.65;
      vec2 uvCenter=vec2(0.5*aspect,0.5);
      float distFromCenter=length(p-uvCenter);
      float feather=0.08+0.03*sin(uTime*3.2+distFromCenter*4.0);
      float beaconLight=smoothstep(lightR+feather,lightR-feather,distFromCenter);

      // Final light = max(mouseLight, beaconLight) — both sources push back
      float finalLight=max(mouseLight,beaconLight);

      // Compute the void mask (areas consumed by absolute black)
      float voidMask=computeVoid(vUv,uTime,breathingBeacon);

      // Void only consumes where finalLight is low
      float effectiveVoid=voidMask*(1.0-finalLight);

      // Darken the fluid toward absolute #000000 where the void is active
      vec3 voidBlack=vec3(0.0,0.0,0.0);
      col=mix(col,voidBlack,effectiveVoid*0.92);

      // Add a faint specular rim at the light boundary — the edge where
      // the void meets the light reads as a tension line
      float rimWidth=0.04+0.02*(1.0-breathingBeacon);
      float rim=smoothstep(lightR+feather+rimWidth,lightR+feather,distFromCenter)
               *smoothstep(lightR+feather-rimWidth,lightR+feather,distFromCenter);
      col+=mix(vec3(0.18,0.20,0.24),vec3(0.35,0.32,0.25),uFlip)*rim*0.25*breathingBeacon;
    }
    // ═══════════════════════════════════════════════════════════════

    gl_FragColor=vec4(col,1.0);
  }
`;
