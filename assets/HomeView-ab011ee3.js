import{_ as g,L as v}from"./Loader-73414159.js";import{o as t,c as s,a as e,n as f,F as c,r as d,t as u,b as x,s as y,d as S,e as L,S as h,u as o,f as b,g as m,h as N}from"./index-d2092d29.js";const k={class:"card shadow-sm px-1 pt-2 my-3 table-responsive"},z={class:"table table-bordered table-striped"},A={__name:"Table",props:["theme","headers","rows"],setup(r){return(n,_)=>(t(),s("div",k,[e("table",z,[e("thead",{class:f(`table-${r.theme}`)},[e("tr",null,[(t(!0),s(c,null,d(r.headers,l=>(t(),s("th",null,u(l),1))),256))])],2),e("tbody",null,[(t(!0),s(c,null,d(r.rows,l=>(t(),s("tr",null,[(t(!0),s(c,null,d(l,a=>(t(),s("td",null,u(a),1))),256))]))),256))])])]))}},$=g(A,[["__scopeId","data-v-3b94675a"]]),M={class:"accordion",id:"accordionExample"},P={class:"accordion-item"},T=x('<h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg><span class="ms-2">Legend</span></button></h2>',1),O={id:"collapseOne",class:"accordion-collapse collapse","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},B={class:"accordion-body"},D={class:"row justify-content-evenly"},E={class:"col-12 mb-1 col-md-5 mb-md-2 border"},C={class:"d-flex p-1"},V={class:"w-25"},G={__name:"Legend",setup(r){const n=[{title:"P",expanstion:"Matches Played"},{title:"W",expanstion:"No of wins"},{title:"D",expanstion:"No of draws"},{title:"L",expanstion:"No of loses"},{title:"SW",expanstion:"Sets win"},{title:"SL",expanstion:"Sets lose"},{title:"SD",expanstion:"Set difference"},{title:"PF",expanstion:"Points forwarded"},{title:"PA",expanstion:"Points accepted"},{title:"PD",expanstion:"Total point difference"}];return(_,l)=>(t(),s("div",M,[e("div",P,[T,e("div",O,[e("div",B,[e("div",D,[(t(),s(c,null,d(n,a=>e("div",E,[e("div",C,[e("span",V,u(a.title),1),e("span",null,u(a.expanstion),1)])])),64))])])])])]))}},I=e("div",null,[m(" Oops!!! Something went wrong while getting the results "),e("p",{class:"lead mb-0"},[m(" Tap to retry "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-clockwise",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),e("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})])])],-1),R=[I],F={key:2},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-repeat",viewBox:"0 0 16 16"},[e("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),e("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),q={__name:"HomeView",setup(r){const n=y(),_=["primary","warning","dark","success"],{getScores:l,getStatus:a}=S(n);return L(async()=>{a.value==h.PENDING&&await n.fetchScores()}),(j,p)=>(t(),s("main",null,[o(a)===o(h).LOADING||o(a)===o(h).PENDING?(t(),b(v,{key:0})):o(a)===o(h).ERROR?(t(),s("div",{key:1,onClick:p[0]||(p[0]=i=>o(n).fetchScores()),class:"alert alert-danger d-flex align-items-center h5 mt-4 mb-2",role:"alert"},R)):(t(),s("div",F,[e("div",{class:"alert alert-secondary h2 mt-4 mb-2 d-flex align-items-center justify-content-between",role:"alert",onClick:p[1]||(p[1]=i=>o(n).fetchScores())},[m(" Group Standings "),H]),N(G,{class:"mt-3"}),(t(!0),s(c,null,d(o(l),(i,w)=>(t(),b($,{key:w,theme:_[w],headers:i.values[0],rows:i.values.slice(1,i.values.length)},null,8,["theme","headers","rows"]))),128))]))]))}};export{q as default};
