import{r as D,aI as b,aA as d,a1 as u,a2 as t,a9 as f,a8 as N,P as S,aG as A,L as v,b2 as k,I as P,b4 as M,bn as B,bm as G,$ as H,ba as O}from"./@vue.73b154b2.js";import{c as Q,a as X}from"./vue-router.72aa2e94.js";import{h as E}from"./html2pdf.js.77f04449.js";import{Q as U}from"./@vueup.a126658a.js";import{_ as q}from"./@j-t-mcc.594ac3a0.js";import{X as z,a as W,b as Z,c as J,d as K}from"./vue3-xlsx.5168b593.js";import{p as Y}from"./vue-axios.5185f56e.js";import{b as tt}from"./axios.68af02ab.js";import{$ as et}from"./jquery.a4906b5f.js";import"./bootstrap.13e03e99.js";import"./element-plus.7d8be152.js";import{l as ot,f as at,a as nt,b as st,c as lt,F as rt}from"./@fortawesome.bb8e5ad9.js";import"./html2canvas.c4a43e03.js";import"./quill.92d670e6.js";import"./quill-delta.ac4408af.js";import"./fast-diff.40237be0.js";import"./lodash.clonedeep.3aad66b6.js";import"./lodash.isequal.67e4074a.js";import"./chart.js.535d675f.js";import"./vue.69568e18.js";import"./@popperjs.5cb7fabc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();const it="/vite.svg",ct={class:"navbar navbar-dark glay_bg_Menu"},dt={class:"px-3 py-2"},pt={class:"navbar-brand"},ut=["href"],_t=t("img",{src:it,class:"logo ms-3",alt:"Vite logo"},null,-1),ft={data:function(){return{link:"/"}}},mt=Object.assign(ft,{__name:"header_t",props:{merrges:String},setup(a){return D(0),(e,l)=>{const n=b("font-awesome-icon");return d(),u("div",null,[t("nav",ct,[t("div",dt,[t("div",pt,[f(n,{icon:"bars"}),t("a",{href:e.link},[_t,N(" \u4F5C\u54C1\u4E32\u63A5 ")],8,ut)])])])])}}}),x=(a,e)=>{const l=a.__vccOpts||a;for(const[n,o]of e)l[n]=o;return l},ht={data:function(){return{MenuBar:[{name:"\u7DB2\u9801\u4F5C\u54C1",link:"/"},{name:"\u529F\u80FD\u4E32\u63A5",link:"Ghart",list:[{name:"\u8CC7\u8A0A\u5716\u8868\u4E32\u63A5",link:"Ghart",urlid:1},{name:"Canvas\u7E6A\u88FD\u5716\u8868",link:"Canvas",urlid:1},{name:"HTML\u8F49Pdf",link:"Pdf",urlid:1}]}]}}},bt={class:"list-group list-group-flush"},gt=["href"],vt={key:1,class:"list-group-item"};function xt(a,e,l,n,o,s){const p=b("router-link");return d(),u("div",null,[t("ul",bt,[(d(!0),u(S,null,A(a.MenuBar,(r,m)=>(d(),u("li",{key:m},[r.list==null?(d(),u("a",{key:0,href:r.link,class:"list-group-item"},v(r.name),9,gt)):(d(),u("div",vt,v(r.name),1)),t("ul",null,[(d(!0),u(S,null,A(r.list,(h,_)=>(d(),u("li",{key:_},[f(p,{class:"list-group-item",to:{name:h.link,params:{id:h.urlid}}},{default:k(()=>[N(v(h.name),1)]),_:2},1032,["to"])]))),128))])]))),128))])])}const yt=x(ht,[["render",xt]]),Ct={class:"d-flex"},$t={class:"left_menu"},kt={class:"right_content"},Dt={__name:"App",setup(a){return(e,l)=>{const n=b("router-view");return d(),u(S,null,[f(mt),t("div",Ct,[t("div",$t,[f(yt)]),t("div",kt,[f(n)])])],64)}}},St={props:["exampleProp"],data(){return{title:this.exampleProp}}},wt={class:"crumbbox","aria-label":"breadcrumb"},At={class:"breadcrumb"},Pt=t("li",{class:"breadcrumb-item"},[t("a",{href:"#"},"Home")],-1),It={class:"breadcrumb-item active","aria-current":"page"};function Mt(a,e,l,n,o,s){return d(),u("nav",wt,[t("ol",At,[Pt,t("li",It,v(o.title),1)])])}const $=x(St,[["render",Mt]]),Ft={},Lt={class:"penicon"},Vt=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{d:"M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})],-1),Bt=[Vt];function Et(a,e){return d(),u("div",Lt,Bt)}const F=x(Ft,[["render",Et]]),Rt="/img/logo-16.png",Nt="/img/text-16.png",Tt="/img/bg-16.jpg",jt={props:{prop1:{type:String,required:!0},prop2:{type:String,required:!0}},components:{penicon:F},data(){return{id:"pdf_p1"}},methods:{updateParentData(){this.$emit("updateData",this.id)}}},Gt={class:"A4_Content_p1 position-relative"},Ht={class:"pdf_txt_Content"},Ot={class:"title_pdfBox"},Qt=t("h3",null,"Quick Start Guide",-1),Xt=t("h4",null,"\u5F8C\u53F0\u64CD\u4F5C\u8AAA\u660E\u624B\u518A",-1),Ut=t("img",{class:"pdf_logo",src:Rt},null,-1),qt=t("img",{class:"pdf_text",src:Nt},null,-1),zt=t("img",{class:"pdf_bg",src:Tt},null,-1);function Wt(a,e,l,n,o,s){const p=b("penicon");return d(),u("div",Gt,[t("div",Ht,[t("div",Ot,[t("h2",{id:"pdftitle_1",class:P(["Edit",l.prop1]),onClick:e[0]||(e[0]=(...r)=>s.updateParentData&&s.updateParentData(...r)),"data-bs-toggle":"modal","data-bs-target":"#txtModal"},v(l.prop2)+"\u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71",3),f(p,{class:P(l.prop1)},null,8,["class"])]),Qt,Xt]),Ut,qt,zt])}const Zt=x(jt,[["render",Wt]]),Jt={props:{prop1:{type:String,required:!0}},components:{penicon:F},mounted(){this.$refs.PdfHTML.innerHTML=this.prop1}},Kt={class:"A4_Content_p2 position-relative"},Yt={class:"pdf_txt2_Content"},te=t("h2",null,"\u76EE\u9304",-1),ee={class:"Pdf_Page_List d-flex"},oe=t("div",{class:"page_2"},[t("p",null,"(\u4E00) \u5F8C\u53F0\u9996\u9801.................................1")],-1),ae={class:"page_2"},ne={ref:"PdfHTML"};function se(a,e,l,n,o,s){return d(),u("div",Kt,[t("div",Yt,[te,t("div",ee,[oe,t("div",ae,[t("div",ne,null,512)])])])])}const le=x(Jt,[["render",se]]),re=[{title:"\u3010\u6CE8\u610F\u4E8B\u9805\u3011",contents:"<p class='red'>\u3010\u6CE8\u610F\u4E8B\u9805\u3011</p><ol><li>\u56E0\u70BA\u6709\u5E6B\u60A8\u505A\u9632\u6B62XSS(Cross-Site Scripting)\u8DE8\u7AD9\u8173\u672C\u653B\u64CA\uFF0C\u6240\u4EE5\u5728\u7DE8\u8F2F\u6642\uFF0C\u700F\u89BD\u5668\u82E5\u540C\u6642\u958B\u555F\u5169\u500B\u4E0D\u540C\u529F\u80FD\u4F46\u7686\u6709\u8868\u55AE\u7684\u7DB2\u9801\uFF0C\u5247\u5148\u958B\u555F\u7684\u7DB2\u9801\u9001\u51FA\u7DE8\u8F2F\u5167\u5BB9\u5C31\u6703\u5931\u6548\u3002</li><li>\u5EFA\u8B70\u7DE8\u8F2F\u6642\uFF0C\u53EA\u958B\u4E00\u500B\u5F8C\u53F0\u7DB2\u9801\uFF0C\u4E0D\u8981\u540C\u6642\u958B\u555F\u5169\u500B\u5F8C\u53F0\u8996\u7A97\u9801\u9762\u7DE8\u8F2F\u3002 </li></ol>"}],ie={pdf_p2:re},ce={name:"Canvas",components:{Breadcrumb:$,html2pdf:E,penicon:F,A4_Content_p1:Zt,A4_Content_p2:le,QuillEditor:U},data(){return{SelsctArray:[],crumb:"Html\u8F49PDF",pdftitle1:"\u9810\u8A2D",modalInputValue:"",modalInputId:"",EditClass:"active",QuillShow:"d-none",ModalInputShow:"",pdftitle2:"<p class='red'>\u9810\u8A2D\u6E2C\u8A66</p>",content:"",contentType:"html"}},mounted(){this.$nextTick(()=>{const a=this.$refs.pdfContent,e={filename:"my-first-pdf.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:4},jsPDF:{unit:"in",format:"a4",orientation:"landscape"}};this.generatePDF=()=>{this.EditClass="",E().from(a).set(e).save()}})},methods:{openModal(){},getModalPdf_2(){this.modalInputId="pdf_p2",this.QuillShow="",this.ModalInputShow="d-none",console.log(ie)},saveModalInputValue(){const a=this.modalInputValue;this.modalInputId,this.pdftitle1=a}}},de=t("p",null,"\u8AAA\u660E : \u5C55\u793A PDF\u7E6A\u88FD\u6210\u679C",-1),pe={class:"A4_box"},ue={class:"A4_Content",ref:"pdfContent"},_e={class:"modal fade",id:"txtModal",tabindex:"-1","aria-labelledby":"txtModalLabel","aria-hidden":"true"},fe={class:"modal-dialog"},me={class:"modal-content"},he=t("div",{class:"modal-header"},[t("h1",{class:"modal-title fs-5",id:"txtModalLabel"},"\u6587\u5B57\u4FEE\u6539"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),be={class:"modal-body"},ge={class:"modal-footer"},ve=t("button",{type:"button",class:"btn btn-secondary",id:"closeModal","data-bs-dismiss":"modal"},"\u95DC\u9589",-1);function xe(a,e,l,n,o,s){const p=$,r=b("A4_Content_p1"),m=b("A4_Content_p2"),h=b("QuillEditor");return d(),u("div",null,[f(p,{exampleProp:o.crumb},null,8,["exampleProp"]),t("h3",null,v(o.crumb),1),de,t("button",{class:"mb-2",onClick:e[0]||(e[0]=(..._)=>a.generatePDF&&a.generatePDF(..._))},"\u532F\u51FA PDF"),t("div",pe,[t("div",ue,[f(r,{prop1:o.EditClass,prop2:o.pdftitle1,data:o.modalInputId,onUpdateData:e[1]||(e[1]=_=>o.modalInputId=_)},null,8,["prop1","prop2","data"]),f(m,{prop1:o.pdftitle2,onClick:e[2]||(e[2]=_=>s.getModalPdf_2()),"data-bs-toggle":"modal","data-bs-target":"#txtModal"},null,8,["prop1"])],512)]),t("div",_e,[t("div",fe,[t("div",me,[he,t("div",be,[M(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=_=>o.modalInputId=_)},null,512),[[B,o.modalInputId]]),M(t("input",{type:"text",class:P(["form-control",o.ModalInputShow]),"onUpdate:modelValue":e[4]||(e[4]=_=>o.modalInputValue=_)},null,2),[[B,o.modalInputValue]]),t("div",{class:P(o.QuillShow)},[f(h,{theme:"snow",modelValue:o.content,"onUpdate:modelValue":e[5]||(e[5]=_=>o.content=_)},null,8,["modelValue"])],2)]),t("div",ge,[ve,t("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(..._)=>s.saveModalInputValue&&s.saveModalInputValue(..._))},"\u4FEE\u6539")])])])])])}const R=x(ce,[["render",xe]]),ye=t("option",{disabled:"",value:""},"Please select one",-1),Ce=t("option",null,"A",-1),$e=t("option",null,"B",-1),ke=t("option",null,"C",-1),De=[ye,Ce,$e,ke],Se={name:"About"},we=Object.assign(Se,{setup(a){const e=D("");return(l,n)=>(d(),u("div",null,[t("span",null," Selected: "+v(e.value),1),M(t("select",{"onUpdate:modelValue":n[0]||(n[0]=o=>e.value=o)},De,512),[[G,e.value]])]))}}),I=[{\u5E74\u5225:"2013\u5E74",\u5973\u602715\u81F319\u6B72:"3.6",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"19.8",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"55.7",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"73.8",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"34.5",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"5.3",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.3",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"965",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2014\u5E74",\u5973\u602715\u81F319\u6B72:"3.6",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"19.4",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"59.7",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"81.3",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"39.2",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"5.9",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.2",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"1046.5",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2015\u5E74",\u5973\u602715\u81F319\u6B72:"3.6",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"20",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"59.5",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"81.8",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"40.8",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"6.8",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.3",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"1064",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2016\u5E74",\u5973\u602715\u81F319\u6B72:"3.3",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"19.5",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"54.8",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"81.4",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"42.4",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"7.5",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.32276",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"1040",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2017\u5E74",\u5973\u602715\u81F319\u6B72:"3.203797862",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"18.96025832",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"53.12423752",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"75.45695046",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"42.89416117",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"8.296201259",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.376364321",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"1005",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2018\u5E74",\u5973\u602715\u81F319\u6B72:"3",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"19",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"51",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"76",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"43",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"9",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.43913",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"1005",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"},{\u5E74\u5225:"2019\u5E74",\u5973\u602715\u81F319\u6B72:"3",\u7537\u602715\u81F319\u6B72:"-",\u5973\u602720\u81F324\u6B72:"19",\u7537\u602720\u81F324\u6B72:"-",\u5973\u602725\u81F329\u6B72:"50",\u7537\u602725\u81F329\u6B72:"-",\u5973\u602730\u81F334\u6B72:"74",\u7537\u602730\u81F334\u6B72:"-",\u5973\u602735\u81F339\u6B72:"43",\u7537\u602735\u81F339\u6B72:"-",\u5973\u602740\u81F344\u6B72:"9",\u7537\u602740\u81F344\u6B72:"-",\u5973\u602745\u81F349\u6B72:"0.49501",\u7537\u602745\u81F349\u6B72:"-",\u5973\u6027\u7E3D\u751F\u80B2\u7387:"990",\u7537\u6027\u7E3D\u751F\u80B2\u7387:"-"}],Ae={name:"Ghart",components:{Vue3ChartJs:q,Breadcrumb:$},setup(){let a=["15\u81F319\u6B72","20\u81F324\u6B72","25\u81F329\u6B72","30\u81F334\u6B72","35\u81F339\u6B72","40\u81F344\u6B72","45\u81F349\u6B72"],e=[];I.forEach(i=>{e.push({year:i.\u5E74\u5225,D1:i["\u5973\u6027"+a[0]],D2:i["\u5973\u6027"+a[1]],D3:i["\u5973\u6027"+a[2]],D4:i["\u5973\u6027"+a[3]],D5:i["\u5973\u6027"+a[4]],D6:i["\u5973\u6027"+a[5]],D7:i["\u5973\u6027"+a[6]]})});let l=e[0],n=[];a.forEach((i,w)=>{let c=Number(w+1);n.push(Number(l["D"+c]))});const o=D(null),s=D(null),p=D(null),r={id:"barChart",type:"bar",data:{labels:a,datasets:[{label:l.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:n}]},options:{responsive:!0,color:"#a9a9a9",scales:{y:{ticks:{color:"#a9a9a9",beginAtZero:!1}},x:{ticks:{color:"#a9a9a9",beginAtZero:!1}}}}},m={id:"pieChart",type:"pie",data:{labels:a,datasets:[{label:l.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",borderWidth:1,color:"#FFFF",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:n}]},options:{color:"#a9a9a9"}},h={id:"lineChart",type:"line",data:{labels:a,datasets:[{label:l.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",color:"#FFFF",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:n}]},options:{responsive:!0,color:"#a9a9a9",borderColor:"#FFF",borderWidth:1,scales:{y:{ticks:{color:"#a9a9a9",beginAtZero:!1}},x:{ticks:{color:"#a9a9a9",beginAtZero:!1}}}}};return{barChart:r,chartRef:o,updateChart:i=>{let c=i.target.value,g=I.filter(V=>V.\u5E74\u5225==c),y=[];y={year:g[0].\u5E74\u5225,D1:g[0]["\u5973\u6027"+a[0]],D2:g[0]["\u5973\u6027"+a[1]],D3:g[0]["\u5973\u6027"+a[2]],D4:g[0]["\u5973\u6027"+a[3]],D5:g[0]["\u5973\u6027"+a[4]],D6:g[0]["\u5973\u6027"+a[5]],D7:g[0]["\u5973\u6027"+a[6]]};let C=[];a.forEach((V,T)=>{let j=Number(T+1);C.push(Number(y["D"+j]))}),r.data.labels=a,r.data.datasets=[{label:y.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:C}],o.value.update(250),m.data.labels=a,m.data.datasets=[{label:y.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:C}],s.value.update(250),h.data.labels=a,h.data.datasets=[{label:y.year+"\u9AD8\u96C4\u5E02\u5E74\u9F61\u5225\u53CA\u7E3D\u751F\u80B2\u7387",backgroundColor:["#f14886","#eda863","#f1cb6f","#60ffff","#49abf1","#a87afb","rgba(201, 203, 207, 0.2)"],data:C}],p.value.update(250)},pieChart:m,chartRefs:s,lineChart:h,chartRefline:p}},data(){return{SelsctArray:[],crumb:"\u8CC7\u8A0A\u5716\u8868\u4E32\u63A5"}},mounted(){I.forEach(a=>{this.SelsctArray.push(a.\u5E74\u5225)})}},Pe=t("h3",null,"\u8CC7\u8A0A\u5716\u8868\u4E32\u63A5",-1),Ie=t("p",null,"\u8AAA\u660E : \u5C55\u793A Chart.js \u4E32\u63A5\u6210\u679C",-1),Me={class:"mb-3 ChartSelect"},Fe={class:"d-flex flex-wrap"},Le={class:"chartbox d-flex align-items-center mb-3"},Ve={class:"chartbox mb-3"},Be={class:"chartbox d-flex align-items-center mb-3"};function Ee(a,e,l,n,o,s){const p=$,r=b("vue3-chart-js");return d(),u("div",null,[f(p,{exampleProp:o.crumb},null,8,["exampleProp"]),Pe,Ie,t("div",Me,[t("select",{class:"form-select bg-dark border-0 text-white",onChange:e[0]||(e[0]=(...m)=>n.updateChart&&n.updateChart(...m))},[(d(!0),u(S,null,A(o.SelsctArray,(m,h)=>(d(),u("option",{key:h},v(m),1))),128))],32)]),t("div",Fe,[t("div",Le,[f(r,{id:n.barChart.id,ref:"chartRef",type:n.barChart.type,data:n.barChart.data,options:n.barChart.options},null,8,["id","type","data","options"])]),t("div",Ve,[f(r,{id:n.pieChart.id,ref:"chartRefs",type:n.pieChart.type,data:n.pieChart.data,options:n.pieChart.options},null,8,["id","type","data","options"])]),t("div",Be,[f(r,{id:n.lineChart.id,ref:"chartRefline",type:n.lineChart.type,data:n.lineChart.data,options:n.lineChart.options},null,8,["id","type","data","options"])])])])}const Re=x(Ae,[["render",Ee]]),Ne={name:"Canvas",components:{Breadcrumb:$},data(){return{SelsctArray:[],crumb:"Canvas\u7E6A\u88FD\u5716\u8868",xwidth:400,xheight:330,borderColor:"rgb(163 163 163 / 25%)",TextArray:["A\u8A08\u756B","B\u8A08\u756B","C\u8A08\u756B","D\u8A08\u756B","E\u8A08\u756B","F\u8A08\u756B"],ColorArray:["rgb(255,130,157)","rgb(255,215,120)","rgb(111,205,205)","rgb(255,130,157)","rgb(255,215,120)","rgb(111,205,205)"]}},mounted:function(){this.setImage()},methods:{async setImage(){let e=document.getElementById("canvas").getContext("2d"),l=53,n="#a9a9a9",o=25,s=225,p=40,r=300,m=250;e.fillStyle="#212529",e.fillRect(0,0,400,350);for(let c=0;c<6;c++){let g=50+c*10,y=6+l+c*p+c*10,C=m-g;e.fillStyle=this.ColorArray[c],e.fillRect(y,C+30,p,g)}var h=11;for(let c=1;c<h;c++)e.fillStyle=n,e.fillText(100-c*10,o+10,25*c+35),e.fillStyle=this.borderColor,e.fillRect(l,25*c+30,r,1);var _=6;let i=1;for(let c=0;c<_;c++){this.TextArray[c]!=null&&(e.fillStyle=n,e.textAlign="center",e.fillText(this.TextArray[c],50*i+30,262+30));var w=250-50*c;e.fillStyle=this.borderColor,e.fillRect(w+l,o+30,1,s),i++}e.fillStyle=this.borderColor,e.fillRect(r+l,25+30,1,m-25),e.fillStyle=this.borderColor,e.fillRect(l,25+30,1,m-25),e.fillStyle=this.borderColor,e.fillRect(l,m+30,r,1)}}},Te=t("p",null,"\u8AAA\u660E : \u5C55\u793A Canvas\u7E6A\u88FD\u6210\u679C",-1),je={class:"row ps-1"},Ge={class:"col-4"},He={id:"canvasBox"},Oe=["width","height"];function Qe(a,e,l,n,o,s){const p=$;return d(),u("div",null,[f(p,{exampleProp:o.crumb},null,8,["exampleProp"]),t("h3",null,v(o.crumb),1),Te,t("div",je,[t("div",Ge,[t("div",He,[t("canvas",{id:"canvas",width:o.xwidth,height:o.xheight},null,8,Oe)])])])])}const Xe=x(Ne,[["render",Qe]]),Ue={name:"Contact",components:{XlsxRead:z,XlsxJson:W,XlsxWorkbook:Z,XlsxSheet:J,XlsxDownload:K},data(){return{file:null,sheets:[{name:"SheetOne",data:[{c:2}]}]}},methods:{onChange(a){this.file=a.target.files?a.target.files[0]:null}}},qe=t("button",null,"Download",-1);function ze(a,e,l,n,o,s){const p=b("xlsx-json"),r=b("xlsx-read"),m=b("xlsx-sheet"),h=b("xlsx-download"),_=b("xlsx-workbook");return d(),u("section",null,[t("input",{type:"file",onChange:e[0]||(e[0]=(...i)=>s.onChange&&s.onChange(...i))},null,32),f(r,{file:o.file},{default:k(()=>[f(p,{sheet:a.selectedSheet},{default:k(({collection:i})=>[t("div",null,v(i),1)]),_:1},8,["sheet"])]),_:1},8,["file"]),f(_,null,{default:k(()=>[(d(!0),u(S,null,A(o.sheets,i=>(d(),H(m,{collection:i.data,key:i.name,"sheet-name":i.name},null,8,["collection","sheet-name"]))),128)),f(h,null,{default:k(()=>[qe]),_:1})]),_:1})])}const We=x(Ue,[["render",ze]]);let Ze=Q(),Je=[{path:"/",name:"Index",props:a=>a.params,component:R},{path:"/About",name:"About",component:we},{path:"/Ghart/:id",name:"Ghart",component:Re},{path:"/Canvas/:id",name:"Canvas",component:Xe},{path:"/Contact/:id",name:"Contact",component:We},{path:"/Pdf/:id",name:"Pdf",component:R}];const Ke=X({history:Ze,routes:Je});const L=O(Dt);ot.add(at,nt,st,lt);L.component("font-awesome-icon",rt);L.use(et);L.use(Ke).use(Y,tt).mount("#app");