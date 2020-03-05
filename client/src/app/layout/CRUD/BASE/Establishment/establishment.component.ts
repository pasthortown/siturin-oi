import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';
import { Establishment } from './../../../../models/BASE/Establishment';
import { RucService } from './../../../../services/CRUD/BASE/ruc.service';
import { Ruc } from './../../../../models/BASE/Ruc';

import { PreviewRegisterCodeService } from './../../../../services/CRUD/BASE/previewregistercode.service';
import { PreviewRegisterCode } from './../../../../models/BASE/PreviewRegisterCode';

import { LanguageService } from './../../../../services/CRUD/BASE/language.service';
import { Language } from './../../../../models/BASE/Language';

import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { Ubication } from './../../../../models/BASE/Ubication';

import { WorkerService } from './../../../../services/CRUD/BASE/worker.service';
import { Worker } from './../../../../models/BASE/Worker';

import { EstablishmentPropertyTypeService } from './../../../../services/CRUD/BASE/establishmentpropertytype.service';
import { EstablishmentPropertyType } from './../../../../models/BASE/EstablishmentPropertyType';

import { EstablishmentCertificationService } from './../../../../services/CRUD/BASE/establishmentcertification.service';
import { EstablishmentCertification } from './../../../../models/BASE/EstablishmentCertification';

import { RucNameTypeService } from './../../../../services/CRUD/BASE/rucnametype.service';
import { RucNameType } from './../../../../models/BASE/RucNameType';


@Component({
   selector: 'app-establishment',
   templateUrl: './establishment.component.html',
   styleUrls: ['./establishment.component.scss']
})
export class EstablishmentComponent implements OnInit {
   establishments: Establishment[] = [];
   establishmentSelected: Establishment = new Establishment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   rucs: Ruc[] = [];
   preview_register_codes: PreviewRegisterCode[] = [];
   preview_register_codes_establishmentSelectedId: number;
   languages: Language[] = [];
   languages_establishmentSelectedId: number;
   ubications: Ubication[] = [];
   workers: Worker[] = [];
   workers_establishmentSelectedId: number;
   establishment_property_types: EstablishmentPropertyType[] = [];
   establishment_certifications: EstablishmentCertification[] = [];
   establishment_certifications_establishmentSelectedId: number;
   ruc_name_types: RucNameType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private rucDataService: RucService,
               private preview_register_codeDataService: PreviewRegisterCodeService,
               private languageDataService: LanguageService,
               private ubicationDataService: UbicationService,
               private workerDataService: WorkerService,
               private establishment_property_typeDataService: EstablishmentPropertyTypeService,
               private establishment_certificationDataService: EstablishmentCertificationService,
               private ruc_name_typeDataService: RucNameTypeService,
               private establishmentDataService: EstablishmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRuc();
      this.getPreviewRegisterCode();
      this.getLanguage();
      this.getUbication();
      this.getWorker();
      this.getEstablishmentPropertyType();
      this.getEstablishmentCertification();
      this.getRucNameType();
   }

   selectEstablishment(establishment: Establishment) {
      this.establishmentSelected = establishment;
   }

   getRuc() {
      this.rucs = [];
      this.rucDataService.get().then( r => {
         this.rucs = r as Ruc[];
      }).catch( e => console.log(e) );
   }

   getPreviewRegisterCode() {
      this.preview_register_codes = [];
      this.preview_register_codeDataService.get().then( r => {
         this.preview_register_codes = r as PreviewRegisterCode[];
      }).catch( e => console.log(e) );
   }

   getPreviewRegisterCodesOnEstablishment() {
      this.establishmentSelected.preview_register_codes_on_establishment = [];
      this.establishmentDataService.get(this.establishmentSelected.id).then( r => {
         this.establishmentSelected.preview_register_codes_on_establishment = r.attach[0].preview_register_codes_on_establishment as PreviewRegisterCode[];
      }).catch( e => console.log(e) );
   }

   getLanguage() {
      this.languages = [];
      this.languageDataService.get().then( r => {
         this.languages = r as Language[];
      }).catch( e => console.log(e) );
   }

   getLanguagesOnEstablishment() {
      this.establishmentSelected.languages_on_establishment = [];
      this.establishmentDataService.get(this.establishmentSelected.id).then( r => {
         this.establishmentSelected.languages_on_establishment = r.attach[0].languages_on_establishment as Language[];
      }).catch( e => console.log(e) );
   }

   getUbication() {
      this.ubications = [];
      this.ubicationDataService.get().then( r => {
         this.ubications = r as Ubication[];
      }).catch( e => console.log(e) );
   }

   getWorker() {
      this.workers = [];
      this.workerDataService.get().then( r => {
         this.workers = r as Worker[];
      }).catch( e => console.log(e) );
   }

   getWorkersOnEstablishment() {
      this.establishmentSelected.workers_on_establishment = [];
      this.establishmentDataService.get(this.establishmentSelected.id).then( r => {
         this.establishmentSelected.workers_on_establishment = r.attach[0].workers_on_establishment as Worker[];
      }).catch( e => console.log(e) );
   }

   getEstablishmentPropertyType() {
      this.establishment_property_types = [];
      this.establishment_property_typeDataService.get().then( r => {
         this.establishment_property_types = r as EstablishmentPropertyType[];
      }).catch( e => console.log(e) );
   }

   getEstablishmentCertification() {
      this.establishment_certifications = [];
      this.establishment_certificationDataService.get().then( r => {
         this.establishment_certifications = r as EstablishmentCertification[];
      }).catch( e => console.log(e) );
   }

   getEstablishmentCertificationsOnEstablishment() {
      this.establishmentSelected.establishment_certifications_on_establishment = [];
      this.establishmentDataService.get(this.establishmentSelected.id).then( r => {
         this.establishmentSelected.establishment_certifications_on_establishment = r.attach[0].establishment_certifications_on_establishment as EstablishmentCertification[];
      }).catch( e => console.log(e) );
   }

   getRucNameType() {
      this.ruc_name_types = [];
      this.ruc_name_typeDataService.get().then( r => {
         this.ruc_name_types = r as RucNameType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishments();
   }

   address_mapEvent(event) {
      this.establishmentSelected.address_map_latitude = event.coords.lat;
      this.establishmentSelected.address_map_longitude = event.coords.lng;
   }

   getEstablishments() {
      this.establishments = [];
      this.establishmentSelected = new Establishment();
      this.establishmentSelected.ruc_id = 0;
      this.preview_register_codes_establishmentSelectedId = 0;
      this.languages_establishmentSelectedId = 0;
      this.establishmentSelected.ubication_id = 0;
      this.workers_establishmentSelectedId = 0;
      this.establishmentSelected.establishment_property_type_id = 0;
      this.establishment_certifications_establishmentSelectedId = 0;
      this.establishmentSelected.ruc_name_type_id = 0;
      this.establishmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishments = r.data as Establishment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishment(content) {
      this.establishmentSelected = new Establishment();
      this.establishmentSelected.ruc_id = 0;
      this.preview_register_codes_establishmentSelectedId = 0;
      this.languages_establishmentSelectedId = 0;
      this.establishmentSelected.ubication_id = 0;
      this.workers_establishmentSelectedId = 0;
      this.establishmentSelected.establishment_property_type_id = 0;
      this.establishment_certifications_establishmentSelectedId = 0;
      this.establishmentSelected.ruc_name_type_id = 0;
      this.openDialog(content);
   }

   editEstablishment(content) {
      if ( typeof this.establishmentSelected.preview_register_codes_on_establishment === 'undefined' ) {
         this.establishmentSelected.preview_register_codes_on_establishment = [];
      }
      if ( typeof this.establishmentSelected.languages_on_establishment === 'undefined' ) {
         this.establishmentSelected.languages_on_establishment = [];
      }
      if ( typeof this.establishmentSelected.workers_on_establishment === 'undefined' ) {
         this.establishmentSelected.workers_on_establishment = [];
      }
      if ( typeof this.establishmentSelected.establishment_certifications_on_establishment === 'undefined' ) {
         this.establishmentSelected.establishment_certifications_on_establishment = [];
      }
      if (typeof this.establishmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getPreviewRegisterCodesOnEstablishment();
      this.preview_register_codes_establishmentSelectedId = 0;
      this.getLanguagesOnEstablishment();
      this.languages_establishmentSelectedId = 0;
      this.getWorkersOnEstablishment();
      this.workers_establishmentSelectedId = 0;
      this.getEstablishmentCertificationsOnEstablishment();
      this.establishment_certifications_establishmentSelectedId = 0;
      this.openDialog(content);
   }

   deleteEstablishment() {
      if (typeof this.establishmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishmentDataService.delete(this.establishmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Establishments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishmentDataService.get().then( r => {
         const backupData = r as Establishment[];
         let output = 'id;ruc_code_id;commercially_known_name;address_main_street;address_map_latitude;address_map_longitude;url_web;as_turistic_register_date;address_reference;contact_user_id;address_secondary_street;address_number;franchise_chain_name;ruc_id;ubication_id;establishment_property_type_id;ruc_name_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.ruc_code_id + ';' + element.commercially_known_name + ';' + element.address_main_street + ';' + element.address_map_latitude + ';' + element.address_map_longitude + ';' + element.url_web + ';' + element.as_turistic_register_date + ';' + element.address_reference + ';' + element.contact_user_id + ';' + element.address_secondary_street + ';' + element.address_number + ';' + element.franchise_chain_name + ';' + element.ruc_id + ';' + element.ubication_id + ';' + element.establishment_property_type_id + ';' + element.ruc_name_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Establishments.csv');
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
            this.establishmentDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   selectPreviewRegisterCode(preview_register_code: PreviewRegisterCode) {
      this.preview_register_codes_establishmentSelectedId = preview_register_code.id;
   }

   addPreviewRegisterCode() {
      if (this.preview_register_codes_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.preview_register_codes.forEach(preview_register_code => {
         if (preview_register_code.id == this.preview_register_codes_establishmentSelectedId) {
            let existe = false;
            this.establishmentSelected.preview_register_codes_on_establishment.forEach(element => {
               if (element.id == preview_register_code.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.establishmentSelected.preview_register_codes_on_establishment.push(preview_register_code);
               this.preview_register_codes_establishmentSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removePreviewRegisterCode() {
      if (this.preview_register_codes_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newPreviewRegisterCodes: PreviewRegisterCode[] = [];
      let eliminado = false;
      this.establishmentSelected.preview_register_codes_on_establishment.forEach(preview_register_code => {
         if (preview_register_code.id !== this.preview_register_codes_establishmentSelectedId) {
            newPreviewRegisterCodes.push(preview_register_code);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.establishmentSelected.preview_register_codes_on_establishment = newPreviewRegisterCodes;
      this.preview_register_codes_establishmentSelectedId = 0;
   }

   selectLanguage(language: Language) {
      this.languages_establishmentSelectedId = language.id;
   }

   addLanguage() {
      if (this.languages_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.languages.forEach(language => {
         if (language.id == this.languages_establishmentSelectedId) {
            let existe = false;
            this.establishmentSelected.languages_on_establishment.forEach(element => {
               if (element.id == language.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.establishmentSelected.languages_on_establishment.push(language);
               this.languages_establishmentSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeLanguage() {
      if (this.languages_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newLanguages: Language[] = [];
      let eliminado = false;
      this.establishmentSelected.languages_on_establishment.forEach(language => {
         if (language.id !== this.languages_establishmentSelectedId) {
            newLanguages.push(language);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.establishmentSelected.languages_on_establishment = newLanguages;
      this.languages_establishmentSelectedId = 0;
   }

   selectWorker(worker: Worker) {
      this.workers_establishmentSelectedId = worker.id;
   }

   addWorker() {
      if (this.workers_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.workers.forEach(worker => {
         if (worker.id == this.workers_establishmentSelectedId) {
            let existe = false;
            this.establishmentSelected.workers_on_establishment.forEach(element => {
               if (element.id == worker.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.establishmentSelected.workers_on_establishment.push(worker);
               this.workers_establishmentSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeWorker() {
      if (this.workers_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newWorkers: Worker[] = [];
      let eliminado = false;
      this.establishmentSelected.workers_on_establishment.forEach(worker => {
         if (worker.id !== this.workers_establishmentSelectedId) {
            newWorkers.push(worker);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.establishmentSelected.workers_on_establishment = newWorkers;
      this.workers_establishmentSelectedId = 0;
   }

   selectEstablishmentCertification(establishment_certification: EstablishmentCertification) {
      this.establishment_certifications_establishmentSelectedId = establishment_certification.id;
   }

   addEstablishmentCertification() {
      if (this.establishment_certifications_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.establishment_certifications.forEach(establishment_certification => {
         if (establishment_certification.id == this.establishment_certifications_establishmentSelectedId) {
            let existe = false;
            this.establishmentSelected.establishment_certifications_on_establishment.forEach(element => {
               if (element.id == establishment_certification.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.establishmentSelected.establishment_certifications_on_establishment.push(establishment_certification);
               this.establishment_certifications_establishmentSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeEstablishmentCertification() {
      if (this.establishment_certifications_establishmentSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newEstablishmentCertifications: EstablishmentCertification[] = [];
      let eliminado = false;
      this.establishmentSelected.establishment_certifications_on_establishment.forEach(establishment_certification => {
         if (establishment_certification.id !== this.establishment_certifications_establishmentSelectedId) {
            newEstablishmentCertifications.push(establishment_certification);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.establishmentSelected.establishment_certifications_on_establishment = newEstablishmentCertifications;
      this.establishment_certifications_establishmentSelectedId = 0;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.establishmentSelected.id === 'undefined') {
               this.establishmentDataService.post(this.establishmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishments();
               }).catch( e => console.log(e) );
            } else {
               this.establishmentDataService.put(this.establishmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}