import{S as Te}from"./Step-8793f213.js";import{T as Ve}from"./TokenIcon-cbe2b73b.js";import{_ as me,i as ge,u as ke,j as d,w as ye,k as Be,b as A,e as R,o as r,c as f,h as g,f as e,F as E,g as te,l as z,m as Ie,t as s,p as Ee,E as k,q as Ne,r as Ae,v as se,ab as Re,a as Fe,A as j,x as B,y as _e,B as I,D as pe,M as De,z as M,n as Me}from"./index-57098d62.js";import{f as ce,a as J,b as he}from"./units-ee695882.js";import{u as Oe}from"./index-33ac90bd.js";import{W as Ue}from"./wallet-d0bc25c3.js";/* empty css                                                          */const We={class:"token-list"},Ge=["onClick"],Pe={class:"item-left"},je={class:"item-info"},qe={class:"up"},xe={class:"down"},ze={class:"item-right item-info"},He={class:"up"},Qe={class:"down"},Ke={__name:"SelectToken",emits:["select"],setup(ne,{emit:m}){const{t:H}=ge(),_=ke(),c=d(""),F=d([]),S=d([]);ye(()=>[c.value,F.value],async()=>{S.value=await T()});async function T(){if(c.value)if(c.value.startsWith("0x")){let y=F.value.filter($=>$.address.toLowerCase()==c.value.toLowerCase());if(y.length==0&&Be(c.value)){let $=await A.wallet.metamask.contractERC20(c.value);const u=c.value.toLowerCase(),p=await $.balanceOf(_.walletAddress),h=await $.decimals(),v=await $.name(),C=await $.symbol();let V={address:u,tokenId:`${u}-${_.chain}`.toLowerCase(),chain:_.chain,symbol:C,decimals:Number(h),icon:`https://ave.s3.ap-east-1.amazonaws.com/token_icon/${_.chain}/${u}.png`,amount:Number(ce(p.toString(),h)),name:v,price:0};console.log(V),y.push(V)}return y}else return F.value.filter(y=>y.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1);else return F.value}async function q(){if(!_.isConnecting){k.error(H("connectWalletWarn"));return}try{const y=await A.debank.getTokenList(_.walletAddress,_.chain);let $=[];for(let u of y.data.data)u.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(u.token=A.wallet.MAIN_COIN_ADDRESS),new RegExp("^0x.*$","gi").test(u.token)&&u.value>0&&u.risk_score<60&&u.risk_level>=0&&u.flag!=="blacklist"&&u.symbol!==""&&u.flag!=="lp"&&$.push({address:u.token.toLowerCase(),tokenId:`${u.token}-${u.chain}`.toLowerCase(),chain:u.chain.toLowerCase(),symbol:u.symbol,decimals:u.decimals,icon:Ne(u.chain.toLowerCase(),u.token.toLowerCase()),amount:u.value,price:u.current_price_usd});F.value=$}catch(y){y&&y.message?k.error(y.message):k.error(H("unknowError"))}finally{}}return q(),(y,$)=>{const u=R("el-input");return r(),f(E,null,[g(u,{modelValue:c.value,"onUpdate:modelValue":$[0]||($[0]=p=>c.value=p),placeholder:y.$t("pleaseEnterTokenAddress")},null,8,["modelValue","placeholder"]),e("ul",We,[(r(!0),f(E,null,te(S.value,p=>(r(),f("li",{key:p,onClick:()=>m("select",p)},[e("div",Pe,[g(Ve,{class:"token-icon-30",bigIcon:p.icon,smallIcon:z(Ie)(p.chain)},null,8,["bigIcon","smallIcon"]),e("div",je,[e("div",qe,s(p.symbol),1),e("div",xe,s(p.address==z(A).wallet.MAIN_COIN_ADDRESS?" ":z(Ee)(p.address,8)),1)])]),e("div",ze,[e("div",He,s(p.amount),1),e("div",Qe,s(p.price?`$ ${p.price}`:" "),1)])],8,Ge))),128))])],64)}}},Je=me(Ke,[["__scopeId","data-v-d4d4d861"]]);const Xe={class:"box"},Ye=["value"],Ze={class:"index"},et={class:"content"},tt={__name:"InputAddressList",props:{isCustom:{type:Boolean,default:!1},addressList:{type:Array,default:[]}},emits:["iptChange"],setup(ne,{expose:m,emit:H}){const _=ne;m({clearAddress:u});const c=Ae({isCustom:_.isCustom,addressList:_.addressList}),F=se(()=>{let h=[];for(let v=0;v<c.addressList.length;v++){const C=c.addressList[v];c.isCustom?h.push(`${C.address},${C.amountString}`):h.push(C.address)}return h}),S=se(()=>F.value.join(`
`)),T=d(null),q=d(!1);async function y(){q.value=!0,await Re(),T==null||T.value.focus()}function $(h){console.log("onBlurCapture"),console.log(h.target.value),q.value=!1}function u(){c.isCustom=!1,c.addressList=[]}function p(h){const v=h.target.value,C=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;let V=!1,a=v.replace(/\s+/ig," ").trim();if(a){let x=a.split(" ");a.indexOf(",")>-1&&(V=!0);const le=[];for(let X=0;X<x.length;X++){let Q=x[X];if(!Q||!C.test(Q))continue;let Y="",O="";if(V==!0){let U=Q.split(",");Y=U[0],U.length>1?O=U[1]:O="0"}else Y=Q;le.push({address:Y,amountString:O})}c.isCustom=V,c.addressList=le}else c.isCustom=!1,c.addressList=[];console.log("emit",c.isCustom,c.addressList),H("iptChange",c.isCustom,c.addressList)}return(h,v)=>(r(),f("div",Xe,[q.value?(r(),f("textarea",{key:0,class:"ipt",ref_key:"ipt",ref:T,onBlurCapture:$,value:S.value,onChange:p},null,40,Ye)):(r(),f("div",{key:1,class:"table",onClick:y},[(r(!0),f(E,null,te(F.value,(C,V)=>(r(),f("li",{key:V},[e("div",Ze,s(V+1),1),e("div",et,s(C),1)]))),128))]))]))}},st=me(tt,[["__scopeId","data-v-85a19e84"]]);const lt={class:"form"},at={class:"form-item"},ot={class:"form-item-title"},nt={class:"form-item-value"},it={key:1,class:"placeholder"},rt={class:"form-item"},ut={class:"form-item-title"},dt={class:"form-item-value"},ct={class:"form-item address-list"},mt={class:"form-item-title"},vt={class:"form-item-value"},ft={class:"address-list-tips"},_t={class:"form-item rule"},pt={class:"form-item-title"},ht={class:"form-item-value"},gt={key:0,class:"form-item"},kt={class:"form-item-title"},yt={class:"form-item-value"},At={key:0,class:"form-item"},$t={class:"form-item-title"},Ct={class:"form-item-value"},wt={key:1,class:"form-item"},bt={class:"form-item-title"},St={class:"form-item-value"},Lt={class:"form-item"},Tt={class:"form-item-title"},Vt={class:"form-item-value"},Bt={class:"form-item"},It={class:"form-item-title"},Et={class:"form-item-value"},Nt={class:"form-bottom"},Rt={class:"form-bottom-btns"},Ft={class:"info"},Dt={class:"info-item"},Mt={class:"info-key"},Ot={class:"info-value"},Ut={class:"info-item"},Wt={class:"info-key"},Gt={class:"info-value"},Pt={class:"info-item"},jt={class:"info-key"},qt={class:"info-value"},xt={class:"info-item"},zt={class:"info-key"},Ht={class:"info-value"},Qt={class:"info-item"},Kt={class:"info-key"},Jt={class:"info-value"},Xt={class:"info-item"},Yt={class:"info-key"},Zt={class:"info-value"},es={class:"form-item"},ts={class:"form-item-title"},ss={class:"form-item-value"},ls={class:"receiving-address"},as={class:"address"},os={class:"form-bottom"},ns={class:"form-bottom-btns"},is={key:2,class:"create-success"},rs={class:"text"},us={__name:"Multi",setup(ne){const{t:m}=ge(),H=Fe(),_=ke(),c=Oe(),F=Ae(["ready","confirm","multiTransfer"]),S=d(0),T=d(0),q=d(!1),y=d(null),$=d([{name:"customTransfer",value:0},{name:"randomAddress",value:1}]),u=d([{name:"dividedEquallyByTotal",value:0},{name:"eachAddressEqual",value:1}]),p=d(0),h=d(!1),v=d([]),C=d(!1),V=d(!1),a=d(null),x=d(!1);async function le(t){if(a.value=t,x.value=!1,a.value.address==A.wallet.MAIN_COIN_ADDRESS){C.value=!1;return}await A.wallet.metamask.isAllowanceEnough(_.transfer.multiSenderAddress,a.value.address,_.walletAddress)?C.value=!1:C.value=!0}async function X(){V.value=!0;try{let t=await A.wallet.metamask.approveMaxAmount(a.value.address,_.transfer.multiSenderAddress);console.log(t),await t.wait(),C.value=!1}catch(t){console.log(t);let l=A.wallet.metamask.parseError(t);k.error(m(l))}finally{V.value=!1}}function Q(){x.value=!0}function Y(t,l){h.value=t,v.value=l}const O=d(""),U=d(""),ve=se(()=>{if(T.value==0&&h.value){let t=I(0);for(let l=0;l<v.value.length;l++){const b=v.value[l];t=t.plus(I(b.amountString))}return t.toNumber()}return 0}),Z=d(""),ee=d(""),w=d([]),ie=d(0),ae=d(0),oe=d(0),re=d(0),ue=d(0),fe=se(()=>I(ae.value).plus(oe.value).toNumber()),$e=se(()=>ue.value<fe.value);ye(()=>[w.value,S.value,a.value],async()=>{if(console.log("watch watch watch"),S.value==1&&w.value.length>0&&a.value){const t=pe.service({lock:!0,text:m("estimatingGas")});try{let l=await A.wallet.metamask.getBalance(_.walletAddress);ue.value=I(he(l)).toNumber();const b=await A.wallet.metamask.contractMultiTransfer(_.transfer.multiSenderAddress);let D=I(0),n=[],o=[];for(let P=0;P<w.value.length;P++){const i=w.value[P];D=D.plus(I(i.amountString)),n.push(i.address),o.push(J(i.amountString,a.value.decimals))}ie.value=D.toNumber();const L=await b.getFee(w.value.length);oe.value=ce(L,a.value.decimals);let W=L;a.value.address==A.wallet.MAIN_COIN_ADDRESS&&(W=L+J(D.toString(),a.value.decimals));const G=await A.wallet.metamask.getGasPrice();let N=await b.multiSend.estimateGas(a.value.address,n,o,{value:W})*2n;ae.value=he(N*G);const K=await b.multiSend.staticCall(a.value.address,n,o,{value:W});re.value=ce(K,a.value.decimals)}catch(l){console.dir(l);let b=A.wallet.metamask.parseError(l);k.error(m(b))}finally{t.close()}}else ae.value=0,oe.value=0,ie.value=0,re.value=0},{deep:!0});async function Ce(){if(!a.value){k.error(m("pleaseSelectToken1"));return}if(T.value==0){if(v.value.length===0){k.error(m("enterTransferAddress"));return}if(v.value.length>400){k.error(m("numOfAddressLimit"));return}if(!h.value){if(p.value==0){if(!U.value){k.error(m("enterTransferAmount"));return}}else if(!O.value){k.error(m("enterTransferAmount"));return}}}else{if(!Z.value){k.error(m("pleaseEnterNumOfaddress"));return}let n=I(Z.value).toNumber();if(n<=0){k.error(m("pleaseEnterNumOfaddress"));return}if(n>400){k.error(m("numOfAddressLimit"));return}if(!ee.value){k.error(m("pleaseEnterAmount"));return}if(I(ee.value).toNumber()<=0){k.error(m("pleaseEnterCorrectAmount"));return}}const t=[];if(T.value==0)if(h.value)for(let n=0;n<v.value.length;n++){const o=v.value[n];t.push({address:o.address,amountString:o.amountString})}else if(p.value==0){const n=I(U.value).div(v.value.length).dp(2).toString();for(let o=0;o<v.value.length;o++){const L=v.value[o];t.push({address:L.address,amountString:n})}}else for(let n=0;n<v.value.length;n++){const o=v.value[n];t.push({address:o.address,amountString:O.value})}else{const n=parseInt(Z.value);for(let o=0;o<n;o++){let L=Ue.createRandom();t.push({address:L.address.toLowerCase(),amountString:ee.value})}}w.value=t;let l=I(0),b=[],D=[];for(let n=0;n<w.value.length;n++){const o=w.value[n];l=l.plus(I(o.amountString)),b.push(o.address),D.push(J(o.amountString,a.value.decimals))}if(a.value.amount<l){k.error(m("transferAmountExceeds"));return}S.value=1}function we(t){console.log(t),w.value.splice(t,1)}async function be(){if(w.value.length==0){k.error(m("noAddressForTransfer"));return}let t=I(0),l=[],b=[];for(let n=0;n<w.value.length;n++){const o=w.value[n];t=t.plus(I(o.amountString)),l.push(o.address),b.push(J(o.amountString,a.value.decimals))}if(a.value.amount<t){k.error(m("transferAmountExceeds"));return}const D=pe.service({lock:!0,text:m("trading")});try{const n=await A.wallet.metamask.contractMultiTransfer(_.transfer.multiSenderAddress),o=await n.getFee(w.value.length);let L=o;a.value.address==A.wallet.MAIN_COIN_ADDRESS&&(L=o+J(t.toString(),a.value.decimals));let W=await n.multiSend.estimateGas(a.value.address,l,b,{value:L})*2n;const G=await n.multiSend(a.value.address,l,b,{value:L,gasLimit:W});console.dir(G);const N=G.hash,K=await G.wait();if(console.dir(K),console.log("txHash: "+N),K.status!=1)k.error(m("upChainFail")),await A.multiSend.sendMultiSendFailTx(_.chain,N);else{let P={receiverCount:0,sendAmount:J(t.toString(),a.value.decimals).toString(),sendTime:De().unix(),sender:_.walletAddress,status:-1,tokenAddress:a.value.address,tokenDecimal:a.value.decimals,tokenSymbol:a.value.symbol,txHash:N};console.dir(P),c.transferringList.push(P),S.value=2}}catch(n){console.dir(n);let o=A.wallet.metamask.parseError(n);k.error(m(o))}finally{D.close()}}function Se(t){return console.log("intFormatter",t),t.replace(".","")}function Le(){y.value.clearAddress(),v.value=[],h.value=!1}return(t,l)=>{const b=R("icon-text"),D=R("ArrowDownBold"),n=R("el-icon"),o=R("el-button"),L=R("svg-icon"),W=R("el-radio"),G=R("el-radio-group"),N=R("el-input"),K=R("el-alert"),P=R("el-dialog");return r(),f(E,null,[e("div",null,[e("div",null,[g(Te,{"step-list":F,current:S.value},null,8,["step-list","current"])])]),e("div",lt,[S.value==0?(r(),f(E,{key:0},[e("div",at,[e("div",ot,s(t.$t("selectToken")),1),e("div",nt,[e("div",{class:"select",onClick:Q},[a.value?(r(),j(b,{key:0,icon:a.value.icon,text:a.value.symbol},null,8,["icon","text"])):(r(),f("div",it,s(t.$t("pleaseSelectToken")),1)),g(n,null,{default:B(()=>[g(D)]),_:1})])])]),e("div",rt,[e("div",ut,s(t.$t("selectTransferType")),1),e("div",dt,[(r(!0),f(E,null,te($.value,i=>(r(),j(o,{key:i.value,class:Me(["btn btn-select-type",{"btn-gradient":i.value==T.value}]),onClick:de=>T.value=i.value},{default:B(()=>[M(s(t.$t(i.name)),1)]),_:2},1032,["class","onClick"]))),128))])]),T.value==0?(r(),f(E,{key:0},[e("div",ct,[e("div",mt,[e("div",null,s(t.$t("receivingAddress1")),1),e("div",{class:"clear",onClick:Le},[g(L,{name:"clear"}),e("div",null,s(t.$t("clear")),1)])]),e("div",vt,[g(st,{ref_key:"childInputAddressList",ref:y,isCustom:h.value,addressList:v.value,onIptChange:Y},null,8,["isCustom","addressList"]),e("div",ft,[e("div",null,s(t.$t("copyAddressTips1")),1),e("div",null,s(t.$t("copyAddressTips2")),1),e("div",null,s(t.$t("copyAddressTips3")),1)])])]),e("div",_t,[e("div",pt,s(t.$t("distributionRules"))+"：",1),e("div",ht,[h.value?(r(),j(G,{key:0,"model-value":0},{default:B(()=>[g(W,{label:0},{default:B(()=>[M(s(t.$t("customAmount")),1)]),_:1})]),_:1})):(r(),j(G,{key:1,modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=i=>p.value=i)},{default:B(()=>[(r(!0),f(E,null,te(u.value,i=>(r(),j(W,{key:i.value,label:i.value},{default:B(()=>[M(s(t.$t(i.name)),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]))])]),h.value?(r(),f("div",gt,[e("div",kt,s(t.$t("totalQuantity")),1),e("div",yt,[g(N,{class:"ipt",modelValue:ve.value,"onUpdate:modelValue":l[1]||(l[1]=i=>ve.value=i),type:"number",disabled:""},null,8,["modelValue"])])])):(r(),f(E,{key:1},[p.value==0?(r(),f("div",At,[e("div",$t,s(t.$t("totalQuantity")),1),e("div",Ct,[g(N,{class:"ipt",modelValue:U.value,"onUpdate:modelValue":l[2]||(l[2]=i=>U.value=i),type:"number"},null,8,["modelValue"])])])):(r(),f("div",wt,[e("div",bt,s(t.$t("distributionAmount")),1),e("div",St,[g(N,{class:"ipt",modelValue:O.value,"onUpdate:modelValue":l[3]||(l[3]=i=>O.value=i),type:"number"},null,8,["modelValue"])])]))],64))],64)):(r(),f(E,{key:1},[e("div",Lt,[e("div",Tt,s(t.$t("inputAddressNum")),1),e("div",Vt,[g(N,{class:"ipt",placeholder:t.$t("maximum"),modelValue:Z.value,"onUpdate:modelValue":l[4]||(l[4]=i=>Z.value=i),type:"number",formatter:Se},null,8,["placeholder","modelValue"])])]),e("div",Bt,[e("div",It,s(t.$t("inputAmountPerAddress")),1),e("div",Et,[g(N,{class:"ipt",modelValue:ee.value,"onUpdate:modelValue":l[5]||(l[5]=i=>ee.value=i),type:"number"},null,8,["modelValue"])])])],64)),e("div",Nt,[e("div",Rt,[C.value?(r(),j(o,{key:0,class:"btn btn-gradient",onClick:X,loading:V.value},{default:B(()=>[M(s(t.$t("approve")),1)]),_:1},8,["loading"])):(r(),j(o,{key:1,class:"btn btn-gradient",onClick:Ce,loading:q.value},{default:B(()=>[M(s(t.$t("oneClickTransfer")),1)]),_:1},8,["loading"]))])])],64)):S.value==1?(r(),f(E,{key:1},[e("div",Ft,[e("div",Dt,[e("div",Mt,s(w.value.length),1),e("div",Ot,s(t.$t("addressCount")),1)]),e("div",Ut,[e("div",Wt,s(`${ie.value} ${a.value.symbol}`),1),e("div",Gt,s(t.$t("realTotalPayment")),1)]),e("div",Pt,[e("div",jt,s(`${re.value} ${a.value.symbol}`),1),e("div",qt,s(t.$t("totalAmountOfReceived")),1)]),e("div",xt,[e("div",zt,s(`${a.value.amount} ${a.value.symbol}`),1),e("div",Ht,s(t.$t("tokenBalance")),1)]),e("div",Qt,[e("div",Kt,s(`${ae.value} ${z(_).nativeCurrencySymbol}`),1),e("div",Jt,s(t.$t("estimatedGas")),1)]),e("div",Xt,[e("div",Yt,s(`${oe.value} ${z(_).nativeCurrencySymbol}`),1),e("div",Zt,s(t.$t("serviceFee")),1)])]),e("div",es,[e("div",ts,s(t.$t("receivingAddress1")),1),e("div",ss,[e("table",ls,[e("tr",null,[e("th",null,s(t.$t("walletAddress")),1),e("th",null,s(t.$t("amount")),1),e("th",null,s(t.$t("operate")),1)]),(r(!0),f(E,null,te(w.value,(i,de)=>(r(),f("tr",{key:de},[e("td",as,s(i.address),1),e("td",null,s(`${i.amountString} ${a.value.symbol}`),1),e("td",null,[g(o,{type:"danger",plain:"",class:"btn-remove",onClick:ds=>we(de)},{default:B(()=>[M(s(t.$t("remove")),1)]),_:2},1032,["onClick"])])]))),128))])])]),$e.value?(r(),j(K,{key:0,title:t.$t("notEnoughFee",{nativeCurrencySymbol:z(_).nativeCurrencySymbol,nativeCurrencyBalance:ue.value,totalServiceFee:fe.value}),type:"error","show-icon":""},null,8,["title"])):_e("",!0),e("div",os,[e("div",ns,[g(o,{class:"btn",onClick:l[6]||(l[6]=i=>S.value=0)},{default:B(()=>[M(s(t.$t("previousStep")),1)]),_:1}),g(o,{class:"btn btn-gradient",onClick:be},{default:B(()=>[M(s(t.$t("confirm")),1)]),_:1})])])],64)):S.value==2?(r(),f("div",is,[g(L,{name:"createSuccess"}),e("div",rs,s(t.$t("transferResultSuccess1")),1),g(o,{onClick:l[7]||(l[7]=i=>z(H).push("/transfer/history"))},{default:B(()=>[M(s(t.$t("transferResultSuccess2")),1)]),_:1})])):_e("",!0)]),g(P,{modelValue:x.value,"onUpdate:modelValue":l[9]||(l[9]=i=>x.value=i),title:t.$t("selectToken"),class:"dlg dlg-select-token","destroy-on-close":""},{default:B(()=>[g(Je,{onSelect:l[8]||(l[8]=i=>le(i))})]),_:1},8,["modelValue","title"])],64)}}},gs=me(us,[["__scopeId","data-v-6dec878a"]]);export{gs as default};
