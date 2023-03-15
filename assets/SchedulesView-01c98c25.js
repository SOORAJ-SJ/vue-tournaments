import{s as g,i as f,e as v,o as l,c as o,u as t,f as m,j as p,a as e,g as d,F as S,r as _}from"./index-6aafd958.js";import{S as i,L as x}from"./Loader-61905839.js";import{s as L,S as k}from"./Fallback.vue_vue_type_style_index_0_lang-af75a3d6.js";const b=e("div",null,[d(" Oops!!! Something went wrong while getting the schedules "),e("p",{class:"lead mb-0"},[d(" Tap to retry "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-clockwise",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"}),e("path",{d:"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"})])])],-1),z=[b],y=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-repeat",viewBox:"0 0 16 16"},[e("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),e("path",{"fill-rule":"evenodd",d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})],-1),A={key:0,class:"row"},M={class:"col col-md-6 col-lg-4"},C={key:1},N=e("div",{class:"alert alert-warning h4 mt-4 mb-2",role:"alert"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-exclamation-triangle",viewBox:"0 0 16 16"},[e("path",{d:"M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),e("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"})]),d(" Looks like there are no matches scheduled for now! ")],-1),B=[N],R={__name:"SchedulesView",setup(E){const n=L(),{getSheduleStatus:c,getSchedules:w}=g(n),u=f(()=>{let r=[];if(c.value===i.SUCCESS)for(let s of w.value.slice(1)){const a=r.findIndex(h=>h.date==s[0]);a>=0?r[a].matches.push(s.slice(1)):r.push({date:s[0],matches:[s.slice(1)]})}return r});return v(async()=>{c.value==i.PENDING&&await n.fetchSchedules()}),(r,s)=>(l(),o("main",null,[t(c)===t(i).LOADING||t(c)===t(i).PENDING?(l(),m(x,{key:0})):t(c)===t(i).ERROR?(l(),o("div",{key:1,onClick:s[0]||(s[0]=a=>t(n).fetchSchedules()),class:"alert alert-danger d-flex align-items-center h5 mt-4 mb-2",role:"alert"},z)):p("",!0),e("div",null,[e("div",null,[e("div",{class:"alert alert-secondary h2 mt-4 mb-2 d-flex align-items-center justify-content-between",role:"alert",onClick:s[1]||(s[1]=a=>t(n).fetchSchedules())},[d(" Schedules "),y]),t(u).length?(l(),o("div",A,[(l(!0),o(S,null,_(t(u).slice(12),(a,h)=>(l(),o("div",M,[(l(),m(k,{date:a.date,matches:a.matches,key:h},null,8,["date","matches"]))]))),256))])):(l(),o("div",C,B))])])]))}};export{R as default};