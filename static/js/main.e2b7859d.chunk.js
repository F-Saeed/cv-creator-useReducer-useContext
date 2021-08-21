(this["webpackJsonpcv-creator"]=this["webpackJsonpcv-creator"]||[]).push([[0],{18:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),i=c(15),r=c.n(i),o=c(4),j=c(20),s=c(12),d=c(1),l=c(11),u=c.n(l),b=function(e,t){switch(t.type){case"field":return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},t.field,t.payload));case"name":case"email":case"telephone":case"linkedin":case"github":return Object(d.a)(Object(d.a)({},e),{},{generalInfo:Object(d.a)(Object(d.a)({},e.generalInfo),t.payload)});case"schoolName":case"major":case"educationStart":case"educationEnd":return Object(d.a)(Object(d.a)({},e),{},{education:Object(d.a)(Object(d.a)({},e.education),t.payload)});case"eduSubmit":return Object(d.a)(Object(d.a)({},e),{},{educationData:[].concat(Object(s.a)(e.educationData),[Object(d.a)({id:u()()},e.education)]),education:Object(d.a)({},h.education)});case"eduDelete":return Object(d.a)(Object(d.a)({},e),{},{educationData:e.educationData.filter((function(e){return e.id!==t.payload}))});case"companyName":case"position":case"from":case"to":case"expDescr":return Object(d.a)(Object(d.a)({},e),{},{experience:Object(d.a)(Object(d.a)({},e.experience),t.payload)});case"expSubmit":return Object(d.a)(Object(d.a)({},e),{},{experienceData:[].concat(Object(s.a)(e.experienceData),[Object(d.a)({id:u()()},e.experience)]),experience:Object(d.a)({},h.experience)});case"expDelete":return Object(d.a)(Object(d.a)({},e),{},{experienceData:e.experienceData.filter((function(e){return e.id!==t.payload}))});case"projectName":case"institution":case"projectStart":case"projectEnd":case"projectDescr":return Object(d.a)(Object(d.a)({},e),{},{project:Object(d.a)(Object(d.a)({},e.project),t.payload)});case"projSubmit":return Object(d.a)(Object(d.a)({},e),{},{projectsData:[].concat(Object(s.a)(e.projectsData),[Object(d.a)({id:u()()},e.project)]),project:Object(d.a)({},h.project)});case"projDelete":return Object(d.a)(Object(d.a)({},e),{},{projectsData:e.projectsData.filter((function(e){return e.id!==t.payload}))});default:return e}},p=c(0),x=a.a.createContext(),h={generalInfo:{name:"",email:"",telephone:"",github:"",linkedin:""},education:{schoolName:"",major:"",educationStart:"",educationEnd:""},educationData:[],experience:{companyName:"",position:"",from:"",to:"",expDescr:""},experienceData:[],project:{projectName:"",institution:"",projectStart:"",projectEnd:"",projectDescr:""},projectsData:[]},O=function(e){var t=Object(n.useReducer)(b,h),c=Object(j.a)(t,2),a=c[0],i=c[1];return Object(p.jsx)(x.Provider,{value:{state:a,onGeneralInfoChange:function(e,t){"telephone"===t&&e.match(/^\d{0,14}$/)?i({type:t,field:t,payload:Object(o.a)({},t,e)}):"name"===t&&e.match(/^[a-zA-Z ]{0,25}$/)?i({type:t,field:t,payload:{name:e}}):"email"===t&&e.match(/^[A-Za-z@0-9.]{0,70}$/)?i({type:t,field:t,payload:Object(o.a)({},t,e)}):"github"!==t&&"linkedin"!==t||i({type:t,field:t,payload:Object(o.a)({},t,e)})},onEducationChange:function(e,t){("schoolName"!==t&&"major"!==t||!e.match(/^[a-zA-Z- ]{0,70}$/))&&("educationStart"!==t&&"educationEnd"!==t||!e.match(/^\d{0,4}$/))||i({type:t,field:t,payload:Object(o.a)({},t,e)})},onEduSubmit:function(e){e.preventDefault(),i({type:"eduSubmit"})},onExperienceChange:function(e,t){("companyName"!==t&&"position"!==t||!e.match(/^[a-zA-Z- ]{0,70}$/))&&("from"!==t&&"to"!==t||!e.match(/^\d{0,4}$/))?"expDescr"===t&&i({type:t,field:t,payload:Object(o.a)({},t,e)}):i({type:t,field:t,payload:Object(o.a)({},t,e)})},onExpSubmit:function(e){e.preventDefault(),i({type:"expSubmit"})},onDeleteEdu:function(e){i({type:"eduDelete",payload:e})},onDeleteExp:function(e){i({type:"expDelete",payload:e})},onProjectChange:function(e,t){("projectName"!==t&&"institution"!==t||!e.match(/^[a-zA-Z- ]{0,70}$/))&&("projectStart"!==t&&"projectEnd"!==t||!e.match(/^\d{0,4}$/))?"projectDescr"===t&&i({type:t,field:t,payload:Object(o.a)({},t,e)}):i({type:t,field:t,payload:Object(o.a)({},t,e)})},onProjSubmit:function(e){e.preventDefault(),i({type:"projSubmit"})},onDeleteProj:function(e){i({type:"projDelete",payload:e})}},children:e.children})},m=c(19),f=(c(9),function(e){var t=e.name,c=e.id,a=Object(n.useContext)(x),i=a.state,r=a.onGeneralInfoChange;return Object(p.jsxs)("div",{className:"general-input",children:[Object(p.jsxs)("h3",{children:[t,":"]}),Object(p.jsx)("input",{id:c,value:i.generalInfo[c],onChange:function(e){var t=e.target.value,c=e.target.id;r(t,c)}})]})}),v=(c(26),function(){return Object(p.jsxs)("section",{className:"general-info",children:[Object(p.jsx)(f,{name:"Name",id:"name"}),Object(p.jsx)(f,{name:"Email",id:"email"}),Object(p.jsx)(f,{name:"Phone Number",id:"telephone"}),Object(p.jsx)(f,{name:"LinkedIn",id:"linkedin"}),Object(p.jsx)(f,{name:"Github",id:"github"})]})}),g=(c(27),function(){var e=Object(n.useContext)(x),t=e.state,c=e.onEduSubmit,a=e.onEducationChange,i=function(e){var t=e.target.value,c=e.target.id;a(t,c)};return Object(p.jsxs)("section",{className:"education",children:[Object(p.jsx)("h2",{children:"Education"}),Object(p.jsxs)("form",{onSubmit:function(e){return c(e)},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"School Name:"}),Object(p.jsx)("input",{id:"schoolName",type:"text",value:t.education.schoolName,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Major:"}),Object(p.jsx)("input",{id:"major",type:"text",value:t.education.major,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Starting Year:"}),Object(p.jsx)("input",{id:"educationStart",type:"text",value:t.education.educationStart,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Graduation Year:"}),Object(p.jsx)("input",{id:"educationEnd",type:"text",value:t.education.educationEnd,onChange:i})]}),Object(p.jsx)("button",{type:"submit",children:"Add Education"})]})]})}),y=(c(18),function(){var e=Object(n.useContext)(x),t=e.state,c=e.onExpSubmit,a=e.onExperienceChange,i=function(e){var t=e.target.value,c=e.target.id;a(t,c)};return Object(p.jsxs)("section",{className:"experience",children:[Object(p.jsx)("h2",{children:"Work Experience"}),Object(p.jsxs)("form",{onSubmit:function(e){return c(e)},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Company Name:"}),Object(p.jsx)("input",{id:"companyName",type:"text",value:t.experience.companyName,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Position Title:"}),Object(p.jsx)("input",{id:"position",type:"text",value:t.experience.position,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"From:"}),Object(p.jsx)("input",{id:"from",type:"text",value:t.experience.from,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"To:"}),Object(p.jsx)("input",{id:"to",type:"text",value:t.experience.to,onChange:i})]}),Object(p.jsxs)("div",{className:"expDescr-div",children:[Object(p.jsx)("h3",{children:"Description:"}),Object(p.jsx)("textarea",{id:"expDescr",type:"text",rows:"5",cols:"50",value:t.experience.expDescr,onChange:i})]}),Object(p.jsx)("button",{type:"submit",children:"Add Experience"})]})]})}),D=function(){var e=Object(n.useContext)(x),t=e.state,c=e.onProjSubmit,a=e.onProjectChange,i=function(e){var t=e.target.value,c=e.target.id;a(t,c)};return Object(p.jsxs)("section",{className:"projects",children:[Object(p.jsx)("h2",{children:"Projects"}),Object(p.jsxs)("form",{onSubmit:function(e){return c(e)},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Project Name:"}),Object(p.jsx)("input",{id:"projectName",type:"text",value:t.project.projectName,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Institution:"}),Object(p.jsx)("input",{id:"institution",type:"text",value:t.project.institution,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Starting Year:"}),Object(p.jsx)("input",{id:"projectStart",type:"text",value:t.project.projectStart,onChange:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Ending Year:"}),Object(p.jsx)("input",{id:"projectEnd",type:"text",value:t.project.projectEnd,onChange:i})]}),Object(p.jsxs)("div",{className:"projectDescr-div",children:[Object(p.jsx)("h3",{children:"Description:"}),Object(p.jsx)("textarea",{id:"projectDescr",type:"text",rows:"5",cols:"50",value:t.project.projectDescr,onChange:i})]}),Object(p.jsx)("button",{type:"submit",children:"Add Project"})]})]})},N=c(5),C=c(6),E=c(16),S=(c(32),a.a.forwardRef((function(e,t){var c=Object(n.useContext)(x),a=c.state,i=c.onDeleteEdu,r=c.onDeleteExp,o=c.onDeleteProj,j=a.educationData.map((function(e){return Object(p.jsxs)("div",{className:"details",id:e.id,children:[Object(p.jsxs)("div",{className:"information",children:[Object(p.jsx)("h2",{children:e.schoolName}),Object(p.jsx)("p",{children:e.major})]}),Object(p.jsxs)("div",{className:"years",children:[e.educationStart," -"," ",e.educationEnd===(new Date).getFullYear().toString()?"Present":e.educationEnd,Object(p.jsx)("div",{onClick:function(){i(e.id)},children:Object(p.jsx)(N.a,{className:"trash-icon",icon:C.c,size:"2x"})})]})]})})),s=a.experienceData.map((function(e){return Object(p.jsxs)("div",{className:"details",id:e.id,children:[Object(p.jsxs)("div",{className:"information",children:[Object(p.jsx)("h2",{children:e.companyName}),Object(p.jsx)("p",{children:e.position}),Object(p.jsx)("p",{id:"expDescr-preview",children:e.expDescr})]}),Object(p.jsxs)("div",{className:"years",children:[e.from," -"," ",e.to===(new Date).getFullYear().toString()?"Present":e.to,Object(p.jsx)("div",{onClick:function(){r(e.id)},children:Object(p.jsx)(N.a,{className:"trash-icon",icon:C.c,size:"2x"})})]})]})})),d=a.projectsData.map((function(e){return Object(p.jsxs)("div",{className:"details",id:e.id,children:[Object(p.jsxs)("div",{className:"information",children:[Object(p.jsx)("h2",{children:e.projectName}),Object(p.jsx)("p",{children:e.institution}),Object(p.jsx)("p",{id:"projectDescr-preview",children:e.projectDescr})]}),Object(p.jsxs)("div",{className:"years",children:[e.projectStart," -"," ",e.projectEnd===(new Date).getFullYear().toString()?"Present":e.projectEnd,Object(p.jsx)("div",{onClick:function(){o(e.id)},children:Object(p.jsx)(N.a,{className:"trash-icon",icon:C.c,size:"2x"})})]})]})}));return Object(p.jsxs)("div",{className:"preview",ref:t,children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:a.generalInfo.name}),Object(p.jsxs)("div",{className:"contacts",children:[Object(p.jsxs)("a",{href:a.generalInfo.email,target:"_blank",rel:"noreferrer noopener",children:[a.generalInfo.email,Object(p.jsx)(N.a,{icon:C.a,className:"fa-icon"})]}),Object(p.jsxs)("div",{children:[a.generalInfo.telephone,Object(p.jsx)(N.a,{icon:C.b,className:"fa-icon"})]}),Object(p.jsxs)("a",{href:a.generalInfo.linkedin,target:"_blank",rel:"noreferrer noopener",children:[a.generalInfo.linkedin,Object(p.jsx)(N.a,{icon:E.b,className:"fa-icon"})]}),Object(p.jsxs)("a",{href:a.generalInfo.github,target:"_blank",rel:"noreferrer noopener",children:[a.generalInfo.github,Object(p.jsx)(N.a,{icon:E.a,className:"fa-icon"})]})]})]}),a.educationData.length?Object(p.jsxs)("section",{className:"section",children:[Object(p.jsx)("h2",{children:"Education"}),j]}):null,a.experienceData.length?Object(p.jsxs)("section",{className:"section",children:[Object(p.jsx)("h2",{children:"Experience"}),s]}):null,a.projectsData.length?Object(p.jsxs)("section",{className:"section",children:[Object(p.jsx)("h2",{children:"Projects"}),d]}):null]})}))),P=(c(33),c(34),c(35),function(){var e=Object(n.useRef)(),t=Object(m.useReactToPrint)({content:function(){return e.current}});return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(O,{children:[Object(p.jsxs)("div",{className:"main-form",children:[Object(p.jsx)("h1",{children:"CV Creator"}),Object(p.jsx)(v,{}),Object(p.jsx)(g,{}),Object(p.jsx)(y,{}),Object(p.jsx)(D,{})]}),Object(p.jsx)(S,{ref:e}),Object(p.jsx)("button",{id:"print",onClick:t,children:"Download PDF"})]})})});r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[36,1,2]]]);
//# sourceMappingURL=main.e2b7859d.chunk.js.map