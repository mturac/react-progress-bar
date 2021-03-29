(this["webpackJsonp@ramonak/react-progress-bar-example"]=this["webpackJsonp@ramonak/react-progress-bar-example"]||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(3),i=(n(82),n(0)),c=n(75),l=n.n(c),o=n(5),s=function(e){var t=Object(i.useState)(null),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(i.useEffect)((function(){fetch("https://my-projects-dashboard.vercel.app/api/views/".concat(e),{mode:"no-cors"}).then((function(e){return e.json()})).then((function(e){c(e.totalViews)})).catch((function(e){return console.error(e.message)}))}),[e]),{views:a}},r=n(25),b=n(6),j=n(28),d=function(e){var t=Object(i.useState)(e),n=Object(o.a)(t,2),a=n[0],c=n[1],l=Object(i.useRef)(null),s=function(e){l.current&&!l.current.contains(e.target)&&c(!1)};return Object(i.useEffect)((function(){return document.addEventListener("click",s,!0),function(){document.removeEventListener("click",s,!0)}}),[]),{ref:l,isVisible:a,setIsVisible:c}},h=(n(195),function(e){var t=e.handleChange,n=e.handleBgChange,c=e.handleBaseBgChange,l=e.handleLabelColorChange,s=e.handleIsLabelVisibleChange,r=Object(i.useState)("#6a1b9a"),b=Object(o.a)(r,2),h=b[0],u=b[1],m=Object(i.useState)("#e0e0de"),p=Object(o.a)(m,2),O=p[0],g=p[1],x=Object(i.useState)("#e80909"),f=Object(o.a)(x,2),C=f[0],v=f[1],F=d(!1),V=d(!1),y=d(!1);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"completed",children:"completed"}),Object(a.jsx)("input",{name:"completed",id:"completed",type:"text",placeholder:"1-100",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("button",{onClick:function(){return F.setIsVisible(!0)},children:"Choose Bar Color"}),F.isVisible&&Object(a.jsx)("div",{ref:F.ref,style:{position:"absolute",marginTop:"30px"},children:Object(a.jsx)(j.a,{name:"barColor",color:h,onChangeComplete:function(e){u(e.hex),n(e.hex)}})}),Object(a.jsx)("input",{value:h,name:"bgcolor",type:"text",onChange:function(e){t(e),u(e.target.value)}})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"height",children:"height"}),Object(a.jsx)("input",{name:"height",id:"height",type:"text",placeholder:"20px",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"width",children:"width"}),Object(a.jsx)("input",{name:"width",id:"width",type:"text",placeholder:"100%",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"borderRadius",children:"border radius"}),Object(a.jsx)("input",{name:"borderRadius",id:"borderRadius",type:"text",placeholder:"50px",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"labelAlignment",children:"label alignment"}),Object(a.jsxs)("select",{name:"labelAlignment",defaultValue:"right",id:"labelAlignment",onChange:t,children:[Object(a.jsx)("option",{value:"left",children:"left"}),Object(a.jsx)("option",{value:"center",children:"center"}),Object(a.jsx)("option",{value:"right",children:"right"}),Object(a.jsx)("option",{value:"outside",children:"outside"})]})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("button",{onClick:function(){return y.setIsVisible(!0)},children:"Choose Label Color"}),y.isVisible&&Object(a.jsx)("div",{ref:y.ref,style:{position:"absolute",marginTop:"30px"},children:Object(a.jsx)(j.a,{name:"labelColor",color:C,onChangeComplete:function(e){v(e.hex),l(e.hex)}})}),Object(a.jsx)("input",{value:C,name:"labelColor",type:"text",onChange:function(e){t(e),g(e.target.value)}})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"labelSize",children:"label size"}),Object(a.jsx)("input",{name:"labelSize",id:"labelSize",type:"text",placeholder:"15px",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"isLabelVisible",children:"is label visible"}),Object(a.jsxs)("select",{name:"isLabelVisible",defaultValue:"true",id:"isLabelVisible",onChange:s,children:[Object(a.jsx)("option",{value:!0,children:"True"}),Object(a.jsx)("option",{value:!1,children:"False"})]})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("button",{onClick:function(){return V.setIsVisible(!0)},children:'Choose "non-completed" Bar Color'}),V.isVisible&&Object(a.jsx)("div",{ref:V.ref,style:{position:"absolute",marginTop:"30px"},children:Object(a.jsx)(j.a,{name:"baseBgColor",color:O,onChangeComplete:function(e){g(e.hex),c(e.hex)}})}),Object(a.jsx)("input",{value:O,name:"baseBgColor",type:"text",onChange:function(e){t(e),g(e.target.value)}})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"margin",children:"margin"}),Object(a.jsx)("input",{name:"margin",id:"margin",type:"text",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"padding",children:"padding"}),Object(a.jsx)("input",{name:"padding",id:"padding",type:"text",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"transitionDuration",children:"transition duration"}),Object(a.jsx)("input",{name:"transitionDuration",id:"transitionDuration",type:"text",onChange:t})]}),Object(a.jsxs)("div",{className:"param",children:[Object(a.jsx)("label",{htmlFor:"transitionTimingFunction",children:"transition timing function"}),Object(a.jsxs)("select",{name:"transitionTimingFunction",defaultValue:"right",id:"transitionTimingFunction",onChange:t,children:[Object(a.jsx)("option",{value:"ease-in-out",children:"ease-in-out"}),Object(a.jsx)("option",{value:"ease",children:"ease"}),Object(a.jsx)("option",{value:"linear",children:"linear"}),Object(a.jsx)("option",{value:"ease-in",children:"ease-in"}),Object(a.jsx)("option",{value:"ease-out",children:"ease-out"})]})]})]})}),u=n(27),m=n.n(u),p=(n(196),function(){var e={completed:50,bgcolor:"#6a1b9a",height:"20px",width:"100%",borderRadius:"50px",labelAlignment:"right",baseBgColor:"#e0e0de",labelColor:"#e80909",labelSize:"15px",margin:"",padding:"",isLabelVisible:!0,transitionDuration:"1s",transitionTimingFunction:"ease-in-out"},t=Object(i.useState)(e),n=Object(o.a)(t,2),c=n[0],l=n[1],s=Object(i.useState)(!1),j=Object(o.a)(s,2),d=j[0],u=j[1],p=Object(i.useState)(""),O=Object(o.a)(p,2),g=O[0],x=O[1],f=Object(i.useState)("Copy"),C=Object(o.a)(f,2),v=C[0],F=C[1],V=Object(i.useRef)(null),y=function(){l(e),u(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m.a,Object(b.a)({},c)),Object(a.jsx)(h,{handleChange:function(e){l(Object(b.a)(Object(b.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))},handleBgChange:function(e){l(Object(b.a)(Object(b.a)({},c),{},{bgcolor:e}))},handleBaseBgChange:function(e){l(Object(b.a)(Object(b.a)({},c),{},{baseBgColor:e}))},handleLabelColorChange:function(e){l(Object(b.a)(Object(b.a)({},c),{},{labelColor:e}))},handleIsLabelVisibleChange:function(e){l(Object(b.a)(Object(b.a)({},c),{},{isLabelVisible:"true"===e}))},handleReset:y}),Object(a.jsx)("button",{className:"reset-button",onClick:y,children:"RESET"}),Object(a.jsx)("button",{className:"code-button",onClick:function(){F("Copy"),u(!0);var e="<ProgressBar \n    completed={".concat(c.completed,"}\n    ").concat("#6a1b9a"===c.bgcolor?"":'bgcolor="'.concat(c.bgcolor,'"'),"\n    ").concat("20px"===c.height?"":'height="'.concat(c.height,'"'),"\n    ").concat("100%"===c.width?"":'width="'.concat(c.width,'"'),"\n    ").concat("50px"===c.borderRadius?"":'borderRadius="'.concat(c.borderRadius,'"'),"\n    ").concat("right"===c.labelAlignment?"":'labelAlignment="'.concat(c.labelAlignment,'"'),"\n    ").concat(c.isLabelVisible?"":"isLabelVisible={false}","\n    ").concat("#e0e0de"===c.baseBgColor?"":'baseBgColor="'.concat(c.baseBgColor,'"'),"\n    ").concat("#fff"===c.labelColor?"":'labelColor="'.concat(c.labelColor,'"'),"\n    ").concat("15px"===c.labelSize?"":'labelSize="'.concat(c.labelSize,'"'),"\n    ").concat(""===c.margin?"":'margin="'.concat(c.margin,'"'),"\n    ").concat(""===c.padding?"":'padding="'.concat(c.padding,'"'),"\n    ").concat("1s"===c.transitionDuration?"":'transitionDuration="'.concat(c.transitionDuration,'"'),"\n    ").concat("ease-in-out"===c.transitionTimingFunction?"":'transitionTimingFunction="'.concat(c.transitionTimingFunction,'"'),"\n    />").replace(/^\s*$(?:\r\n?|\n)/gm,"");x(e)},children:"Generate Component Code"}),Object(a.jsx)("div",{children:d&&Object(a.jsxs)("div",{className:"code-area",children:[Object(a.jsx)("button",{onClick:function(e){V.current.select(),document.execCommand("copy"),e.target.focus(),F("Copied!")},children:v}),Object(a.jsx)("textarea",{ref:V,value:g,onChange:function(e){return x(e.target.value)}})]})})]})}),O=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){setInterval((function(){return c(Math.floor(100*Math.random())+1)}),2e3)}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h3",{children:"Randomly generated completed value"}),Object(a.jsx)(m.a,{completed:n}),Object(a.jsx)("hr",{}),Object(a.jsx)("h3",{children:"Interactive Generator"}),Object(a.jsx)(p,{})]})},g=function(){return s(function(){var e=window.location.pathname;return"/"===e.charAt(0)&&(e=e.substring(1)),e}()),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(O,{})})};l.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))},82:function(e,t,n){}},[[197,1,2]]]);
//# sourceMappingURL=main.539d1136.chunk.js.map