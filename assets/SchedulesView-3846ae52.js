import{_ as w,o as t,c as n,a as e,i as f,t as u,F as x,g as r,j as S,k as b,l as $,u as l,r as y,f as g,w as p,h as k,m as L,p as z,d as C,e as A,S as h,q as D}from"./index-23ee64a4.js";import{L as M}from"./Loader-e21c3b3a.js";const N={class:"d-flex justify-content-center align-items-center position-relative schedule-wrapper"},B={class:"p-2 w-50 text-end"},I={class:"flex-shrink-1 mx-2 border p-2"},T={class:"p-2 w-50 text-start"},E={class:"schedule text-center"},V={__name:"Schedule",props:["schedule"],setup(i){return(s,c)=>(t(),n(x,null,[e("div",N,[e("div",B,[f(s.$slots,"player1",{},()=>[r("Player 1")],!0)]),e("div",I,[f(s.$slots,"time",{},void 0,!0)]),e("div",T,[f(s.$slots,"player2",{},()=>[r("Player 1")],!0)])]),e("div",E,u(i.schedule),1)],64))}},R=w(V,[["__scopeId","data-v-043fccf3"]]);const j={class:"card mt-2 shadow-sm p-2"},F={class:"card-body"},G={class:"card-title schedule-date"},P={__name:"Schedules",props:["date","matches"],setup(i){const s=i,c=S(()=>{let _=b(s.date);return _==0||_==1?$(_):s.date});return(_,m)=>(t(),n("div",j,[e("div",F,[e("h5",G,u(l(c)),1),(t(!0),n(x,null,y(i.matches,(o,a)=>(t(),g(R,{key:a},{player1:p(()=>[r(u(o[0]),1)]),time:p(()=>[r(u(o[2]),1)]),player2:p(()=>[r(u(o[1]),1)]),_:2},1024))),128))])]))}},H=w(P,[["__scopeId","data-v-a6e6b336"]]),O="/vue-tournaments/assets/9233841_4120164-f659fb08.jpg";const U={},q={id:"fallback-wrapper"},J={class:"container p-4 text-center"},K=e("img",{src:O,alt:"this page is under development"},null,-1);function Q(i,s){const c=L("router-link");return t(),n("div",q,[e("div",J,[K,e("div",null,[k(c,{to:"/"},{default:p(()=>[r("<<Go Back")]),_:1})])])])}const W=w(U,[["render",Q]]),X=e("div",null,[r(" Oops!!! Something went wrong while getting the schedules "),e("p",{class:"lead mb-0"},[r(" Tap to retry "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-clockwise",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),e("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})])])],-1),Y=[X],Z=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-repeat",viewBox:"0 0 16 16"},[e("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),e("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),ee={key:0,class:"row"},te={class:"col col-md-6 col-lg-4"},se={key:1},ae=e("div",{class:"alert alert-warning h4 mt-4 mb-2",role:"alert"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-exclamation-triangle",viewBox:"0 0 16 16"},[e("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),e("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]),r(" Looks like there are no matches scheduled for now! ")],-1),le=[ae],ne={__name:"SchedulesView",setup(i){const s=z(),{getSheduleStatus:c,getSchedules:_}=C(s),m=S(()=>{let o=[];if(c.value===h.SUCCESS)for(let a of _.value.slice(1)){const d=o.findIndex(v=>v.date==a[0]);d>=0?o[d].matches.push(a.slice(1)):o.push({date:a[0],matches:[a.slice(1)]})}return console.log(o),o});return A(async()=>{c.value==h.PENDING&&await s.fetchSchedules()}),(o,a)=>(t(),n("main",null,[k(W),l(c)===l(h).LOADING||l(c)===l(h).PENDING?(t(),g(M,{key:0})):l(c)===l(h).ERROR?(t(),n("div",{key:1,onClick:a[0]||(a[0]=d=>l(s).fetchSchedules()),class:"alert alert-danger d-flex align-items-center h5 mt-4 mb-2",role:"alert"},Y)):D("",!0),e("div",null,[e("div",null,[e("div",{class:"alert alert-secondary h2 mt-4 mb-2 d-flex align-items-center justify-content-between",role:"alert",onClick:a[1]||(a[1]=d=>l(s).fetchSchedules())},[r(" Schedules "),Z]),l(m).length?(t(),n("div",ee,[(t(!0),n(x,null,y(l(m),(d,v)=>(t(),n("div",te,[(t(),g(H,{date:d.date,matches:d.matches,key:v},null,8,["date","matches"]))]))),256))])):(t(),n("div",se,le))])])]))}};export{ne as default};
