import{_ as b,d as g,g as u,r as c,o as w,k as h,l as o,w as d,n as t,p as y,u as k,v as C,t as O}from"./index-18195021.js";import{u as $}from"./manage-eaf30c6d.js";import{f as A}from"./index-893f8b25.js";import"./bignumber-3e8dfdf6.js";import"./units-ff2320c2.js";const S={class:"authority-transfer"},T={__name:"TransferOwnership",setup(V){const{t:a}=g(),s=$(),l=u(s.owner),n=u(""),i=u(!1);s.$subscribe((e,r)=>{l.value=s.owner});async function m(){if(!/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(n.value)){t(a("trueFormat"));return}if(n.value==l.value){t(a("transferConsistent"));return}i.value=!0;try{const e=await y.token.contract(s.tokenAddress,s.abi),r=await e.transferOwnership(n.value);t({type:"success",message:a("submitSuccess")}),await r.wait(),s.owner=await e.owner(),n.value="",t({type:"success",message:a("transferSuccess")})}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?t(a("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?t(a("userCancelOperate")):t(a("transferFail"))}finally{i.value=!1}}return(e,r)=>{const p=c("van-field"),f=c("van-cell-group"),_=c("van-button");return w(),h("div",S,[o(f,{inset:""},{default:d(()=>[o(p,{"model-value":k(A)(l.value),"label-width":"9.5em",disabled:"",label:e.$t("ownership"),"input-align":"right"},null,8,["model-value","label"])]),_:1}),o(f,{inset:""},{default:d(()=>[o(p,{modelValue:n.value,"onUpdate:modelValue":r[0]||(r[0]=v=>n.value=v),label:e.$t("transferTo"),placeholder:e.$t("input"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),o(_,{type:"primary",round:"",block:"",class:"btn",loading:i.value,onClick:m},{default:d(()=>[C(O(e.$t("submit")),1)]),_:1},8,["loading"])])}}},D=b(T,[["__scopeId","data-v-145b07ad"]]);export{D as default};
