import{D as f}from"./DropDown-63dc82f1.js";import{_ as S,d as b,b as D,l as $,f as B,p as N,r as i,o as u,g as p,h as o,w as s,s as T,u as a,y as x,t as v,a as m,F as L,j as V}from"./index-27793788.js";import{u as E}from"./create-3b7f9824.js";const F={class:"basic-info"},U={class:"select-chain"},j=["onClick"],M={class:"item-text"},P={__name:"BasicInfo",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(R,{emit:q}){const{t:h}=b(),n=D(),y=$(),e=E(),r=B(!1);function C(){r.value=!0}function g(t){e.changeDeployer(t),r.value=!1}function k(){if(n.chainId==-1){n.netErrorDialogShow=!0;return}e.deployerId==0||e.deployerId===1||e.deployerId===2||e.deployerId===3?(e.step=1,y.push("/create/Detail")):T(h("comingSoon"))}return N(()=>{}),(t,c)=>{const d=i("van-cell"),_=i("van-cell-group"),I=i("van-button"),w=i("van-action-sheet");return u(),p("div",F,[o(_,{inset:""},{default:s(()=>[o(d,{title:t.$t("selectChain"),class:"switch-cell"},{value:s(()=>[o(f,{onClick:c[0]||(c[0]=l=>a(n).showSelectChainPopup=!0),error:a(n).chainId==-1,logo:a(n).chainIcon,value:a(n).chain.toUpperCase()},null,8,["error","logo","value"])]),_:1},8,["title"])]),_:1}),o(_,{inset:""},{default:s(()=>[o(d,{title:t.$t("selectTemplate"),class:"switch-cell"},{value:s(()=>[o(f,{onClick:C,value:t.$t(a(e).deployerName)},null,8,["value"])]),_:1},8,["title"])]),_:1}),o(I,{type:"primary",round:"",block:"",class:"btn-control",onClick:k},{default:s(()=>[x(v(t.$t("nextStep")),1)]),_:1}),o(w,{show:r.value,"onUpdate:show":c[1]||(c[1]=l=>r.value=l),"safe-area-inset-bottom":"",title:t.$t("selectTemplate")},{default:s(()=>[m("ul",U,[(u(!0),p(L,null,V(a(e).deployerList,l=>(u(),p("li",{onClick:z=>g(l.deployerId)},[m("div",M,v(t.$t(l.deployerName)),1)],8,j))),256))])]),_:1},8,["show","title"])])}}},J=S(P,[["__scopeId","data-v-2bd302c3"]]);export{J as default};
