import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterService } from './../../../../services/CRUD/CATASTRO/register.service';
import { Register } from './../../../../models/CATASTRO/Register';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registers: Register[] = [];
   registerSelected: Register = new Register();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   search_ruc = '';
   filter_activity = 'all';
   SRIOK = false;
   rucSelectedData = '';
   activities = [];

   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private dinardapDataService: DinardapService,
               private registerDataService: RegisterService) {}

   ngOnInit() {
      this.refresh();
   }

   refresh() {
      this.currentPage = 1;
      this.lastPage = 1;
      this.showDialog = false;
      this.recordsByPage = 5;
      this.search_ruc = '';
      this.goToPage(1);
      this.getActivities();
   }

   selectRegister(register: Register) {
      this.registerSelected = register;
      this.getRucDataDinardap(register.ruc.toString());
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisters();
   }

   georeferenceEvent(event) {
      this.registerSelected.georeference_latitude = event.coords.lat;
      this.registerSelected.georeference_longitude = event.coords.lng;
   }

   getByRuc() {
      this.registerDataService.searchByRuc(this.search_ruc).then( r => {
         if (r == 0) {
            this.toastr.errorToastr('No se encontraron registros.', 'Error');
            this.refresh();
         } else {
            this.currentPage = 1;
            this.lastPage = 1;
            this.showDialog = false;
            this.registers = r as Register[];           
         }
      }).catch( e => { console.log(e); });
   }

   getActivities() {
      this.registerDataService.getActivities().then( r => {
         this.activities = r;
      }).catch( e => { console.log(e); });
   }

   getRucDataDinardap(search_ruc: String) {
      this.rucSelectedData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
      let rucData = '';
      if (search_ruc.length !== 13) {
        rucData = 'RUC INCORRECTO'
        this.rucSelectedData = rucData;
      }
      this.dinardapDataService.get_RUC(search_ruc).then( r => {
           this.SRIOK = true; 
           const itemsDetalles_SRI_RUC = r.sri_ruc.original.entidades.entidad.filas.fila.columnas.columna;
           const itemsDetalles_SRI_RUC_COMPLETO = r.sri_ruc_completo.original.entidades.entidad;
           rucData = '';
           let datosGenerales = '';
           let datosRL = '';
           let datosAE = '';
           let datosContactoSRI = '';
           itemsDetalles_SRI_RUC_COMPLETO.forEach(entidad => {
              if (entidad.nombre == 'Actividad Economica') {
                 const AE = entidad.filas.fila.columnas.columna;
                 AE.forEach(element => {
                    if (element.campo == 'actividadGeneral') {
                       datosAE += '<strong>Actividad Económica: </strong> ' + element.valor + '<br/>';
                    }
                 });
              }
              if (entidad.nombre == 'Contribuyente Datos Completo') {
                 const DC = entidad.filas.fila.columnas.columna;
                 DC.forEach(element => {
                    if (element.campo == 'razonSocial') {
                       datosGenerales += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
                    }
                    if (element.campo == 'email') {
                       if (JSON.stringify(element.valor) !== '{}') {
                          datosContactoSRI += '<strong>Correo Electrónico - Registrado en SRI: </strong> ' + element.valor + '<br/>';
                       }
                    }
                    if (element.campo == 'telefonoDomicilio') {
                       if (JSON.stringify(element.valor) !== '{}') {
                          datosContactoSRI += '<strong>Teléfono Domicilio - Registrado en SRI: </strong> ' + element.valor + '<br/>';
                       }
                    }
                 });
              }
              if (entidad.nombre == 'Representante Legal') {
                 const RL = entidad.filas.fila.columnas.columna;
                 RL.forEach(element => {
                    if (element.campo == 'identificacion') {
                       datosRL += '<strong>Identificación Representante Legal: </strong> ' + element.valor + '<br/>';
                    }
                    if (element.campo == 'nombre') {
                       datosRL += '<strong>Nombre Representante Legal: </strong> ' + element.valor + '<br/>';
                    }
                 });
              }
           });
           itemsDetalles_SRI_RUC.forEach(element => {
              if (element.campo == 'estadoContribuyente') {
                 datosGenerales += '<strong>Estado Contribuyente: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo == 'fechaInscripcionRuc') {
                 datosGenerales += '<strong>Fecha de Inscripción del RUC: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo == 'fechaActualizacion') {
                 datosGenerales += '<strong>Fecha de Actualización: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo == 'obligado') {
                 if (element.valor == 'N') {
                    datosGenerales += '<strong>Obligado a Llevar Contabilidad: </strong> NO<br/>';
                 } else {
                    datosGenerales += '<strong>Obligado a Llevar Contabilidad: </strong> SI<br/>';
                 }
              }
              let PersonaNatural = false;
              if (element.campo == 'personaSociedad') {
                 if (element.valor == 'PNL') {
                  PersonaNatural = true;
                 } else {
                  PersonaNatural = false
                 }
                 datosGenerales += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
              }
              rucData = datosGenerales + datosAE + datosContactoSRI;
              if (PersonaNatural) {
                 rucData += datosRL;
              }
              this.rucSelectedData = rucData;
           });
        }).catch( e => {
           console.log(e);
           rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
           this.SRIOK = false;
           this.rucSelectedData = rucData;
        });
    }
  
   
   getRegisters() {
      this.registers = [];
      this.registerSelected = new Register();
      this.registerDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.registers = r.data as Register[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegister(content) {
      this.registerSelected = new Register();
      this.openDialog(content);
   }

   editRegister(content) {
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegister() {
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.registerDataService.delete(this.registerSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisters();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.registerDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Registers.json');
      }).catch( e => console.log(e) );
   }

   downloadByActivity() {
      if (this.filter_activity == 'all'){
         this.toCSV();
      }else {
         this.registerDataService.searchFiltered(this.filter_activity).then( r => {
            const backupData = r as Register[];
            let output = 'id;ruc;comercial_name;register_code;as_turistic_date;activity;category;classification;legal_representant_name;legal_representant_identification;establishment_property_type;organization_type;ubication_main;ubication_sencond;ubication_third;address;main_phone_number;secondary_phone_number;email;web;system_source;georeference_latitude;georeference_longitude;establishment_ruc_code;max_capacity;max_areas;total_male;total_female;ruc_state;max_beds;establishment_state\n';
            backupData.forEach(element => {
               output += element.id + ';' + + element.ruc + ';' + element.comercial_name + ';' + element.register_code + ';' + element.as_turistic_date + ';' + element.activity + ';' + element.category + ';' + element.classification + ';' + element.legal_representant_name + ';' + element.legal_representant_identification + ';' + element.establishment_property_type + ';' + element.organization_type + ';' + element.ubication_main + ';' + element.ubication_sencond + ';' + element.ubication_third + ';' + element.address + ';' + element.main_phone_number + ';' + element.secondary_phone_number + ';' + element.email + ';' + element.web + ';' + element.system_source + ';' + element.georeference_latitude + ';' + element.georeference_longitude + ';' + element.establishment_ruc_code + ';' + element.max_capacity + ';' + element.max_areas + ';' + element.total_male + ';' + element.total_female + ';' + element.ruc_state + ';' + element.max_beds + ';' + element.establishment_state + '\n';
            });
            const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
            const fecha = new Date();
            saveAs(blob, fecha.toLocaleDateString() + '_Registers.csv');
         }).catch( e => console.log(e) );
      }
   }

   toCSV() {
      this.registerDataService.get().then( r => {
         const backupData = r as Register[];
         let output = 'id;ruc;comercial_name;register_code;as_turistic_date;activity;category;classification;legal_representant_name;legal_representant_identification;establishment_property_type;organization_type;ubication_main;ubication_sencond;ubication_third;address;main_phone_number;secondary_phone_number;email;web;system_source;georeference_latitude;georeference_longitude;establishment_ruc_code;max_capacity;max_areas;total_male;total_female;ruc_state;max_beds;establishment_state\n';
         backupData.forEach(element => {
            output += element.id + ';' + + element.ruc + ';' + element.comercial_name + ';' + element.register_code + ';' + element.as_turistic_date + ';' + element.activity + ';' + element.category + ';' + element.classification + ';' + element.legal_representant_name + ';' + element.legal_representant_identification + ';' + element.establishment_property_type + ';' + element.organization_type + ';' + element.ubication_main + ';' + element.ubication_sencond + ';' + element.ubication_third + ';' + element.address + ';' + element.main_phone_number + ';' + element.secondary_phone_number + ';' + element.email + ';' + element.web + ';' + element.system_source + ';' + element.georeference_latitude + ';' + element.georeference_longitude + ';' + element.establishment_ruc_code + ';' + element.max_capacity + ';' + element.max_areas + ';' + element.total_male + ';' + element.total_female + ';' + element.ruc_state + ';' + element.max_beds + ';' + element.establishment_state + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Registers.csv');
      }).catch( e => console.log(e) );
   }

   decodeUploadFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            const fileBytes = reader.result.toString().split(',')[1];
            const newData = JSON.parse(decodeURIComponent(escape(atob(fileBytes)))) as any[];
            this.registerDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.registerSelected.id === 'undefined') {
               this.registerDataService.post(this.registerSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisters();
               }).catch( e => console.log(e) );
            } else {
               this.registerDataService.put(this.registerSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisters();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}