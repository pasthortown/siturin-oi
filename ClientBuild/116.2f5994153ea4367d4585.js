(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"5Eyp":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("Ip0R"),c=u("gIcY"),r=u("XgrQ"),a=u("+o/m"),d=u("JEAp"),s=u("D8fh"),f=function(){return function(){}}(),p=u("jUMD"),g=function(){function l(l,n,u,e){this.modalService=l,this.toastr=n,this.procedureDataService=u,this.procedure_justificationDataService=e,this.procedure_justifications=[],this.procedure_justificationSelected=new f,this.currentPage=1,this.lastPage=1,this.showDialog=!1,this.recordsByPage=5,this.procedures=[]}return l.prototype.ngOnInit=function(){this.goToPage(1),this.getProcedure()},l.prototype.selectProcedureJustification=function(l){this.procedure_justificationSelected=l},l.prototype.getProcedure=function(){var l=this;this.procedures=[],this.procedureDataService.get().then(function(n){l.procedures=n}).catch(function(l){return console.log(l)})},l.prototype.goToPage=function(l){l<1||l>this.lastPage?this.toastr.errorToastr("La p\xe1gina solicitada no existe.","Error"):(this.currentPage=l,this.getProcedureJustifications())},l.prototype.getProcedureJustifications=function(){var l=this;this.procedure_justifications=[],this.procedure_justificationSelected=new f,this.procedure_justificationSelected.procedure_id=0,this.procedure_justificationDataService.get_paginate(this.recordsByPage,this.currentPage).then(function(n){l.procedure_justifications=n.data,l.lastPage=n.last_page}).catch(function(l){return console.log(l)})},l.prototype.newProcedureJustification=function(l){this.procedure_justificationSelected=new f,this.procedure_justificationSelected.procedure_id=0,this.openDialog(l)},l.prototype.editProcedureJustification=function(l){void 0!==this.procedure_justificationSelected.id?this.openDialog(l):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.deleteProcedureJustification=function(){var l=this;void 0!==this.procedure_justificationSelected.id?this.procedure_justificationDataService.delete(this.procedure_justificationSelected.id).then(function(n){l.toastr.successToastr("Registro Borrado satisfactoriamente.","Borrar"),l.getProcedureJustifications()}).catch(function(l){return console.log(l)}):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.backup=function(){this.procedure_justificationDataService.getBackUp().then(function(l){var n=new Blob([JSON.stringify(l)],{type:"text/plain"}),u=new Date;Object(d.saveAs)(n,u.toLocaleDateString()+"_ProcedureJustifications.json")}).catch(function(l){return console.log(l)})},l.prototype.toCSV=function(){this.procedure_justificationDataService.get().then(function(l){var n="id;justification;procedure_id\n";l.forEach(function(l){n+=l.id});var u=new Blob([n],{type:"text/plain"}),e=new Date;Object(d.saveAs)(u,e.toLocaleDateString()+"_ProcedureJustifications.csv")}).catch(function(l){return console.log(l)})},l.prototype.decodeUploadFile=function(l){var n=this,u=new FileReader;l.target.files&&l.target.files.length>0&&(u.readAsDataURL(l.target.files[0]),u.onload=function(){var l=u.result.toString().split(",")[1],e=JSON.parse(decodeURIComponent(escape(atob(l))));n.procedure_justificationDataService.masiveLoad(e).then(function(l){n.goToPage(n.currentPage)}).catch(function(l){return console.log(l)})})},l.prototype.openDialog=function(l){var n=this;this.modalService.open(l,{centered:!0,size:"lg"}).result.then(function(l){"Guardar click"===l&&(void 0===n.procedure_justificationSelected.id?n.procedure_justificationDataService.post(n.procedure_justificationSelected).then(function(l){n.toastr.successToastr("Datos guardados satisfactoriamente.","Nuevo"),n.getProcedureJustifications()}).catch(function(l){return console.log(l)}):n.procedure_justificationDataService.put(n.procedure_justificationSelected).then(function(l){n.toastr.successToastr("Registro actualizado satisfactoriamente.","Actualizar"),n.getProcedureJustifications()}).catch(function(l){return console.log(l)}))},function(l){})},l}(),v=u("4GxJ"),m=u("3EpR"),b=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","far fa-hand-point-right"]],null,null,null,null,null))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"tr",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.selectProcedureJustification(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](3,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""]))],function(l,n){l(n,3,0,n.component.procedure_justificationSelected===n.context.$implicit)},function(l,n){l(n,5,0,n.context.$implicit.justification)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","Primera P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function j(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","Primera P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToPage(1)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Anterior"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.goToPage(1*t.currentPage-1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage-1)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Siguiente"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.goToPage(1*t.currentPage+1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage+1)})}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","\xdaltima P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.goToPage(t.lastPage)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","\xdaltima P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,c.n,[e.ElementRef,e.Renderer2,[2,c.o]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,c.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))},function(l,n){l(n,3,0,n.context.$implicit.id)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Datos:"])),(l()(),e["\u0275eld"](3,0,null,null,2,"button",[["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.dismiss("Cross click")&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xd7"])),(l()(),e["\u0275eld"](6,0,null,null,28,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,26,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,9,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","justification"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["justification"])),(l()(),e["\u0275eld"](12,0,null,null,6,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,5,"ck-editor",[["id","justification"],["name","justification"],["skin","moono-lisa"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.procedure_justificationSelected.justification=u)&&e),e},r.b,r.a)),e["\u0275did"](14,9158656,null,0,a.a,[e.NgZone,e.ElementRef],{skin:[0,"skin"],id:[1,"id"]},null),e["\u0275prd"](1024,null,c.h,function(l){return[l]},[a.a]),e["\u0275did"](16,671744,null,0,c.m,[[8,null],[8,null],[8,null],[6,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,c.i,null,[c.m]),e["\u0275did"](18,16384,null,0,c.j,[[4,c.i]],null,null),(l()(),e["\u0275eld"](19,0,null,null,15,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","procedure_id"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Procedure"])),(l()(),e["\u0275eld"](22,0,null,null,12,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,11,"select",[["class","form-control"],["id","procedure_id"],["name","procedure_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,i=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,24).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,24).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(i.procedure_justificationSelected.procedure_id=u)&&t),t},null,null)),e["\u0275did"](24,16384,null,0,c.o,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,c.h,function(l){return[l]},[c.o]),e["\u0275did"](26,671744,null,0,c.m,[[8,null],[8,null],[8,null],[6,c.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,c.i,null,[c.m]),e["\u0275did"](28,16384,null,0,c.j,[[4,c.i]],null,null),(l()(),e["\u0275eld"](29,0,null,null,3,"option",[["selected",""],["value","0"]],null,null,null,null,null)),e["\u0275did"](30,147456,null,0,c.n,[e.ElementRef,e.Renderer2,[2,c.o]],{value:[0,"value"]},null),e["\u0275did"](31,147456,null,0,c.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Seleccione..."])),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](34,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](35,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,1,"button",[["class","btn btn-outline-success"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Guardar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Guardar"])),(l()(),e["\u0275eld"](38,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Cancelar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Cancelar"]))],function(l,n){var u=n.component;l(n,14,0,"moono-lisa","justification"),l(n,16,0,"justification",u.procedure_justificationSelected.justification),l(n,26,0,"procedure_id",u.procedure_justificationSelected.procedure_id),l(n,30,0,"0"),l(n,31,0,"0"),l(n,34,0,u.procedures)},function(l,n){l(n,13,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,23,0,e["\u0275nov"](n,28).ngClassUntouched,e["\u0275nov"](n,28).ngClassTouched,e["\u0275nov"](n,28).ngClassPristine,e["\u0275nov"](n,28).ngClassDirty,e["\u0275nov"](n,28).ngClassValid,e["\u0275nov"](n,28).ngClassInvalid,e["\u0275nov"](n,28).ngClassPending)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[["class","col-12 text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" ProcedureJustification "])),(l()(),e["\u0275eld"](3,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,19,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary"],["title","Actualizar"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.goToPage(t.currentPage)&&e),e},null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","fas fa-sync"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-success"],["title","Nuevo"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.newProcedureJustification(e["\u0275nov"](l,60))&&t),t},null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","fas fa-file"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-warning"],["title","Editar"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editProcedureJustification(e["\u0275nov"](l,60))&&t),t},null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-edit"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-danger"],["title","Eliminar"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteProcedureJustification()&&e),e},null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"i",[["class","fas fa-trash"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,7,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"button",[["class","btn btn-dark"],["title","BackUp"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.backup()&&e),e},null,null)),(l()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","fas fa-download"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"button",[["class","btn btn-dark"],["title","Exportar CSV"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toCSV()&&e),e},null,null)),(l()(),e["\u0275eld"](21,0,null,null,0,"i",[["class","fas fa-file-csv"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-dark"],["title","Cargar"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,24).click()&&t),t},null,null)),(l()(),e["\u0275eld"](23,0,null,null,0,"i",[["class","fas fa-upload"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,[["uploadInput",1]],null,0,"input",[["accept",".json"],["class","form-control"],["type","file"]],[[8,"hidden",0]],[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.decodeUploadFile(u)&&e),e},null,null)),(l()(),e["\u0275eld"](25,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,10,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,9,"table",[["class","table table-hover mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Seleccionado"])),(l()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["justification"])),(l()(),e["\u0275eld"](34,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](36,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](37,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,20,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,14,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](42,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,j)),e["\u0275did"](44,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](46,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](47,0,null,null,1,"button",[["class","btn btn-primary"],["title","P\xe1gina Actual"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](48,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](50,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](52,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](54,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](55,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"button",[["class","input-group-text btn btn-success"],["title","Ir a la P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToPage(e["\u0275nov"](l,59).value)&&t),t},null,null)),(l()(),e["\u0275ted"](-1,null,["Ir a"])),(l()(),e["\u0275eld"](59,0,[["goToPageNumber",1]],null,0,"input",[["class","form-control"],["placeholder","Ir a la P\xe1gina"],["type","number"]],[[8,"min",0],[8,"max",0]],null,null,null,null)),(l()(),e["\u0275and"](0,[["content",2]],null,0,null,I))],function(l,n){var u=n.component;l(n,36,0,u.procedure_justifications),l(n,42,0,1===u.currentPage),l(n,44,0,1!==u.currentPage),l(n,46,0,u.currentPage>1),l(n,50,0,u.currentPage<u.lastPage),l(n,52,0,u.currentPage!==u.lastPage),l(n,54,0,u.currentPage===u.lastPage)},function(l,n){var u=n.component;l(n,24,0,!0),l(n,48,0,u.currentPage),l(n,59,0,e["\u0275inlineInterpolate"](1,"",1,""),e["\u0275inlineInterpolate"](1,"",u.lastPage,""))})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-procedurejustification",[],null,null,null,w,b)),e["\u0275did"](1,114688,null,0,g,[v.y,m.a,p.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var T=e["\u0275ccf"]("app-procedurejustification",g,D,{},{},[]),J=u("sE5F"),x=u("ZYCi"),N=function(){return function(){}}();u.d(n,"ProcedureJustificationModuleNgFactory",function(){return E});var E=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,T]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,c.s,c.s,[]),e["\u0275mpd"](4608,v.y,v.y,[e.ComponentFactoryResolver,e.Injector,v.tb,v.z]),e["\u0275mpd"](4608,p.a,p.a,[J.e,x.l]),e["\u0275mpd"](4608,s.a,s.a,[J.e,x.l]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,x.o,x.o,[[2,x.u],[2,x.l]]),e["\u0275mpd"](1073742336,N,N,[]),e["\u0275mpd"](1073742336,c.p,c.p,[]),e["\u0275mpd"](1073742336,c.e,c.e,[]),e["\u0275mpd"](1073742336,a.b,a.b,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,x.j,function(){return[[{path:"",component:g}]]},[])])})},XgrQ:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u.d(n,"b",function(){return i});var e=u("CcnG"),t=(u("+o/m"),u("gIcY"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function i(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{textareaRef:0}),(l()(),e["\u0275eld"](1,0,[[1,0],["textarea",1]],null,0,"textarea",[],null,null,null,null,null))],null,null)}}}]);