import{D as T}from"./Dialog-99c6b466.js";import{_ as B,d as O,b as U,f as D,e as _,g as d,r as y,o as E,k as M,a as H,l,w as f,u as p,F as N,n as s,C as x,D as F,v as I,t as L}from"./index-7f7ca8ad.js";import{u as P}from"./manage-a74cfb14.js";import{c as R,f as W}from"./index-c77e5a57.js";import{p as j,f as q}from"./units-a1b6cffb.js";/* empty css                                                       */import"./bignumber-3e8dfdf6.js";const z={class:"mint-token"},G={__name:"MintToken",setup(J){const{t:n}=O(),h=U(),b=D(),a=P(),C=_(()=>h.walletAddress.toLowerCase()===a.owner.toLowerCase()),v=d(""),m=d(h.walletAddress),r=d(""),k=_(()=>n("operationHash",{hash:W(v.value)})),g=d(!1),w=d(!1);function S(t){return t.replace("-","")}async function V(){if(!r.value){s(n("amountEmpty"));return}if(r.value.replace(".","").length>34){s(n("amountOver"));return}let t=r.value.split(".");if(t[1]&&t[1].length>a.decimals){s(n("amountOver"));return}if(!/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(m.value)){s(n("addressWrong"));return}w.value=!0;try{const i=await new x(window.ethereum).getSigner(),u=new F(a.tokenAddress,a.abi,i);let c=await u.mint(m.value,j(r.value,a.decimals));v.value=c.hash,c.wait().then(async o=>{if(o.status===1){s({type:"success",message:n("upChainSuccessfully")});let $=await u.totalSupply();a.totalSupply=q($.toString(),a.decimals),r.value=""}}),g.value=!0}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?s(n("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?s(n("userCancelOperate")):s(n("unkonwError"))}finally{w.value=!1}}async function A(){b.push("/manage/"+a.deployerId+"/"+a.tokenAddress)}return(t,e)=>{const i=y("van-field"),u=y("van-cell-group"),c=y("van-button");return E(),M(N,null,[H("div",z,[l(u,{inset:""},{default:f(()=>[l(i,{modelValue:p(a).totalSupply,"onUpdate:modelValue":e[0]||(e[0]=o=>p(a).totalSupply=o),readonly:"",label:t.$t("currentTotal"),"input-align":"right"},null,8,["modelValue","label"])]),_:1}),l(u,{inset:""},{default:f(()=>[l(i,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),"label-width":"7em",type:"number",label:t.$t("mintTokenAmount"),placeholder:t.$t("pleaseEnter"),formatter:S,"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(u,{inset:""},{default:f(()=>[l(i,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=o=>m.value=o),"label-width":"9em",label:t.$t("receivingAddress"),placeholder:t.$t("pleaseEnter"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(c,{type:"primary",round:"",block:"",class:"btn",onClick:V,loading:w.value,disabled:!p(C)},{default:f(()=>[I(L(t.$t("submitAdd")),1)]),_:1},8,["loading","disabled"])]),l(T,{show:g.value,"onUpdate:show":e[3]||(e[3]=o=>g.value=o),title:t.$t("submitAddSuccessfully"),message:p(k),showCancelButton:!1,confirmButtonText:t.$t("copyHash"),onOnConfirm:e[4]||(e[4]=o=>p(R)(v.value)),onOnCancel:A},null,8,["show","title","message","confirmButtonText"])],64)}}},ae=B(G,[["__scopeId","data-v-2efce8e1"]]);export{ae as default};
