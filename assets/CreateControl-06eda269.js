import{_ as r,b as m,Z as p,f as h,r as _,o as n,k as c,a as e,l as t,X as V,Y as k,v}from"./index-bbb3c8b7.js";const a=i=>(V("data-v-e141e216"),i=i(),k(),i),f={class:"create-control"},U={class:"control-item"},g=a(()=>e("div",{class:"left"},[e("div",{class:"title"}," 手动开启交易 "),e("div",{class:"content"},[v(" 如开启则需要在管理页面-开启后，才可进行交易。"),e("br"),v(" 如关闭则添加流动后即可进行交易。"),e("br"),v(" 交易开启后无法再次关闭。 ")])],-1)),C={class:"right"},z={class:"control-item"},y={class:"left"},I=a(()=>e("div",{class:"title"}," 自动杀区块 ",-1)),S={class:"content"},b={key:1},w={class:"right"},B={class:"control-item"},N=a(()=>e("div",{class:"left"},[e("div",{class:"title"}," 税收开关 "),e("div",{class:"content"}," 在发行后，仍可进行税收费率的自定义调整，此开关关闭后无法再次开启。 ")],-1)),R={class:"right"},E={class:"control-item"},T=a(()=>e("div",{class:"left"},[e("div",{class:"title"}," 黑白名单 "),e("div",{class:"content"}," 黑名单：使制定地址无法交易。白名单：交易时享受0费率。此项开关关闭后无法再次开启。 ")],-1)),X={class:"right"},Y={class:"control-item"},Z={class:"left"},j=a(()=>e("div",{class:"title"}," 最大持币限制 ",-1)),q={class:"content"},A={key:1},D={class:"right"},F={class:"control-item"},G={class:"left"},H=a(()=>e("div",{class:"title"}," 交易限制 ",-1)),J={class:"content"},K={key:1},L={class:"right"},M={__name:"CreateControl",setup(i){return m(),p(),h(),(s,o)=>{const d=_("van-switch"),u=_("van-field");return n(),c("div",f,[e("div",U,[g,e("div",C,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[0]||(o[0]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])]),e("div",z,[e("div",y,[I,e("div",S,[(n(),c("div",b,[t(u,{class:"input",modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value=l),placeholder:"请输入区块数量"},null,8,["modelValue"])]))])]),e("div",w,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[2]||(o[2]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])]),e("div",B,[N,e("div",R,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[3]||(o[3]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])]),e("div",E,[T,e("div",X,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[4]||(o[4]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])]),e("div",Y,[e("div",Z,[j,e("div",q,[(n(),c("div",A,[t(u,{class:"input",modelValue:s.value,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value=l),placeholder:"请输入单地址最多持有代币数量"},null,8,["modelValue"])]))])]),e("div",D,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[6]||(o[6]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])]),e("div",F,[e("div",G,[H,e("div",J,[(n(),c("div",K,[t(u,{class:"input",modelValue:s.value,"onUpdate:modelValue":o[7]||(o[7]=l=>s.value=l),placeholder:"请输入单地址最多持有代币数量"},null,8,["modelValue"])]))])]),e("div",L,[t(d,{modelValue:s.checked,"onUpdate:modelValue":o[8]||(o[8]=l=>s.checked=l),size:"18px"},null,8,["modelValue"])])])])}}},P=r(M,[["__scopeId","data-v-e141e216"]]);export{P as default};
