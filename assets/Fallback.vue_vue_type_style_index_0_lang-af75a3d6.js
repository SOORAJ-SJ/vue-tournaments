import{d as f,_ as h,o as u,c as _,a as s,k as o,t as c,F as p,g as t,i as y,u as v,r as m,f as g,w as d}from"./index-6aafd958.js";import{S as n,g as x,a as w,f as $}from"./Loader-61905839.js";const U=f("schedules",{state:()=>({error:null,schedules:null,status:n.PENDING}),getters:{getSchedules:e=>e.schedules.values,getSheduleStatus:e=>e.status},actions:{async fetchSchedules(){try{this.status=n.LOADING;const e=await x("schedules!A:F");this.status=n.SUCCESS,this.schedules=e.data}catch(e){this.status=n.ERROR,this.error=e.response.data.error}}}});const D={class:"d-flex justify-content-center align-items-center position-relative schedule-wrapper"},T={class:"p-2 w-50 text-end"},k={class:"score"},B={class:"flex-shrink-1 mx-2 border p-2"},A={class:"p-2 w-50 text-start"},E={class:"score"},N={class:"schedule text-center"},R={__name:"Schedule",props:["schedule"],setup(e){return(a,i)=>(u(),_(p,null,[s("div",D,[s("div",T,[o(a.$slots,"player1",{},()=>[t("Player 1")],!0),s("div",k,[o(a.$slots,"playerOneScore",{},()=>[t("TBA")],!0)])]),s("div",B,[o(a.$slots,"time",{},void 0,!0)]),s("div",A,[o(a.$slots,"player2",{},()=>[t("Player 1")],!0),s("div",E,[o(a.$slots,"playerTwoScore",{class:"score"},()=>[t("TBA")],!0)])])]),s("div",N,c(e.schedule),1)],64))}},F=h(R,[["__scopeId","data-v-2374f65d"]]);const I={class:"card mt-2 shadow-sm p-2"},O={class:"card-body"},b={class:"card-title schedule-date"},C={__name:"Schedules",props:["date","matches"],setup(e){const a=e,i=y(()=>{let l=w(a.date);return l==0||l==1?$(l):a.date});return(l,P)=>(u(),_("div",I,[s("div",O,[s("h5",b,c(v(i)),1),(u(!0),_(p,null,m(e.matches,(r,S)=>(u(),g(F,{key:S},{player1:d(()=>[t(c(r[0]),1)]),playerOneScore:d(()=>[t(c(r[3]),1)]),time:d(()=>[t(c(r[2]),1)]),player2:d(()=>[t(c(r[1]),1)]),playerTwoScore:d(()=>[t(c(r[4]),1)]),_:2},1024))),128))])]))}},V=h(C,[["__scopeId","data-v-7dad7ef9"]]);export{V as S,U as s};