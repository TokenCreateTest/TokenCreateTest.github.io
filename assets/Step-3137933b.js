import{_ as u,o as c,c as r,F as d,f as m,e as a,n,t as o}from"./index-ee466687.js";const f={class:"step"},k=["onClick"],y={class:"text"},v={__name:"Step",props:{stepList:{type:Array,default:[]},current:{type:Number,default:0}},emits:["stepClick"],setup(p,{emit:_}){const t=p;function l(s){s<=t.current&&_("stepClick",s)}return(s,C)=>(c(),r("ul",f,[(c(!0),r(d,null,m(t.stepList,(i,e)=>(c(),r("li",{key:e},[a("div",{class:n(["step-item",{"step-item-selected":e<=t.current}]),onClick:()=>l(e)},[a("div",{class:n(["num",{"num-selected":e<=t.current}])},o(e+1),3),a("div",y,o(s.$t(i)),1)],10,k)]))),128))]))}},S=u(v,[["__scopeId","data-v-adfe400c"]]);export{S};
