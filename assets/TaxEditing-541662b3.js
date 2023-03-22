import{_ as D,b as M,Z,f as j,d as G,g as c,e as m,r as w,o as N,k as H,a as g,t as k,u as t,l as n,w as b,c as V,z as _,n as I,p as J,v as K}from"./index-18195021.js";import{u as Q}from"./manage-eaf30c6d.js";import{R as B}from"./Rate-9070edd5.js";import{B as l}from"./bignumber-3e8dfdf6.js";import"./units-ff2320c2.js";const W={class:"rate-editing"},X={class:"buy-rate"},Y={class:"title"},h={class:"sell-rate"},ee={class:"title"},le={__name:"TaxEditing",setup(ue){M(),Z(),j();const e=Q(),{t:f}=G(),T=c(!1),s=c(e.buyFundFee),r=c(e.buyLPFee),x=c(e.buyBurnFee),p=c(e.buyRewardFee),i=c(e.sellFundFee),d=c(e.sellLPFee),F=c(e.sellBurnFee),y=c(e.sellRewardFee);e.$subscribe((u,a)=>{s.value=e.buyFundFee,r.value=e.buyLPFee,x.value=e.buyBurnFee,p.value=e.buyRewardFee,i.value=e.sellFundFee,d.value=e.sellLPFee,F.value=e.sellBurnFee,y.value=e.sellRewardFee});const R=m(()=>{if(e.deployerId==1)return l(s.value).plus(r.value).plus(x.value);if(e.deployerId==2||e.deployerId==3)return l(s.value).plus(r.value).plus(p.value)}),$=m(()=>{if(e.deployerId==1)return l(i.value).plus(d.value).plus(F.value);if(e.deployerId==2||e.deployerId==3)return l(i.value).plus(d.value).plus(y.value)}),S=m(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(r.value).minus(p.value))}),C=m(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(p.value))}),L=m(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(r.value))}),P=m(()=>{if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(r.value).toNumber())}),U=m(()=>{if(e.deployerId==1)return Number(l(20).minus(d.value).minus(F.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(d.value).minus(y.value))}),E=m(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(F.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(i.value).minus(y.value))}),q=m(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(d.value))}),A=m(()=>{if(e.deployerId==2||e.deployerId==3)return l(20).minus(i.value).minus(d.value).toNumber()});async function O(){if(e.deployerId==1){if(l(s.value).plus(x.value).plus(r.value).plus(i.value).plus(F.value).plus(d.value).lte(0)){I(f("taxlimit1"));return}}else if(e.deployerId==2){if(l(s.value).plus(r.value).plus(i.value).plus(d.value).lte(0)){I(f("taxlimit2"));return}}else if(e.deployerId==3&&l(s.value).plus(p.value).plus(r.value).plus(i.value).plus(y.value).plus(d.value).lte(0)){I(f("taxlimit1"));return}T.value=!0;try{const u=await J.token.contract(e.tokenAddress,e.abi);let a;e.deployerId==1?a=[l(r.value).div(100).multipliedBy(1e4).toNumber(),l(x.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber(),l(F.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==2?a=[l(r.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber(),l(y.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==3&&(a=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(y.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber()]);const v=await u.completeCustoms(a);I({type:"success",message:f("submitSuccess")}),await v.wait(),e.getTokenFee(e.tokenAddress),I({type:"success",message:f("editTaxSuccess")})}catch(u){console.log(u),u.info&&u.info.error&&u.info.error.code===4001?I(f("userCancelOperate")):u.error&&u.error.message&&u.error.message=="Canceled"?I(f("userCancelOperate")):I(f("editTaxFail"))}finally{T.value=!1}}return(u,a)=>{const v=w("van-cell"),z=w("van-button");return N(),H("div",W,[g("div",X,[g("div",Y,k(u.$t("editBuyTax",{buyFee:t(R)})),1),n(v,{class:"rate-cell",title:u.$t("marketingTax")},{extra:b(()=>[n(B,{value:s.value,"onUpdate:value":a[0]||(a[0]=o=>s.value=o),maxValue:t(S)},null,8,["value","maxValue"])]),_:1},8,["title"]),n(v,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:b(()=>[n(B,{value:r.value,"onUpdate:value":a[1]||(a[1]=o=>r.value=o),maxValue:t(C)},null,8,["value","maxValue"])]),_:1},8,["title"]),t(e).deployerId==1?(N(),V(v,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:b(()=>[n(B,{value:x.value,"onUpdate:value":a[2]||(a[2]=o=>x.value=o),maxValue:t(L)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),t(e).deployerId==2||t(e).deployerId==3?(N(),V(v,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:b(()=>[n(B,{value:p.value,"onUpdate:value":a[3]||(a[3]=o=>p.value=o),maxValue:t(P)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),g("div",h,[g("div",ee,k(u.$t("editSellTax",{sellFee:t($)})),1),n(v,{class:"rate-cell",title:u.$t("marketingTax")},{extra:b(()=>[n(B,{value:i.value,"onUpdate:value":a[4]||(a[4]=o=>i.value=o),maxValue:t(U)},null,8,["value","maxValue"])]),_:1},8,["title"]),n(v,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:b(()=>[n(B,{value:d.value,"onUpdate:value":a[5]||(a[5]=o=>d.value=o),maxValue:t(E)},null,8,["value","maxValue"])]),_:1},8,["title"]),t(e).deployerId==1?(N(),V(v,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:b(()=>[n(B,{value:F.value,"onUpdate:value":a[6]||(a[6]=o=>F.value=o),maxValue:t(q)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),t(e).deployerId==2||t(e).deployerId==3?(N(),V(v,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:b(()=>[n(B,{value:y.value,"onUpdate:value":a[7]||(a[7]=o=>y.value=o),maxValue:t(A)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),n(z,{type:"primary",round:"",block:"",class:"btn",loading:T.value,onClick:O},{default:b(()=>[K(k(u.$t("submit")),1)]),_:1},8,["loading"])])}}},de=D(le,[["__scopeId","data-v-51c2ffdf"]]);export{de as default};
