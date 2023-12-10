import{_ as de}from"./noData-cd778682.js";import{T as K}from"./TokenIcon-cbe2b73b.js";import{T as W}from"./TokenName-eccc3a6e.js";import{C as Q}from"./CopyText-d5365b17.js";import{_ as me,a as pe,b as fe}from"./Index-f01a1277.js";import{a1 as Le,_ as ye,u as we,i as Te,d as he,a as ge,j as N,v as ve,w as be,e as I,K as _e,o as d,c as _,f as V,h as T,x as f,F as P,g as G,l,y as S,z as g,t as h,L as Ce,A as y,C as Ie,b as L,E as J,M as U,B as X,q as F,m as Z,n as Ve,p as ee,a8 as j,a9 as Se}from"./index-57098d62.js";import{e as Ae}from"./ethers-2decee09.js";import{f as Y}from"./units-ee695882.js";/* empty css                                                          */import"./DoubleToken-1dbde041.js";/* empty css                                                            *//* empty css                                                          */import"./OperateSuccessDialog-2e8da936.js";import"./SelectLockDate-ac958154.js";/* empty css                                                                */import"./wallet-d0bc25c3.js";const De=Le("list",{state:()=>({lockType:0,tokenType:null,pageSize:5,lockList:[{name:"allLock",pageNumber:1,list:[],loading:!1},{name:"myLock",pageNumber:1,list:[],loading:!1}],searchLockList:{list:[],loading:!1}}),actions:{}});const Ne={class:"lock-master"},$e={key:1,class:"error"},Ee={class:"option"},Ue={class:"operate"},Fe={key:0,class:"tab"},ze=["onClick"],Re={key:0,class:"empty"},xe=["fit"],Ye={class:"info"},Be={key:1,class:"list"},Me={class:"unlock-date"},Pe={key:0,class:"pagination"},je={__name:"Index",setup(qe){const c=we(),e=De(),{t:q}=Te(),oe=he(),H=ge(),A=N(""),$=N(0),v=N(!1),B=ve(()=>Ie.chainList.filter(o=>!!o.lock&&o.isTestChain==c.isTestChain));async function te(o){if(console.log(o),o!=c.chainId)try{let n=B.value.find(t=>t.chainId==o);await L.wallet.metamask.switchNetwork(n)}catch(n){const t=L.wallet.metamask.parseError(n);J.error(q(t))}}const u=N(null),z=N(!1),R=N(!1),x=N(!1);function le(){H.push("/lock/create/token"),console.dir(e)}async function O(){if(v.value=!1,!A.value){e.searchLockList.list=[];return}if(!/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(A.value)){e.searchLockList.list=[];return}let t=e.tokenType;v.value=!0,e.searchLockList.loading=!0;try{let k,s,r,i,m=[];if(t=="lpTokenV3")k=await L.wallet.metamask.contractTokenLockV3(c.lock.tokenLockV3Address),i=await k.getLocksForToken(A.value,0n,10000n);else{if(k=await L.wallet.metamask.contractTokenLockV2(c.lock.tokenLockV2Address),s=await k.cumulativeLockInfo(A.value),r="0x0000000000000000000000000000000000000000",s.token==r)throw"tokenErr";if(s.factory==r&&t!=="token"||s.factory!==r&&t!=="lpToken")throw"typeErr";i=await k.getLocksForToken(s.token,0n,10000n),console.log(i)}for(let p of i){let w;t=="token"&&s.factory==r?w=await b(p,0):t=="lpToken"&&s.factory!==r?w=await b(p,1):t=="lpTokenV3"&&(w=await b(p,2)),m.push(w)}if(e.tokenType!==t)throw"tokenTypeErr";e.searchLockList.list=m}catch(k){e.searchLockList.list=[],console.log(k)}finally{e.searchLockList.loading=!1}}function ae(o){(v.value?e.searchLockList.loading:e.lockList[e.lockType].loading)||(e.lockType=o,e.lockList[e.lockType].list.length==0&&E())}be(()=>{var o;return(o=oe.params)==null?void 0:o.tokenType},o=>{v.value=!1,A.value="",e.tokenType=o,e.lockType=0,$.value=0;for(let n in e.lockList)e.lockList[n].pageNumber=1,e.lockList[n].list=[],e.lockList[n].loading=!1;console.log(e.lockList),E()},{immediate:!0});function ne(o){console.log(o);let n="";e.tokenType=="token"?n="/lock/detail/token/"+o.id:e.tokenType=="lpToken"?n="/lock/detail/lpToken/"+o.id:e.tokenType=="lpTokenV3"&&(n="/lock/detail/lpTokenV3/"+o.id),H.push(n)}async function E(){e.lockType==0?await ie():await ce()}function se(){E()}async function ie(){let o=e.tokenType;e.lockList[e.lockType].loading=!0;let n=(e.lockList[e.lockType].pageNumber-1)*e.pageSize,t=(e.lockList[e.lockType].pageNumber-1)*e.pageSize+e.pageSize-1;try{let k,s,r=[];if(o=="token"){s=await L.wallet.metamask.contractTokenLockV2(c.lock.tokenLockV2Address);let i=await s.allNormalTokenLockedCount();if(console.log(i),console.log(Number(i)),i==0n)throw"err";$.value=Number(i),k=await s.getCumulativeNormalTokenLockInfo(n,t);for(let m of k)r.push(s.getLocksForToken(m.token,0n,10000n))}else if(o=="lpToken"){s=await L.wallet.metamask.contractTokenLockV2(c.lock.tokenLockV2Address);let i=await s.allLpTokenLockedCount();if(i==0n)throw"err";$.value=Number(i),k=await s.getCumulativeLpTokenLockInfo(n,t);for(let m of k)r.push(s.getLocksForToken(m.token,0n,10000n))}else if(o=="lpTokenV3"){s=await L.wallet.metamask.contractTokenLockV3(c.lock.tokenLockV3Address);let i=await s.allTokenLockedCount();if(i==0n)throw"err";$.value=Number(i),k=await s.getAllTokenLockInfo(n,t);for(let m of k)r.push(m)}Promise.all(r).then(i=>{let m=[];if(console.log("resLockTokenArr",i),o=="lpTokenV3")for(let p of i)m.push(b(p,2));else for(let p of i)for(let w of p)o=="token"?m.push(b(w,0)):o=="lpToken"&&m.push(b(w,1));Promise.all(m).then(p=>{if(console.log("resTokenLockList",p),e.tokenType!==o)throw"tokenTypeErr";e.lockList[e.lockType].list=p}).catch(p=>{throw p}).finally(p=>{e.lockList[e.lockType].loading=!1})}).catch(i=>{throw i})}catch{e.lockList[e.lockType].loading=!1}}async function ce(){if(!c.isConnecting){J.error(q("pleaseConnectWallet"));return}let o=e.tokenType;e.lockList[e.lockType].loading=!0;try{let n,t;o=="lpTokenV3"?(t=await L.wallet.metamask.contractTokenLockV3(c.lock.tokenLockV3Address),n=await t.locksForUser(c.walletAddress)):(t=await L.wallet.metamask.contractTokenLockV2(c.lock.tokenLockV2Address),o=="token"?n=await t.normalLocksForUser(c.walletAddress):o=="lpToken"&&(n=await t.lpLocksForUser(c.walletAddress))),console.log(n),e.lockList[e.lockType].list=[];let k=[];for(let s of n){let r;o=="token"?r=await b(s,0):o=="lpToken"?r=await b(s,1):o=="lpTokenV3"&&(r=await b(s,2)),k.push(r),e.lockList[e.lockType].list.push(r)}if(e.tokenType!==o)throw"tokenTypeErr";e.lockList[e.lockType].list=k}catch(n){console.log(n)}finally{e.lockList[e.lockType].loading=!1}}async function b(o,n){let t={};if(t.id=o.id,t.tokenAddress=o.token.toLowerCase(),t.owner=o.owner.toLowerCase(),t.lockDate=U.unix(X(Number(o.lockDate))).format("YYYY-MM-DD HH:mm:ss"),t.unlockDate=U.unix(X(Number(o.tgeDate))).format("YYYY-MM-DD HH:mm:ss"),n==0){let k=await L.wallet.metamask.contractERC20(o.token);t.tokenList=[],t.tokenSymbol=await k.symbol(),t.tokenIcon=F(c.chain,o.token.toLowerCase());const s=await k.decimals();t.decimals=s,t.amount=Y(o.amount,s),t.unlockedAmount=Y(o.unlockedAmount,s)}else if(n==1){let k=await L.wallet.metamask.contractLP(o.token),s=await k.token0(),i=await(await L.wallet.metamask.contractERC20(s)).symbol(),m=await k.token1(),w=await(await L.wallet.metamask.contractERC20(m)).symbol();t.tokenList=[],t.tokenList[0]={symbol:i.toUpperCase(),address:s.toLowerCase(),amount:0},t.tokenList[1]={symbol:w.toUpperCase(),address:m.toLowerCase(),amount:0},t.tokenSymbol=i+"/"+w,t.tokenIcon0=F(c.chain,s.toLowerCase()),t.tokenIcon1=F(c.chain,m.toLowerCase());const C=await k.decimals();t.decimals=C,t.amount=Y(o.amount,C),t.unlockedAmount=Y(o.unlockedAmount.toString(),C)}else if(n==2){console.log(o.id),t.tokenId=o.tokenId;let s=await(await L.wallet.metamask.contractNFT(o.token)).positions(t.tokenId);console.log(s.token0);let r=s.token0,m=await(await L.wallet.metamask.contractERC20(r)).symbol(),p=s.token1,C=await(await L.wallet.metamask.contractERC20(p)).symbol();t.tokenList=[],t.tokenList[0]={symbol:m.toUpperCase(),address:r.toLowerCase(),amount:0},t.tokenList[1]={symbol:C.toUpperCase(),address:p.toLowerCase(),amount:0},t.tokenSymbol=m+"/"+C,t.tokenIcon0=F(c.chain,r.toLowerCase()),t.tokenIcon1=F(c.chain,p.toLowerCase()),t.liquidity=s.liquidity}return t}function ke(o){u.value=o,z.value=!0}function re(o){u.value=o,R.value=!0}function ue(o){u.value=o,x.value=!0}function M(){O(),E()}return(o,n)=>{const t=I("el-option"),k=I("el-select"),s=I("el-input"),r=I("el-button"),i=I("el-table-column"),m=I("el-tag"),p=I("el-table"),w=I("el-pagination"),C=_e("loading");return d(),_(P,null,[V("div",Ne,[T(s,{modelValue:A.value,"onUpdate:modelValue":n[0]||(n[0]=a=>A.value=a),placeholder:o.$t("tokenLPToken"),onInput:O,class:"input-with-select",clearable:""},{prepend:f(()=>[T(k,{class:"select-chain","model-value":l(c).chainId?l(c).chainId:" ",onChange:te},{prefix:f(()=>[l(c).isConnecting&&l(c).chain&&B.value.some(a=>a.chainId==l(c).chainId)?(d(),y(K,{key:0,class:"token-icon",bigIcon:l(Z)(l(c).chain)},null,8,["bigIcon"])):(d(),_("span",$e,"ERROR"))]),default:f(()=>[(d(!0),_(P,null,G(B.value,a=>(d(),y(t,{key:a.chainId,label:a.chainShow,value:a.chainId},{default:f(()=>[V("div",Ee,[T(K,{class:"token-icon",bigIcon:l(Z)(a.chain.toLowerCase())},null,8,["bigIcon"]),V("span",null,h(a.chainShow),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["model-value"])]),_:1},8,["modelValue","placeholder"]),V("div",Ue,[v.value?S("",!0):(d(),_("ul",Fe,[(d(!0),_(P,null,G(l(e).lockList,(a,D)=>(d(),_("li",{class:Ve({"tab-item-selected":l(e).lockType==D}),key:D,onClick:()=>ae(D)},h(o.$t(a.name)),11,ze))),128))])),T(r,{type:"primary",class:"btn-gradient lock",onClick:le},{default:f(()=>[g(h(o.$t("oneKeyLock")),1)]),_:1})]),v.value&&l(e).searchLockList.list.length==0&&!l(e).searchLockList.loading||l(e).lockList[l(e).lockType].list.length==0&&!l(e).lockList[l(e).lockType].loading?(d(),_("div",Re,[V("img",{style:{width:"80px"},src:de,fit:o.fit},null,8,xe),V("div",Ye,[g(h(o.$t("noLockToken"))+"，",1),V("span",{onClick:E,style:{color:"#409eff",cursor:"pointer"}},h(o.$t("refresh")),1)])])):(d(),_("div",Be,[Ce((d(),y(p,{class:"table-mine",data:v.value?l(e).searchLockList.list:l(e).lockList[l(e).lockType].list},{default:f(()=>[T(i,{label:o.$t("tokenName"),width:"180"},{default:f(a=>[l(e).tokenType=="token"?(d(),y(W,{key:0,class:"token-name",name:a.row.tokenSymbol,bigIcon:a.row.tokenIcon},null,8,["name","bigIcon"])):(d(),y(W,{key:1,class:"token-name",name:a.row.tokenSymbol,token1:a.row.tokenIcon0,token2:a.row.tokenIcon1},null,8,["name","token1","token2"]))]),_:1},8,["label"]),T(i,{label:o.$t("contractAddress"),width:"140"},{default:f(a=>[T(Q,{text:a.row.tokenAddress,smallText:l(ee)(a.row.tokenAddress)},null,8,["text","smallText"])]),_:1},8,["label"]),l(e).tokenType=="lpTokenV3"?(d(),y(i,{key:0,prop:"amount",label:o.$t("lockNumber"),width:"180"},{default:f(a=>[g(h(l(Ae).formatEther(a.row.liquidity.toString())),1)]),_:1},8,["label"])):(d(),y(i,{key:1,prop:"amount",label:o.$t("lockNumber"),width:"180"},null,8,["label"])),T(i,{prop:"unlockDate",label:o.$t("unlockTime2")},{default:f(a=>[V("div",Me,[g(h(a.row.unlockDate)+" ",1),l(j)(a.row.unlockDate)?(d(),y(m,{key:0,class:"over-time tag",size:"small",type:"info"},{default:f(()=>[g(h(o.$t("expired")),1)]),_:1})):(d(),y(m,{key:1,class:"progress tag",size:"small",type:"info"},{default:f(()=>[g(h(o.$t("dayLeft",{day:l(Se)(a.row.unlockDate)})),1)]),_:2},1024))])]),_:1},8,["label"]),T(i,{prop:"address",label:o.$t("lockUser"),width:"150"},{default:f(a=>[T(Q,{text:a.row.owner,smallText:l(ee)(a.row.owner)},null,8,["text","smallText"])]),_:1},8,["label"]),T(i,{prop:"address",label:o.$t("operate"),width:"220"},{default:f(a=>[T(r,{key:"primary",type:"primary",onClick:D=>ne(a.row),link:""},{default:f(()=>[g(h(o.$t("view")),1)]),_:2},1032,["onClick"]),l(j)(a.row.unlockDate)&&a.row.owner.toLowerCase()==l(c).walletAddress?(d(),y(r,{key:"primary",type:"primary",onClick:D=>ke(a.row),link:""},{default:f(()=>[g(h(o.$t("withdraw")),1)]),_:2},1032,["onClick"])):S("",!0),!l(j)(a.row.unlockDate)&&a.row.owner.toLowerCase()==l(c).walletAddress?(d(),y(r,{key:"primary",type:"primary",onClick:D=>re(a.row),link:""},{default:f(()=>[g(h(o.$t("edit")),1)]),_:2},1032,["onClick"])):S("",!0),a.row.owner.toLowerCase()==l(c).walletAddress?(d(),y(r,{key:"primary",type:"primary",onClick:D=>ue(a.row),link:""},{default:f(()=>[g(h(o.$t("transfer")),1)]),_:2},1032,["onClick"])):S("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[C,v.value?l(e).searchLockList.loading:l(e).lockList[l(e).lockType].loading]]),!v.value&&l(e).lockType==0?(d(),_("div",Pe,[T(w,{background:"",layout:"prev, pager, next",total:$.value,onCurrentChange:se,"page-size":l(e).pageSize,"current-page":l(e).lockList[l(e).lockType].pageNumber,"onUpdate:currentPage":n[1]||(n[1]=a=>l(e).lockList[l(e).lockType].pageNumber=a)},null,8,["total","page-size","current-page"])])):S("",!0)]))]),z.value?(d(),y(me,{key:0,onOperateSuccess:M,modelValue:z.value,"onUpdate:modelValue":n[2]||(n[2]=a=>z.value=a),lockId:u.value.id,isLockV2:l(e).tokenType!=="lpTokenV3",isLpToken:l(e).tokenType!=="token",unlockDate:l(U)(u.value.unlockDate).unix(),tokenList:u.value.tokenList,symbol:u.value.tokenSymbol,address:u.value.tokenAddress,amountString:u.value.amount,chain:l(c).chain,decimals:u.value.decimals},null,8,["modelValue","lockId","isLockV2","isLpToken","unlockDate","tokenList","symbol","address","amountString","chain","decimals"])):S("",!0),x.value?(d(),y(pe,{key:1,onOperateSuccess:M,modelValue:x.value,"onUpdate:modelValue":n[3]||(n[3]=a=>x.value=a),lockId:u.value.id,isLockV2:l(e).tokenType!=="lpTokenV3",isLpToken:l(e).tokenType!=="token",unlockDate:l(U)(u.value.unlockDate).unix(),tokenList:u.value.tokenList,symbol:u.value.tokenSymbol,address:u.value.tokenAddress,amountString:u.value.amount,chain:l(c).chain,decimals:u.value.decimals},null,8,["modelValue","lockId","isLockV2","isLpToken","unlockDate","tokenList","symbol","address","amountString","chain","decimals"])):S("",!0),R.value?(d(),y(fe,{key:2,onOperateSuccess:M,modelValue:R.value,"onUpdate:modelValue":n[4]||(n[4]=a=>R.value=a),lockId:u.value.id,isLockV2:l(e).tokenType!=="lpTokenV3",isLpToken:l(e).tokenType!=="token",unlockDate:l(U)(u.value.unlockDate).unix(),tokenList:u.value.tokenList,symbol:u.value.tokenSymbol,address:u.value.tokenAddress,amountString:u.value.amount,chain:l(c).chain,decimals:u.value.decimals},null,8,["modelValue","lockId","isLockV2","isLpToken","unlockDate","tokenList","symbol","address","amountString","chain","decimals"])):S("",!0)],64)}}},io=ye(je,[["__scopeId","data-v-f19ab06e"]]);export{io as default};
