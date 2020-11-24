(this["webpackJsonpdm2799-project"]=this["webpackJsonpdm2799-project"]||[]).push([[0],{248:function(e,t,n){},412:function(e,t,n){},414:function(e,t,n){},804:function(e,t,n){},868:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(0),r=n.n(a),i=n(22),s=n.n(i),d=(n(412),n.p,n(8)),j=n(6),o={Design:["Designed visual structures","Created visual designs and aestethics","Designed visual mappings","Designed view transformations"],Programming:["Created webpage","Programmed front end","Programmed back end","Processed raw data"]},u=n(47),l=n.n(u),b=n(241),O=r.a.createContext();var h=function(e){var t=Object(a.useState)([]),n=Object(j.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)([]),o=Object(j.a)(s,2),u=o[0],h=o[1],m=Object(a.useState)(1),x=Object(j.a)(m,2),v=(x[0],x[1],{scheduled:r,reported:u,addScheduledTime:function(e){var t=e.map((function(e){return{hours:e.hours,task:e.task,quarters:4*e.hours}}));i(t)},addReportedTime:function(e){var t=e.map((function(e){var t=l()(e.startTime),n=l()(e.endTime),c=l.a.duration(n.diff(t)),a=Math.round(4*c.asHours());return e.quarters=a,e}));console.log(t),h([].concat(Object(d.a)(u),Object(d.a)(e)))},removeScheduledTime:function(e){var t=e.id;i(r.filter((function(e){return!(e.id===t)})))},removeReportedTime:function(e){var t=e.startTime,n=e.endTime,c=e.task,a=t<n?[t,n]:[n,t],s=Object(j.a)(a,2);t=s[0],n=s[1],i(r.filter((function(e){return e.startTime===t&&e.endTime===n&&e.task===c})))},getReportedTimesBasedOnTask:function(){var e=b.a(u,(function(e){return b.b(e,(function(e){return e.quarters}))}),(function(e){return e.task}));return console.log(e),e}});return Object(c.jsx)(O.Provider,{value:v,children:e.children})},m=(n(414),n(4)),x=n(1),v=n(871),f=n(50),p=n(872),g=(n(248),n(875)),k=function(e){var t=e.addTime,n=e.task,r=e.inputHours,i=Object(a.useState)(r),s=Object(j.a)(i,2),d=s[0],o=s[1];return Object(c.jsxs)("div",{className:"schedule-task-container",children:[Object(c.jsx)("div",{children:n}),Object(c.jsx)("div",{children:Object(c.jsx)(g.a,{onChange:function(e){o(e.target.value),t(n,e.target.value)},min:0,defaultValue:d,style:{width:"5rem"}})})]})},T=n(878),y=n(879),S=function(){var e=Object(a.useContext)(O).scheduled,t=Object(a.useState)(e),n=Object(j.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(Object.keys(o).reduce((function(e,t){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},t,!1))}),{})),u=Object(j.a)(s,2),l=u[0],b=u[1],h=function(e,t){var n=r.findIndex((function(t){return t.task===e}));if(console.log(n),n>=0){var c=Object(x.a)(Object(x.a)({},r[n]),{},{hours:t}),a=Object(d.a)(r);a[n]=c,i(a)}else{var s={hours:t,task:e};i([].concat(Object(d.a)(r),[s]))}},g=function(e,t){var n=t.find((function(t){return t.task===e}));return n?n.hours:0};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"schedule-container",children:[Object(c.jsx)("h3",{children:"Plan your learning for the week"}),Object(c.jsx)(O.Consumer,{children:function(e){var t=e.scheduled,n=e.addScheduledTime;e.removeScheduledTime;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object.keys(o).map((function(e){return Object(c.jsxs)("div",{className:"planner-container",children:[Object(c.jsxs)("div",{className:"category-name",onClick:function(){return b(Object(x.a)(Object(x.a)({},l),{},Object(m.a)({},e,!l[e])))},children:[Object(c.jsx)("h2",{children:e}),Object(c.jsx)("div",{children:l[e]?Object(c.jsx)(T.a,{}):Object(c.jsx)(y.a,{})})]}),l[e]&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"schedule-task-container",children:[Object(c.jsx)("span",{children:Object(c.jsx)("strong",{children:"Task"})}),Object(c.jsx)("span",{children:Object(c.jsx)("strong",{children:"Planned Time"})})]}),o[e].map((function(e){return Object(c.jsx)(k,{addTime:h,task:e,inputHours:g(e,t)})}))]}),Object(c.jsx)(v.a,{})]})})),Object(c.jsx)(f.a,{type:"primary",onClick:function(){return n(r)},children:"Save Planning"})]})})}})]}),Object(c.jsxs)("div",{className:"deliverables-container",children:[Object(c.jsx)("h3",{children:"Course assignments"}),Object(c.jsx)(p.a,{dataSource:[{key:"1",name:"Visualizing Group Matching",grade:"10%",type:"Individual",dueDate:"Jan 20"},{key:"2",name:"World values survey visualization",grade:"30%",type:"Individual",dueDate:"Jan 29"},{key:"3",name:"Project proposal",grade:"10%",type:"Group",dueDate:"Feb 8"},{key:"4",name:"Hello world demo",grade:"15%",type:"Group",dueDate:"Feb 14"}],columns:[{title:"Assignment",dataIndex:"name",key:"name"},{title:"Type",dataIndex:"type",key:"type"},{title:"Grade %",dataIndex:"grade",key:"grade"},{title:"Due date",dataIndex:"dueDate",key:"dueDate"}]})]})]})})},C=(n(525),function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O.Consumer,{children:function(e){var t=e.getReportedTimesBasedOnTask;return Object(c.jsx)(c.Fragment,{children:t()})}})})}),w=n(876),D=n(874),N=n(873),I=n(110),P=n(877),F=n(238),H=n(41),R=(n(804),N.a.RangePicker),z=(I.a.SubMenu,function(e){var t=e.onTreeChange,n=e.value;return Object(c.jsx)(P.a,{style:{width:"100%"},onChange:function(e){return t(e)},value:n,children:Object.keys(o).map((function(e){return Object(c.jsx)(F.TreeNode,{value:e,title:e,selectable:!1,children:o[e].map((function(e){return Object(c.jsx)(F.TreeNode,{value:e,title:e})}))})}))})}),B=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(new Date),s=Object(j.a)(i,2),o=s[0],u=s[1],b=Object(a.useState)([]),h=Object(j.a)(b,2),m=h[0],p=h[1],g=Object(a.useState)(0),k=Object(j.a)(g,2),T=k[0],y=k[1],S=Object(a.useContext)(O).reported,C=function(e){u(e.toDate()),r(!0)},N=function(){r(!1)},I=function(){r(!1)},P=function(e,t){var n=l()(t);return e.filter((function(e){return null===e.startTime||l()(e.startTime).isSame(n,"day")}))},F=function(e){var t=P([].concat(Object(d.a)(S),Object(d.a)(m)),e.toDate());return t.sort((function(e,t){return e.startTime-t.startTime})),Object(c.jsx)("ul",{className:"events",children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("div",{style:{display:"block",backgroundColor:"green",color:"white",marginBottom:"0.05rem",borderRadius:"5%",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:"".concat(l()(e.startTime).format("HH:mm"),": ").concat(e.task)})})}))})};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"calendar-container",children:[Object(c.jsx)("h3",{children:"This is where you report time worked"}),Object(c.jsx)(H.a,{when:m.length>0,message:"You have unsaved changes! Are you sure you want to leave?"}),Object(c.jsx)(O.Consumer,{children:function(e){var t=e.reported,a=e.addReportedTime;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{onSelect:C,dateCellRender:F}),Object(c.jsxs)(D.a,{visible:n,onCancel:I,onOk:N,children:[Object(c.jsx)("h2",{children:o.toLocaleDateString()}),P([].concat(Object(d.a)(t),Object(d.a)(m)),o).map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(R,{format:"HH:mm",style:{width:"100%"},onChange:function(t,n){return function(e,t,n){var c=m.findIndex((function(t){return t.id===e})),a=Object(x.a)(Object(x.a)({},m[c]),{},{startTime:t,endTime:n}),r=Object(d.a)(m);r[c]=a,p(r)}(e.id,t[0].toDate(),t[1].toDate())},value:e.startTime?[l()(e.startTime),l()(e.endTime)]:[null,null]}),Object(c.jsx)(z,{onTreeChange:function(t){return function(e,t){var n=m.findIndex((function(t){return t.id===e})),c=Object(x.a)(Object(x.a)({},m[n]),{},{task:t}),a=Object(d.a)(m);a[n]=c,p(a)}(e.id,t)},value:e.task}),Object(c.jsx)(v.a,{})]})})),Object(c.jsx)(f.a,{onClick:function(){return e=o,p([].concat(Object(d.a)(m),[{id:T+1,startTime:e,endTime:e}])),void y(T+1);var e},children:"Add task"})]}),Object(c.jsx)(f.a,{className:"fixed-button",type:"primary",onClick:function(){a(m),p([])},children:"Save report"})]})}})]})})},A=n(109);var G=function(){return Object(c.jsx)(A.a,{basename:"/",children:Object(c.jsx)(h,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("h2",{children:"Time reporter"}),Object(c.jsxs)(I.a,{mode:"inline",style:{height:"100%"},children:[Object(c.jsx)(I.a.Item,{children:Object(c.jsx)(A.b,{to:"/",children:"Home"})},"1"),Object(c.jsx)(I.a.Item,{children:Object(c.jsx)(A.b,{to:"/schedule",children:"Schedule"})}),Object(c.jsx)(I.a.Item,{children:Object(c.jsx)(A.b,{to:"/report",children:"Report time worked"})}),Object(c.jsx)(I.a.Item,{children:Object(c.jsx)(A.b,{to:"/viz",children:"Visualizations"})})]})]}),Object(c.jsx)("div",{className:"main-content",children:Object(c.jsxs)(H.d,{children:[Object(c.jsx)(H.b,{path:"/schedule",children:Object(c.jsx)(S,{})}),Object(c.jsx)(H.b,{path:"/viz",children:Object(c.jsx)(C,{})}),Object(c.jsx)(H.b,{path:"/report",children:Object(c.jsx)(B,{})}),Object(c.jsxs)(H.b,{path:"/",children:[Object(c.jsx)(S,{})," "]})]})})]})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,880)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),J()}},[[868,1,2]]]);
//# sourceMappingURL=main.9f4343cd.chunk.js.map