webpackJsonp([12],{"5Cg0":function(e,t){e.exports=[{senceExt:"1",status:1,productCode:"WND",remark:"11111",sceneId:1,msgSign:"【微农贷】",sendType:1,platCode:"1",companyName:"杭州市分公司",companyCode:"00010002",id:66,platName:"金爱农",templateContent:"1111111",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""},{senceExt:"2",status:1,productCode:"WND",remark:"123123",sceneId:1,msgSign:"1231232",sendType:1,platCode:"1",companyName:"山东金爱农",companyCode:"0002",id:69,platName:"金爱农",templateContent:"123123123",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""},{senceExt:"4",status:1,productCode:"WND",remark:"11",sceneId:1,msgSign:"【农游】",sendType:1,platCode:"1",companyName:"浙江金爱农龙游分公司",companyCode:"000100010002",id:70,platName:"金爱农",templateContent:"尊敬的${username}，你有一笔应还金额￥${amount}元的借 款在${date}到期，请你马上还款，逾 期超过30天，我们将通知你的紧急联系人和相关亲友。",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""},{senceExt:"1",status:1,productCode:"WND",remark:"1",sceneId:1,msgSign:"1",sendType:1,platCode:"1",companyName:"浙江金爱农网络科技有限公司衢州分公司",companyCode:"00010001",id:71,platName:"金爱农",templateContent:"1",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""},{senceExt:"1",status:1,productCode:"WND",remark:"好吧",sceneId:1,msgSign:"好吧",sendType:1,platCode:"1",companyName:"浙江金爱农网络科技有限公司衢州分公司",companyCode:"00010001",id:72,platName:"金爱农",templateContent:"2",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""},{senceExt:"4",status:1,productCode:"WND",remark:"4",sceneId:1,msgSign:"4",sendType:1,platCode:"1",companyName:"浙江金爱农网络科技有限公司衢州分公司江山直营点",companyCode:"000100010001",id:73,platName:"金爱农",templateContent:"4",senceName:"逾期",productName:"微农贷",targetType:1,templateName:""}]},obAo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("5Cg0"),o=a.n(s),n={name:"SmsReview",data:function(){return{searchInfo:{list:[],form:{name:"",status:"",sceneId:""}},sceneList:["逾期"],statusList:["审核中"],failInfo:{isOpen:!1,form:{}},passInfo:{isOpen:!1,form:{}},rules:{senceExt:[{required:!0,message:"扩展字段不能为空",trigger:"change"}],msgSign:[{required:!0,message:"短信签名不能为空",trigger:"change"}],templateContent:[{required:!0,message:"短信模板不能为空",trigger:"change"}],verifyFailReason:[{required:!0,message:"请输入不过理由",trigger:"change"}],taskName:[{required:!0,message:"任务名称不能为空",trigger:"change"}],taskCron:[{required:!0,message:"时间表达式不能为空",trigger:"change"}],taskUrl:[{required:!0,message:"调用url不能为空",trigger:"change"}],taskDesc:[{required:!0,message:"任务描述不能为空",trigger:"change"}]}}},methods:{getListAjax:function(){console.log("发送ajax查询数据或分页规则处理"),this.searchInfo.list=o.a},formatValue:function(e,t,a){return"status"===t.property?this.statusList[a-1]:"sceneId"===t.property?this.sceneList[a-1]:void 0},openFail:function(e){this.failInfo={isOpen:!0,form:{id:e.id,verifyFailReason:""}}},sendFailAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送failInfo.form数据"),console.log(t.failInfo.form)})},resetFailInfo:function(){this.$refs.formByFail.resetFields(),this.failInfo.isOpen=!1},openPass:function(e){var t=this;this.passInfo.isOpen=!0,setTimeout(function(){t.$refs.formByPass.resetFields(),t.passInfo.form={id:e.id,companyName:e.companyName,productName:e.productName,sceneId:e.sceneId,senceExt:e.senceExt,msgSign:e.msgSign,templateContent:e.templateContent,taskName:"",taskCron:"",taskUrl:"",taskDesc:""}},100)},sendPassAjax:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;console.log("在此发送passInfo.form数据"),console.log(t.passInfo.form)})},resetPassInfo:function(){this.$refs.formByPass.resetFields(),this.passInfo.isOpen=!1}},mounted:function(){this.getListAjax()}},r=n,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("Breadcrumb"),e._v(" "),a("SearchWarp",[a("el-form",{ref:"searchInfo.form",attrs:{inline:!0,model:e.searchInfo.form}},[a("el-form-item",{attrs:{label:"公司"}},[a("SelectCompany",{model:{value:e.searchInfo.form.companyCode,callback:function(t){e.$set(e.searchInfo.form,"companyCode",t)},expression:"searchInfo.form.companyCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"场景"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.searchInfo.form.sceneId,callback:function(t){e.$set(e.searchInfo.form,"sceneId",t)},expression:"searchInfo.form.sceneId"}},e._l(e.sceneList,function(e,t){return a("el-option",{key:t+1,attrs:{label:e,value:t+1}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.searchInfo.form.status,callback:function(t){e.$set(e.searchInfo.form,"status",t)},expression:"searchInfo.form.status"}},e._l(e.statusList,function(e,t){return a("el-option",{key:t+1,attrs:{label:e,value:t+1}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:e.getListAjax}},[e._v("查询")])],1)],1)],1),e._v(" "),a("ContentWarp",[a("el-table",{attrs:{border:"",stripe:"",data:e.searchInfo.list,size:"small"}},[a("el-table-column",{attrs:{align:"center",label:"公司",prop:"companyName","min-width":"320"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"场景",prop:"sceneId",formatter:e.formatValue,width:"70"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"扩展字段",prop:"senceExt",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"短信模版",prop:"templateContent","min-width":"360"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",formatter:e.formatValue,width:"100"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success",plain:""},on:{click:function(a){e.openPass(t.row)}}},[e._v("通过")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(a){e.openFail(t.row)}}},[e._v("不通过")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"不通过理由",width:"600px",center:"",visible:e.failInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.failInfo,"isOpen",t)}}},[a("el-form",{ref:"formByFail",attrs:{model:e.failInfo.form,rules:e.rules}},[a("el-form-item",{attrs:{prop:"verifyFailReason"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入不通过理由"},model:{value:e.failInfo.form.verifyFailReason,callback:function(t){e.$set(e.failInfo.form,"verifyFailReason",t)},expression:"failInfo.form.verifyFailReason"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendFailAjax("formByFail")}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.resetFailInfo}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"通过",width:"600px",center:"",visible:e.passInfo.isOpen,"show-close":!1},on:{"update:visible":function(t){e.$set(e.passInfo,"isOpen",t)}}},[a("el-form",{ref:"formByPass",attrs:{model:e.passInfo.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"公司"}},[a("el-input",{attrs:{type:"text",disabled:""},model:{value:e.passInfo.form.companyName,callback:function(t){e.$set(e.passInfo.form,"companyName",t)},expression:"passInfo.form.companyName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品"}},[a("el-input",{attrs:{type:"text",disabled:""},model:{value:e.passInfo.form.productName,callback:function(t){e.$set(e.passInfo.form,"productName",t)},expression:"passInfo.form.productName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"场景"}},[a("el-input",{attrs:{type:"text",value:e.sceneList[e.passInfo.form.sceneId-1],disabled:""}})],1),e._v(" "),a("el-form-item",{attrs:{label:"扩展字段",prop:"senceExt"}},[a("el-input",{attrs:{type:"text"},model:{value:e.passInfo.form.senceExt,callback:function(t){e.$set(e.passInfo.form,"senceExt",t)},expression:"passInfo.form.senceExt"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"短信签名",prop:"msgSign"}},[a("el-input",{attrs:{type:"text"},model:{value:e.passInfo.form.msgSign,callback:function(t){e.$set(e.passInfo.form,"msgSign",t)},expression:"passInfo.form.msgSign"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"短信模板",prop:"templateContent"}},[a("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.passInfo.form.templateContent,callback:function(t){e.$set(e.passInfo.form,"templateContent",t)},expression:"passInfo.form.templateContent"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务名称",prop:"taskName"}},[a("el-input",{attrs:{type:"text"},model:{value:e.passInfo.form.taskName,callback:function(t){e.$set(e.passInfo.form,"taskName",t)},expression:"passInfo.form.taskName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间表达式",prop:"taskCron"}},[a("el-input",{attrs:{type:"text"},model:{value:e.passInfo.form.taskCron,callback:function(t){e.$set(e.passInfo.form,"taskCron",t)},expression:"passInfo.form.taskCron"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"调用url",prop:"taskUrl"}},[a("el-input",{attrs:{type:"text"},model:{value:e.passInfo.form.taskUrl,callback:function(t){e.$set(e.passInfo.form,"taskUrl",t)},expression:"passInfo.form.taskUrl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务描述",prop:"taskDesc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.passInfo.form.taskDesc,callback:function(t){e.$set(e.passInfo.form,"taskDesc",t)},expression:"passInfo.form.taskDesc"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendPassAjax("formByPass")}}},[e._v("确 认")]),e._v(" "),a("el-button",{on:{click:e.resetPassInfo}},[e._v("取 消")])],1)],1)],1)},i=[],m={render:l,staticRenderFns:i},p=m,c=a("/Xao"),f=c(r,p,!1,null,null,null);t.default=f.exports}});