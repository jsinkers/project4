(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={app:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"4e38":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("4989"),s("d48d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex container-fluid flex-column min-vh-100",attrs:{id:"app"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col p-0"},[s("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand mb-0 h1",attrs:{to:"/"}},[t._v("Reggie")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/tutorial"}},[t._v("Tutorial")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/progress"}},[t._v("Progress")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/playground"}},[t._v("Playground")])],1)])])],1)])]),s("router-view")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],a={name:"App",components:{}},o=a,l=(s("5c0b"),s("2877")),c=Object(l["a"])(o,n,r,!1,null,null,null),u=c.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row flex-grow-1 height-75 debug2",attrs:{id:"homeComponent"}},[s("div",{staticClass:"container align-items-center h-100 debug"},[s("div",{staticClass:"row justify-content-center h-100 align-items-center debug2"},[t._m(0),s("div",{staticClass:"col-auto"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/tutorial"}},[t._v("Tutorial")])],1),s("div",{staticClass:"col-auto"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/progress"}},[t._v("Challenges")])],1)])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 text-center"},[s("h6",[t._v("Learn about computers by solving challenges on a register machine")])])}],g={name:"Home",mounted:function(){},data:function(){return{}}},v=g,f=Object(l["a"])(v,p,h,!1,null,null,null),m=f.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row debug"},[s("div",{staticClass:"container-fluid"},[t._m(0),s("div",{staticClass:"row"},t._l(t.programs,(function(e){return s("div",{key:e.id,staticClass:"col-auto py-1"},[s("div",{staticClass:"card"},[s("router-link",{staticClass:"card-body cardHover",attrs:{to:t.challengeRoute(e)}},[s("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.id)+". "+t._s(e.title)+" "),"pass"===t.challengeSolved(e.id)?s("check-circle-outline-icon",{staticClass:"text-success"}):"fail"===t.challengeSolved(e.id)?s("alert-circle-outline-icon",{staticClass:"text-danger"}):t._e()],1)])],1)])})),0)])])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"p-4"},[t._v("Challenges")])])}],C=(s("7db0"),s("bc3a")),y=s.n(C),w=s("a78e"),T=s.n(w),x=y.a.create({baseURL:"/api",timeout:5e3,headers:{"Content-Type":"application/json","X-CSRFToken":T.a.get("csrftoken")}}),S=s("cc28"),I=s("6f7c"),k={name:"Challenges",components:{CheckCircleOutlineIcon:S["a"],AlertCircleOutlineIcon:I["a"]},data:function(){return{programs:[],isHovering:!1}},methods:{updateChallengeList:function(t){var e=this;this.id=t,x.get("progress/").then((function(t){e.response=t,e.programs=e.response.data}))},challengeRoute:function(t){return"/challenge/".concat(t.id)},challengeSolved:function(t){var e=this.challengeData.find((function(e){return e.id==t}));if(e){if(e.solved)return"pass";if(!1===e.solved)return"fail"}return"unattempted"}},mounted:function(){this.updateChallengeList(),this.challengeData=JSON.parse(localStorage.challenges).data}},R=k,O=Object(l["a"])(R,b,_,!1,null,"2cd4eb14",null),P=O.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row debug"},[s("div",{staticClass:"container"},[t._m(0),t._m(1),s("div",{staticClass:"row"},[s("div",{staticClass:"container-fluid",attrs:{id:"controls"}},[t._m(2),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col"},[t.running?s("button",{staticClass:"btn btn-primary",on:{click:t.pauseRegMachine}},[t._v("Pause")]):s("button",{staticClass:"btn btn-primary",on:{click:t.runRegMachine}},[t._v("Run")]),s("button",{staticClass:"btn btn-primary",attrs:{id:"btnStep"},on:{click:t.stepRegMachine}},[t._v("Step")]),s("button",{staticClass:"btn btn-primary",on:{click:t.resetProgram}},[t._v("Reset")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg",attrs:{id:"program"}},[s("div",{staticClass:"container-fluid"},[t._m(3),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("program",{attrs:{program:t.program,"current-step-id":t.currentStepId,fields:t.fields,"program-options":t.programOptions,instructions:t.instructions}})],1)])])]),s("div",{staticClass:"col-12 col-lg"},[s("div",{staticClass:"container-fluid",attrs:{id:"registers"}},[s("div",{staticClass:"row justify-content-between"},[t._m(4),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary",on:{click:t.resetRegisters}},[t._v("Zero")])])]),s("div",{staticClass:"row"},t._l(t.registers,(function(t,e){return s("register",{key:e,attrs:{"reg-value":t.value,"reg-id":t.id},on:{"update:reg-value":function(e){t.value=e}}})})),1)])])])])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-between align-items-center",attrs:{id:"probStatement"}},[s("div",{staticClass:"col"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h4",[t._v("Controls")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-auto"},[s("h4",[t._v("Program")])]),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary"},[t._v("Save")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-auto"},[s("h4",[t._v("Registers")])])}],E={name:"Playground",data:function(){return{program:[{id:1,instruction:"end",register:null,goTo:null,branchTo:null,editable:!0,editMode:!1}],registers:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}],instructions:[{instruction:"inc",description:"Increment register",fields:["instruction","register","goTo"]},{instruction:"deb",description:"Decrement register or branch",fields:["instruction","register","goTo","branchTo"]},{instruction:"end",description:"End",fields:["instruction"]}],currentStepId:1,running:!1,testID:null,rmInterval:null,fields:[{field:"instruction",options:[],optionObject:"instructions",optionField:"instruction"},{field:"register",options:[],optionObject:"registers",optionField:"id"},{field:"goTo",options:[],optionObject:"program",optionField:"id"},{field:"branchTo",options:[],optionObject:"program",optionField:"id"}],programOptions:[]}}},M=E,D=Object(l["a"])(M,j,$,!1,null,"2f326397",null),N=D.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row debug"},[s("div",{staticClass:"container debug2"},[s("div",{staticClass:"row"},[t.solved?s("div",{staticClass:"col alert alert-success",attrs:{role:"alert"}},[t._v(" Great work! You solved this challenge. "),s("router-link",{staticClass:"btn btn-success",attrs:{to:t.nextChallengeRoute()}},[t._v("Next challenge")])],1):null!==t.solved&&!1===t.solved?s("div",{staticClass:"col alert alert-danger",attrs:{role:"alert"}},[t._v(" Uh oh! It looks like your program didn't pass the tests. Give it another go. "),""!==t.hint?s("div",[s("button",{staticClass:"btn btn-danger",attrs:{"data-toggle":"collapse","data-target":"#hintText"}},[t._v("Hint")]),s("div",{staticClass:"collapse",attrs:{id:"hintText"}},[s("div",{staticClass:"card card-body"},[s("span",{domProps:{innerHTML:t._s(t.hint)}})])])]):t._e()]):t._e()]),s("div",{staticClass:"row justify-content-between align-items-center",attrs:{id:"probStatement"}},[s("div",{staticClass:"col col-md-6"},[s("h1",[t._v(t._s(t.$route.params.id)+". "+t._s(t.title))])]),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary align-middle",attrs:{type:"button"},on:{click:t.resetChallenge}},[t._v("Reset challenge")]),s("button",{staticClass:"btn btn-primary align-middle",attrs:{type:"button","data-toggle":"collapse","data-target":"#probText"}},[t.statementCollapsed?s("span",[s("unfold-more-horizontal-icon")],1):s("span",[s("unfold-less-horizontal-icon")],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{ref:"probText",staticClass:"collapse show",attrs:{id:"probText"}},[s("div",{staticClass:"card card-body"},[s("span",{domProps:{innerHTML:t._s(t.statement)}})])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"container-fluid",attrs:{id:"controls"}},[t._m(0),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col"},[t.running?s("button",{staticClass:"btn btn-primary",on:{click:t.pauseRegMachine}},[t._v("Pause")]):s("button",{staticClass:"btn btn-primary",on:{click:t.runRegMachine}},[t._v("Run")]),s("button",{staticClass:"btn btn-primary",attrs:{id:"btnStep"},on:{click:t.stepRegMachine}},[t._v("Step")]),s("button",{staticClass:"btn btn-primary",on:{click:t.resetProgram}},[t._v("Reset")])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg",attrs:{id:"program"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-between"},[t._m(1),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary",on:{click:t.persist}},[t._v("Save")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("program",{attrs:{program:t.program,"current-step-id":t.currentStepId,fields:t.fields,"program-options":t.programOptions,instructions:t.instructions}})],1)])])]),s("div",{staticClass:"col-12 col-lg"},[s("div",{staticClass:"container-fluid",attrs:{id:"registers"}},[s("div",{staticClass:"row justify-content-between"},[t._m(2),s("div",{staticClass:"col-auto"},[s("button",{staticClass:"btn btn-primary",on:{click:t.resetRegisters}},[t._v("Zero")])])]),s("div",{staticClass:"row"},t._l(t.registers,(function(t,e){return s("register",{key:e,attrs:{"reg-value":t.value,"reg-id":t.id},on:{"update:reg-value":function(e){t.value=e}}})})),1)]),s("tests",{attrs:{tests:t.tests,"curr-test":t.testID}})],1)])])])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h4",[t._v("Controls")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-auto"},[s("h4",[t._v("Program")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-auto"},[s("h4",[t._v("Registers")])])}],A=(s("c740"),s("4160"),s("d81d"),s("fb6a"),s("e25e"),s("159b"),new i["a"]),H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid px-0"},[s("div",{staticClass:"row"},[s("table",{staticClass:"table mb-0",attrs:{id:"tabProgram"}},[t._m(0),s("tbody",t._l(t.program,(function(e,i){return s("ProgramStep",{key:i,attrs:{"prog-step":e,"edit-mode":!1,"curr-step-id":t.currentStepId,fields:t.fields,instructions:t.instructions}})})),1)])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-3"},[s("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-outline-primary",on:{click:t.removeStep}},[t._v(" - ")]),s("button",{staticClass:"btn btn-outline-primary",on:{click:t.addStep}},[t._v(" + ")])])])])])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Step")]),s("th",{attrs:{scope:"col"}},[t._v("Instruction")]),s("th",{attrs:{scope:"col"}},[t._v("Register")]),s("th",{attrs:{scope:"col"}},[t._v("Go to")]),s("th",{attrs:{scope:"col"}},[t._v("Branch to")])])])}],L=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{class:{currStep:t.step.id===t.currStepId,clickable:t.step.editable},on:{click:function(e){return t.toggleEdit(t.step.editable)}}},[s("td",{attrs:{scope:"row"}},[t._v(" "+t._s(t.step.id)+" "),t.step.editable&&!t.step.editMode?s("pencil-icon",{staticClass:"text-primary"}):t._e(),t.step.editable&&t.step.editMode?s("pencil-off-icon",{staticClass:"text-primary"}):t._e()],1),t._l(t.fields,(function(e,i){return s("dropdown",{key:i,attrs:{editMode:t.step.editMode,field:e,value:t.step[e.field],options:e.options,id:t.step.id,instruction:t.step.instruction,instructions:t.instructions}})}))],2)}),B=[],G=s("d902"),U=s("575f"),q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[t.editMode&&this.isEditableField()?s("span",[s("select",{staticClass:"form-control",on:{click:function(e){return e.stopPropagation(),t.clickEvent(e)},change:function(e){return t.progValSel(e)}}},t._l(t.options,(function(e,i){return s("option",{key:i,domProps:{selected:e===t.value,value:i}},[t._v(" "+t._s(e)+" ")])})),0)]):s("span",[t._v(t._s(t.value))])])},z=[],Y={name:"Dropdown",props:{editMode:Boolean,field:Object,options:Array,value:{type:[Number,String]},instruction:String,instructions:Array,id:Number},data:function(){return{}},methods:{isEditableField:function(){var t=this,e=this.instructions.find((function(e){return e.instruction===t.instruction}));return!!e.fields.find((function(e){return e===t.field.field}))},progValSel:function(t){A.$emit("prog-value-sel",{id:this.id,field:this.field.field,value:this.options[t.target.value]})},clickEvent:function(){}}},W=Y,Z=Object(l["a"])(W,q,z,!1,null,"4e9ed77a",null),X=Z.exports,K={name:"ProgramStep",components:{PencilIcon:G["a"],PencilOffIcon:U["a"],Dropdown:X},props:{progStep:Object,stepOptions:Array,currStepId:Number,fields:Array,instructions:Array},data:function(){return{step:this.progStep}},methods:{toggleEdit:function(t){t&&A.$emit("toggle-edit",this.step.id)}}},Q=K,tt=Object(l["a"])(Q,L,B,!1,null,"391ef283",null),et=tt.exports,st={name:"Program",props:{program:Array,fields:Array,currentStepId:Number,instructions:Array},methods:{addStep:function(){A.$emit("add-step")},removeStep:function(){A.$emit("remove-step")}},components:{ProgramStep:et}},it=st,nt=Object(l["a"])(it,H,J,!1,null,"e77d6ea4",null),rt=nt.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("div",{staticClass:"container group"},[s("div",{staticClass:"regHeading row justify-content-center"},[s("div",{staticClass:"col text-center"},[t._v(t._s(t.regId))])]),s("div",{staticClass:"regContent row justify-content-center"},[s("div",{staticClass:"col text-center"},[s("h2",[t._v(t._s(t.value))])])]),s("div",{staticClass:"regFooter row"},[s("div",{staticClass:"col btn-group btn-group-sm",attrs:{role:"group"}},[s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.decReg}},[t._v("-")]),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.incReg}},[t._v("+")])])])])])},ot=[],lt={name:"Register",props:{regId:Number,regValue:Number},data:function(){return{value:this.regValue}},methods:{decReg:function(){this.value&&this.value--},incReg:function(){this.value++}},watch:{value:function(){this.$emit("update:reg-value",this.value)},regValue:function(){this.value=this.regValue}}},ct=lt,ut=Object(l["a"])(ct,at,ot,!1,null,"96dd13fe",null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid tests"},[s("div",{staticClass:"row justify-content-between"},[t._m(0),s("div",{staticClass:"col-auto"},[null===t.currTest?s("button",{staticClass:"btn btn-primary",on:{click:t.runTests}},[t._v("Run tests")]):s("button",{staticClass:"btn btn-primary",on:{click:t.haltTests}},[t._v("Stop tests")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("table",{staticClass:"table mb-0"},[t._m(1),s("tbody",t._l(t.tests,(function(e){return s("tr",{key:e.id,class:{currTest:e.id===t.currTest}},[s("td",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),s("td",{attrs:{scope:"row"}},[t._v(t._s(e.description))]),s("td",{attrs:{scope:"row"}},[s("ul",{staticClass:"nobull",domProps:{innerHTML:t._s(t.testResultStr(e.expectedRegVals))}})]),s("td",{attrs:{scope:"row"}},[s("ul",{staticClass:"nobull",domProps:{innerHTML:t._s(t.testResultStr(e.actualRegVals))}})]),"Pass"===e.status?s("td",{attrs:{scope:"row"}},[s("check-circle-outline-icon",{staticClass:"text-success"})],1):"Fail"===e.status?s("td",{attrs:{scope:"row"}},[s("alert-circle-outline-icon",{staticClass:"text-danger"})],1):s("td",{attrs:{scope:"row"}})])})),0)])])])])},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-auto"},[s("h4",[t._v("Tests")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Test")]),s("th",{attrs:{scope:"col"}},[t._v("Description")]),s("th",{attrs:{scope:"col"}},[t._v("Expected")]),s("th",{attrs:{scope:"col"}},[t._v("Result")]),s("th",{attrs:{scope:"col"}})])])}],gt=(s("99af"),{name:"Tests",props:{tests:Array,currTest:Number},data:function(){return{}},methods:{runTests:function(){A.$emit("run-tests")},haltTests:function(){A.$emit("halt-tests")},testResultStr:function(t){var e="";for(var s in t)null!==t[s].value&&(e+="<li>Reg ".concat(t[s].id,": ").concat(t[s].value,"</li>"));return e}},components:{CheckCircleOutlineIcon:S["a"],AlertCircleOutlineIcon:I["a"]}}),vt=gt,ft=(s("5d21"),Object(l["a"])(vt,pt,ht,!1,null,"0ced5474",null)),mt=ft.exports,bt=s("7967"),_t={name:"Challenge",data:function(){return{id:null,response:null,title:null,statement:null,program:[],tests:[],registers:[],hint:null,instructions:[{instruction:"inc",description:"Increment register",fields:["instruction","register","goTo"]},{instruction:"deb",description:"Decrement register or branch",fields:["instruction","register","goTo","branchTo"]},{instruction:"end",description:"End",fields:["instruction"]}],currentStepId:1,running:!1,testID:null,rmInterval:null,fields:[{field:"instruction",options:[],optionObject:"instructions",optionField:"instruction"},{field:"register",options:[],optionObject:"registers",optionField:"id"},{field:"goTo",options:[],optionObject:"program",optionField:"id"},{field:"branchTo",options:[],optionObject:"program",optionField:"id"}],programOptions:[],solved:null,statementCollapsed:!1}},methods:{toggleStatement:function(){this.statementCollapsed=!this.statementCollapsed},nextChallengeRoute:function(){var t=parseInt(this.$route.params.id)+1;return"/challenge/".concat(t)},resetRegisters:function(){this.registers.forEach((function(t){t.value=0}))},resetProgram:function(){this.rmInterval&&(this.rmInterval=clearInterval(this.rmInterval)),this.running=!1,this.currentStepId=1},executeProgramStep:function(){var t=this,e=this.program.find((function(e){return e.id===t.currentStepId}));if("end"!==e.instruction)var s=this.registers.findIndex((function(t){return t.id===e.register}));"inc"===e.instruction?(this.registers[s].value++,this.currentStepId=e.goTo):"deb"===e.instruction?0===this.registers[s].value?this.currentStepId=e.branchTo:(this.registers[s].value--,this.currentStepId=e.goTo):"end"===e.instruction&&(this.running=!1,this.rmInterval&&(clearInterval(this.rmInterval),this.rmInterval=null,document.querySelector("#btnStep").disabled=!1),this.testID&&this.testResult())},runRegMachine:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;this.program.length>0&&(this.running=!0,this.rmInterval=setInterval(this.executeProgramStep,e),document.querySelector("#btnStep").disabled=!0)},stepRegMachine:function(){this.executeProgramStep()},pauseRegMachine:function(){this.running=!1,this.rmInterval&&(this.rmInterval=clearInterval(this.rmInterval)),document.querySelector("#btnStep").disabled=!1},runTest:function(t){var e=this;this.resetProgram();var s=this.tests.find((function(e){return e.id===t})),i=function(t){var i=s.initRegVals.findIndex((function(s){return s.id===e.registers[t].id}));e.registers[t].value=i>=0?s.initRegVals[i].value:0};for(var n in this.registers)i(n);this.runRegMachine(null,100)},testResult:function(){var t=this,e=this.tests.find((function(e){return e.id===t.testID})),s=function(s){var i=t.registers.findIndex((function(t){return t.id===e.actualRegVals[s].id}));e.actualRegVals[s].value=t.registers[i].value};for(var i in e.actualRegVals)s(i);this.checkTestStatus(),this.testID++,this.runTests()},checkTestStatus:function(){var t=this,e=this.tests.find((function(e){return e.id===t.testID}));e.status="Pass";var s=function(t){var s=e.expectedRegVals.findIndex((function(s){return s.id===e.actualRegVals[t].id}));e.actualRegVals[t].value!==e.expectedRegVals[s].value&&(e.status="Fail")};for(var i in e.actualRegVals)s(i)},resetTests:function(){for(var t in this.tests)this.tests[t].status=null},runTests:function(){var t=this;if(this.program.length>0){this.testID||(this.testID=1,this.resetTests(),this.disableProgramEdit());var e=this.tests.findIndex((function(e){return e.id===t.testID}));e>=0?(this.testID=this.tests[e].id,this.runTest(this.tests[e].id)):(this.testID=null,this.checkIfSolved(),this.persist())}},haltTests:function(){this.pauseRegMachine(),this.testID=null},checkIfSolved:function(){var t=!1;for(var e in this.tests)"Pass"!==this.tests[e].status&&(t=!0);this.solved=!t},disableProgramEdit:function(){for(var t in this.program)this.program[t].editMode=!1},toggleEdit:function(t){for(var e in this.program)this.program[e].id===t?this.program[e].editMode=!this.program[e].editMode:this.program[e].editMode=!1},updateOptions:function(t){for(var e=this,s=function(s){var i=t[s].optionField,n=e[t[s].optionObject];e.fields[s].options=n.map((function(t){return t[i]}))},i=0;i<t.length;i++)s(i)},updateProgram:function(t){var e=this,s=this.program.findIndex((function(e){return e.id===t.id}));if(this.program[s][t.field]=t.value,"instruction"===t.field){var i=function(t){var i=e.instructions.find((function(t){return t.instruction===e.program[s].instruction}));i.fields.find((function(s){return s===e.fields[t].field}))?null===e.program[s][e.fields[t].field]&&(e.program[s][e.fields[t].field]=e.fields[t].options[0]):e.program[s][e.fields[t].field]=null};for(var n in this.fields)i(n)}},addStep:function(){var t=1;this.program.length&&(t=this.program[this.program.length-1].id+1);var e={id:t,instruction:"end",register:null,goTo:null,branchTo:null,editable:!0,editMode:!1};this.program.push(e),this.toggleEdit(t)},removeStep:function(){if(this.program.length){var t=this.program[this.program.length-1].id,e=this.program.slice(0,-1);e.findIndex((function(e){return e.goTo===t}))>=0||e.findIndex((function(e){return e.branchTo===t}))>=0?alert("Cannot remove the last step of the program as it is referenced by other program steps."):this.program.pop()}},updateChallenge:function(t,e){var s=this;this.id=t;var i=JSON.parse(localStorage.challenges),n=i.data.findIndex((function(e){return e.id===t}));if(e||-1===n)x.get("challenge/".concat(this.id)).then((function(t){s.response=t,s.initialiseData(t.data)}));else{var r=i.data[n];this.initialiseData(r)}},resetChallenge:function(){this.updateChallenge(this.$route.params.id,!0)},initialiseData:function(t){this.title=t.title,this.statement=t.statement,this.program=t.program,this.tests=t.tests,this.registers=t.registers,this.hint=t.hint,null!==t.solved?this.solved=t.solved:this.solved=null,this.currentStepId=1,this.running=!1,this.testID=null,this.rmInterval=null,this.programOptions=null},persist:function(){var t=this,e=JSON.parse(localStorage.challenges),s=e.data.findIndex((function(e){return e.id===t.id}));s>-1?(e.data[s]=this.stateRecord(),localStorage.challenges=JSON.stringify(e)):(e.data.push(this.stateRecord()),localStorage.challenges=JSON.stringify(e))},stateRecord:function(){var t={};return t["id"]=this.id,t["title"]=this.title,t["statement"]=this.statement,t["program"]=this.program,t["tests"]=this.tests,t["registers"]=this.registers,t["hint"]=this.hint,t["solved"]=this.solved,t}},created:function(){this.updateOptions(this.fields)},mounted:function(){var t=this;A.$on("toggle-edit",(function(e){t.toggleEdit(e)})),A.$on("prog-value-sel",(function(e){t.updateProgram(e)})),A.$on("add-step",(function(){t.addStep()})),A.$on("remove-step",(function(){t.removeStep()})),A.$on("run-tests",(function(){t.runTests()})),A.$on("halt-tests",(function(){t.haltTests()})),this.updateChallenge(this.$route.params.id)},watch:{program:function(){this.updateOptions(this.fields)}},components:{Program:rt,Register:dt,Tests:mt,UnfoldLessHorizontalIcon:bt["a"],UnfoldMoreHorizontalIcon:bt["a"]},beforeRouteUpdate:function(t,e,s){this.updateChallenge(t.params.id),s()}},Ct=_t,yt=Object(l["a"])(Ct,F,V,!1,null,"357a2ecc",null),wt=yt.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row flex-grow-1 debug2 "},[s("div",{staticClass:"container-fluid d-flex flex-column carousel slide debug",attrs:{id:"lightbox","data-interval":"false"}},[t._m(0),t._m(1),s("div",{staticClass:"row align-items-center flex-grow-1"},[s("div",{staticClass:"col h-100"},[s("div",{staticClass:"carousel-inner container-fluid h-100"},[s("TutorialPage",{attrs:{"is-active":!0}},[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Register machine")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("This site gives you a series of challenges to solve using a register machine, a kind of idealised computer. This is a useful tool to explore how computers work. But first, let's look at what makes up a register machine.")]),s("p",[t._v("This content is based on Daniel Dennett's description of the register machine in "),s("a",{attrs:{href:"https://www.goodreads.com/en/book/show/18378002-intuition-pumps-and-other-tools-for-thinking"}},[t._v(" Intuition Pumps and Other Tools for Thinking")]),t._v(".")])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Registers")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("Register machines have a number of registers, which act as memory for the machine. They can store whole numbers, and each has a unique ID (Reg. 1, Reg. 2, ...).")]),s("p",[t._v("You can think of a register as a bucket into which you can place buttons, with the value of the register being the number of buttons in the bucket. ")]),s("p",[t._v("Here are two registers. Try changing their values.")]),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("register",{attrs:{"reg-id":1,"reg-value":3}}),s("register",{attrs:{"reg-id":2,"reg-value":4}})],1)])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Processing Unit")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("The register machine also has a processing unit, which is capable of performing three different instructions. It can only execute one instruction at a time.")])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Program")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("A program for the register machine is simply a list of these instructions in a specific order. The register machine will execute this instructions, one-by-one, operating on the values of the registers, to produce some result. ")]),s("program",{attrs:{program:t.program,fields:t.fields,"current-step-id":t.currentStepId,instructions:t.instructions}})],1)]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Instruction 1: Increment")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("The increment instruction adds 1 to the specified register, and then moves to a specified step in the program (the Go-To step).")])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Instruction 2: End")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("As you might have guessed, the End instruction halts execution of the register machine. Without one of these steps in your program, it will keep the register machine running forever!")])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Instruction 3: Decrement-Branch")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("The Decrement-Branch instruction is a bit more involved. If the specified register for that instruction contains a value greater than 0, then the register has its value reduced by 1, and the processing unit moves to the Go-To step specified. If the specified register contains the value 0, then the processing unit moves to the Branch step specified.")]),s("p",[t._v("While this might seem a bit tricky, this is the most useful step, because it allows our programs to change behaviour based on the current values of the registers. You'll see how this works as you solve the challenges.")])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Operating the register machine")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("Now that you know what makes up a register machine, let's look at how we can run our programs")]),s("p",[t._v("The register machine has three controls:")]),s("ul",[s("li",[t._v("Run (pause): this executes the program until completion, and can be clicked again to pause execution ")]),s("li",[t._v("Step: this executes the next instruction in the program. This is useful if you want to carefully examine the behaviour of the register machine - very useful for locating bugs! ")]),s("li",[t._v("Reset: this takes the register machine back to the first step")])])])]),s("TutorialPage",[s("span",{attrs:{slot:"header"},slot:"header"},[t._v("Register machine")]),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v("Now you know how the basics, let's get started!")]),s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/progress"}},[t._v("Get started")])],1)])],1)])]),t._m(2)])])},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{staticClass:"row carousel-indicators d-none d-sm-flex"},[s("li",{staticClass:"active",attrs:{"data-target":"#lightbox","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"2"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"3"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"4"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"5"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"6"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"7"}}),s("li",{attrs:{"data-target":"#lightbox","data-slide-to":"8"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"carousel-control-prev",attrs:{href:"#lightbox",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:"carousel-control-next",attrs:{href:"#lightbox",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon text-dark",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])}],St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel-item h-100 w-100 container-fluid",class:{active:t.isActive}},[s("div",{staticClass:"row justify-content-center align-items-center h-100"},[s("div",{staticClass:"col-10 col-lg-6 text-center"},[s("h3",[t._t("header")],2),t._t("content")],2)])])},It=[],kt={name:"TutorialPage",props:{isActive:{type:Boolean,default:!1}}},Rt=kt,Ot=Object(l["a"])(Rt,St,It,!1,null,"65744841",null),Pt=Ot.exports,jt={name:"Tutorial",components:{Register:dt,TutorialPage:Pt,Program:rt},data:function(){return{program:[{id:1,goTo:2,branchTo:3,editMode:!1,editable:!1,register:1,instruction:"deb"},{id:2,goTo:1,branchTo:null,editMode:!1,editable:!1,register:2,instruction:"inc"},{id:3,goTo:null,branchTo:null,editMode:!1,editable:!1,register:null,instruction:"end"}],fields:[{field:"instruction",options:["inc","deb","end"],optionObject:"instructions",optionField:"instruction"},{field:"register",options:[1,2,3,4],optionObject:"registers",optionField:"id"},{field:"goTo",options:[1,2,3],optionObject:"program",optionField:"id"},{field:"branchTo",options:[1,2,3],optionObject:"program",optionField:"id"}],currentStepId:1,instructions:[]}}},$t=jt,Et=Object(l["a"])($t,Tt,xt,!1,null,"51dff31c",null),Mt=Et.exports;i["a"].use(d["a"]);var Dt=new d["a"]({routes:[{path:"/",component:m},{path:"/progress",component:P},{path:"/challenge",component:wt},{path:"/challenge/:id",component:wt},{path:"/playground",component:N},{path:"/tutorial",component:Mt}]});i["a"].config.productionTip=!1,new i["a"]({router:Dt,el:"#app",render:function(t){return t(u)},mounted:function(){if(localStorage.challenges)try{JSON.parse(localStorage.getItem("challenges"))}catch(t){localStorage.removeItem("challenges"),localStorage.challenges=JSON.stringify({data:[]})}else localStorage.challenges=JSON.stringify({data:[]})}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("9c0c"),n=s.n(i);n.a},"5d21":function(t,e,s){"use strict";var i=s("4e38"),n=s.n(i);n.a},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.c61e0cc2.js.map