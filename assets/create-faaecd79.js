import{I as s,J as l}from"./index-18195021.js";const d=s("create",{state:()=>({step:0,deployerList:l.deployerList,deployerId:l.deployerList[0].deployerId,deployerName:l.deployerList[0].deployerName,owner:"",name:"",symbol:"",decimals:18,totalSupply:"",txHash:"",canMint:!1,token:null,chainSwap:null,buyFundFee:"0",buyBurnFee:"0",buyLPFee:"0",buyRewardFee:"0",sellFundFee:"0",sellBurnFee:"0",sellLPFee:"0",sellRewardFee:"0",fundAddress:"",rewardToken:"",killBlock:"",maxSwapAmount:"",maxWalletAmount:"",currencyIsEth:!1,enableManualStartTrade:!1,enableKillBlock:!1,enableSwapLimit:!1,enableWalletLimit:!1,enableChangeTax:!1,enableWhiteList:!1}),actions:{changeDeployer(a){const e=this.deployerList.find(r=>r.deployerId==a);e?(this.deployerId=e.deployerId,this.deployerName=e.deployerName):(this.deployerId=this.deployerList[0].deployerId,this.deployerName=this.deployerList[0].deployerName)}}});export{d as u};
