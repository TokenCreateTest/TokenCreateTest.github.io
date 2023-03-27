import{_ as M,b as Z,Z as j,f as G,d as H,g as b,e as m,r as w,o as N,k as J,a as g,t as T,u as t,l as n,w as c,c as V,z as _,n as I,p as K,v as Q}from"./index-7f7ca8ad.js";import{u as W}from"./manage-a74cfb14.js";import{R as B}from"./Rate-234a4a1d.js";import{B as l}from"./bignumber-3e8dfdf6.js";import"./units-a1b6cffb.js";const X={class:"rate-editing"},Y={class:"buy-rate"},h={class:"title"},ee={class:"sell-rate"},le={class:"title"},ue={__name:"TaxEditing",setup(ae){Z(),j();const R=G(),e=W(),{t:f}=H(),k=b(!1),s=b(e.buyFundFee),r=b(e.buyLPFee),x=b(e.buyBurnFee),p=b(e.buyRewardFee),i=b(e.sellFundFee),d=b(e.sellLPFee),F=b(e.sellBurnFee),y=b(e.sellRewardFee);e.$subscribe((u,a)=>{s.value=e.buyFundFee,r.value=e.buyLPFee,x.value=e.buyBurnFee,p.value=e.buyRewardFee,i.value=e.sellFundFee,d.value=e.sellLPFee,F.value=e.sellBurnFee,y.value=e.sellRewardFee});const $=m(()=>{if(e.deployerId==1)return l(s.value).plus(r.value).plus(x.value);if(e.deployerId==2||e.deployerId==3)return l(s.value).plus(r.value).plus(p.value)}),S=m(()=>{if(e.deployerId==1)return l(i.value).plus(d.value).plus(F.value);if(e.deployerId==2||e.deployerId==3)return l(i.value).plus(d.value).plus(y.value)}),C=m(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(r.value).minus(p.value))}),L=m(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(p.value))}),P=m(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(r.value))}),U=m(()=>{if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(r.value).toNumber())}),E=m(()=>{if(e.deployerId==1)return Number(l(20).minus(d.value).minus(F.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(d.value).minus(y.value))}),A=m(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(F.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(i.value).minus(y.value))}),q=m(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(d.value))}),O=m(()=>{if(e.deployerId==2||e.deployerId==3)return l(20).minus(i.value).minus(d.value).toNumber()});async function z(){if(e.deployerId==1){if(l(s.value).plus(x.value).plus(r.value).plus(i.value).plus(F.value).plus(d.value).lte(0)){I(f("taxlimit1"));return}}else if(e.deployerId==2){if(l(s.value).plus(r.value).plus(i.value).plus(d.value).lte(0)){I(f("taxlimit2"));return}}else if(e.deployerId==3&&l(s.value).plus(p.value).plus(r.value).plus(i.value).plus(y.value).plus(d.value).lte(0)){I(f("taxlimit1"));return}k.value=!0;try{const u=await K.token.contract(e.tokenAddress,e.abi);let a;e.deployerId==1?a=[l(r.value).div(100).multipliedBy(1e4).toNumber(),l(x.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber(),l(F.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==2?a=[l(r.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber(),l(y.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==3&&(a=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(y.value).div(100).multipliedBy(1e4).toNumber(),l(d.value).div(100).multipliedBy(1e4).toNumber()]);const v=await u.completeCustoms(a);I({type:"success",message:f("submitSuccess")}),await v.wait(),e.getTokenFee(e.tokenAddress),I({type:"success",message:f("editTaxSuccess"),onClose:()=>{R.push("/manage/"+e.deployerId+"/"+e.tokenAddress)}})}catch(u){console.log(u),u.info&&u.info.error&&u.info.error.code===4001?I(f("userCancelOperate")):u.error&&u.error.message&&u.error.message=="Canceled"?I(f("userCancelOperate")):I(f("editTaxFail"))}finally{k.value=!1}}return(u,a)=>{const v=w("van-cell"),D=w("van-button");return N(),J("div",X,[g("div",Y,[g("div",h,T(u.$t("editBuyTax",{buyFee:t($)})),1),n(v,{class:"rate-cell",title:u.$t("marketingTax")},{extra:c(()=>[n(B,{value:s.value,"onUpdate:value":a[0]||(a[0]=o=>s.value=o),maxValue:t(C)},null,8,["value","maxValue"])]),_:1},8,["title"]),n(v,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:c(()=>[n(B,{value:r.value,"onUpdate:value":a[1]||(a[1]=o=>r.value=o),maxValue:t(L)},null,8,["value","maxValue"])]),_:1},8,["title"]),t(e).deployerId==1?(N(),V(v,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:c(()=>[n(B,{value:x.value,"onUpdate:value":a[2]||(a[2]=o=>x.value=o),maxValue:t(P)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),t(e).deployerId==2||t(e).deployerId==3?(N(),V(v,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:c(()=>[n(B,{value:p.value,"onUpdate:value":a[3]||(a[3]=o=>p.value=o),maxValue:t(U)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),g("div",ee,[g("div",le,T(u.$t("editSellTax",{sellFee:t(S)})),1),n(v,{class:"rate-cell",title:u.$t("marketingTax")},{extra:c(()=>[n(B,{value:i.value,"onUpdate:value":a[4]||(a[4]=o=>i.value=o),maxValue:t(E)},null,8,["value","maxValue"])]),_:1},8,["title"]),n(v,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:c(()=>[n(B,{value:d.value,"onUpdate:value":a[5]||(a[5]=o=>d.value=o),maxValue:t(A)},null,8,["value","maxValue"])]),_:1},8,["title"]),t(e).deployerId==1?(N(),V(v,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:c(()=>[n(B,{value:F.value,"onUpdate:value":a[6]||(a[6]=o=>F.value=o),maxValue:t(q)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),t(e).deployerId==2||t(e).deployerId==3?(N(),V(v,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:c(()=>[n(B,{value:y.value,"onUpdate:value":a[7]||(a[7]=o=>y.value=o),maxValue:t(O)},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),n(D,{type:"primary",round:"",block:"",class:"btn",loading:k.value,onClick:z},{default:c(()=>[Q(T(u.$t("submit")),1)]),_:1},8,["loading"])])}}},oe=M(ue,[["__scopeId","data-v-630de172"]]);export{oe as default};
