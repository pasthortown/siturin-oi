import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/complementaryservicetype.service';
import { ComplementaryServiceType } from './../../../../models/ALIMENTOSBEBIDAS/ComplementaryServiceType';

import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterType } from './../../../../models/ALIMENTOSBEBIDAS/RegisterType';

import { CapacityService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacity.service';
import { Capacity } from './../../../../models/ALIMENTOSBEBIDAS/Capacity';

import { KitchenTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { KitchenType } from './../../../../models/ALIMENTOSBEBIDAS/KitchenType';

import { ServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { ServiceType } from './../../../../models/ALIMENTOSBEBIDAS/ServiceType';


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
   complementary_service_types: ComplementaryServiceType[] = [];
   complementary_service_types_registerSelectedId: number;
   register_types: RegisterType[] = [];
   capacities: Capacity[] = [];
   capacities_registerSelectedId: number;
   kitchen_types: KitchenType[] = [];
   kitchen_types_registerSelectedId: number;
   service_types: ServiceType[] = [];
   service_types_registerSelectedId: number;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private complementary_service_typeDataService: ComplementaryServiceTypeService,
               private register_typeDataService: RegisterTypeService,
               private capacityDataService: CapacityService,
               private kitchen_typeDataService: KitchenTypeService,
               private service_typeDataService: ServiceTypeService,
               private registerDataService: RegisterService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getComplementaryServiceType();
      this.getRegisterType();
      this.getCapacity();
      this.getKitchenType();
      this.getServiceType();
   }

   selectRegister(register: Register) {
      this.registerSelected = register;
   }

   getComplementaryServiceType() {
      this.complementary_service_types = [];
      this.complementary_service_typeDataService.get().then( r => {
         this.complementary_service_types = r as ComplementaryServiceType[];
      }).catch( e => console.log(e) );
   }

   getComplementaryServiceTypesOnRegister() {
      this.registerSelected.complementary_service_types_on_register = [];
      this.registerDataService.get(this.registerSelected.id).then( r => {
         this.registerSelected.complementary_service_types_on_register = r.attach[0].complementary_service_types_on_register as ComplementaryServiceType[];
      }).catch( e => console.log(e) );
   }

   getRegisterType() {
      this.register_types = [];
      this.register_typeDataService.get().then( r => {
         this.register_types = r as RegisterType[];
      }).catch( e => console.log(e) );
   }

   getCapacity() {
      this.capacities = [];
      this.capacityDataService.get().then( r => {
         this.capacities = r as Capacity[];
      }).catch( e => console.log(e) );
   }

   getCapacitiesOnRegister() {
      this.registerSelected.capacities_on_register = [];
      this.registerDataService.get(this.registerSelected.id).then( r => {
         this.registerSelected.capacities_on_register = r.attach[0].capacities_on_register as Capacity[];
      }).catch( e => console.log(e) );
   }

   getKitchenType() {
      this.kitchen_types = [];
      this.kitchen_typeDataService.get().then( r => {
         this.kitchen_types = r as KitchenType[];
      }).catch( e => console.log(e) );
   }

   getKitchenTypesOnRegister() {
      this.registerSelected.kitchen_types_on_register = [];
      this.registerDataService.get(this.registerSelected.id).then( r => {
         this.registerSelected.kitchen_types_on_register = r.attach[0].kitchen_types_on_register as KitchenType[];
      }).catch( e => console.log(e) );
   }

   getServiceType() {
      this.service_types = [];
      this.service_typeDataService.get().then( r => {
         this.service_types = r as ServiceType[];
      }).catch( e => console.log(e) );
   }

   getServiceTypesOnRegister() {
      this.registerSelected.service_types_on_register = [];
      this.registerDataService.get(this.registerSelected.id).then( r => {
         this.registerSelected.service_types_on_register = r.attach[0].service_types_on_register as ServiceType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisters();
   }

   getRegisters() {
      this.registers = [];
      this.registerSelected = new Register();
      this.complementary_service_types_registerSelectedId = 0;
      this.registerSelected.register_type_id = 0;
      this.capacities_registerSelectedId = 0;
      this.kitchen_types_registerSelectedId = 0;
      this.service_types_registerSelectedId = 0;
      this.registerDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.registers = r.data as Register[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegister(content) {
      this.registerSelected = new Register();
      this.complementary_service_types_registerSelectedId = 0;
      this.registerSelected.register_type_id = 0;
      this.capacities_registerSelectedId = 0;
      this.kitchen_types_registerSelectedId = 0;
      this.service_types_registerSelectedId = 0;
      this.openDialog(content);
   }

   editRegister(content) {
      if ( typeof this.registerSelected.complementary_service_types_on_register === 'undefined' ) {
         this.registerSelected.complementary_service_types_on_register = [];
      }
      if ( typeof this.registerSelected.capacities_on_register === 'undefined' ) {
         this.registerSelected.capacities_on_register = [];
      }
      if ( typeof this.registerSelected.kitchen_types_on_register === 'undefined' ) {
         this.registerSelected.kitchen_types_on_register = [];
      }
      if ( typeof this.registerSelected.service_types_on_register === 'undefined' ) {
         this.registerSelected.service_types_on_register = [];
      }
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getComplementaryServiceTypesOnRegister();
      this.complementary_service_types_registerSelectedId = 0;
      this.getCapacitiesOnRegister();
      this.capacities_registerSelectedId = 0;
      this.getKitchenTypesOnRegister();
      this.kitchen_types_registerSelectedId = 0;
      this.getServiceTypesOnRegister();
      this.service_types_registerSelectedId = 0;
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

   toCSV() {
      this.registerDataService.get().then( r => {
         const backupData = r as Register[];
         let output = 'id;code;autorized_complementary_capacities;establishment_id;autorized_complementary_food_capacities;register_type_id\n';
         backupData.forEach(element => {
            output += element.id; + element.code + ';' + element.autorized_complementary_capacities + ';' + element.establishment_id + ';' + element.autorized_complementary_food_capacities + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
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

   selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
      this.complementary_service_types_registerSelectedId = complementary_service_type.id;
   }

   addComplementaryServiceType() {
      if (this.complementary_service_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.complementary_service_types.forEach(complementary_service_type => {
         if (complementary_service_type.id == this.complementary_service_types_registerSelectedId) {
            let existe = false;
            this.registerSelected.complementary_service_types_on_register.forEach(element => {
               if (element.id == complementary_service_type.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.registerSelected.complementary_service_types_on_register.push(complementary_service_type);
               this.complementary_service_types_registerSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeComplementaryServiceType() {
      if (this.complementary_service_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newComplementaryServiceTypes: ComplementaryServiceType[] = [];
      let eliminado = false;
      this.registerSelected.complementary_service_types_on_register.forEach(complementary_service_type => {
         if (complementary_service_type.id !== this.complementary_service_types_registerSelectedId) {
            newComplementaryServiceTypes.push(complementary_service_type);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.registerSelected.complementary_service_types_on_register = newComplementaryServiceTypes;
      this.complementary_service_types_registerSelectedId = 0;
   }

   selectCapacity(capacity: Capacity) {
      this.capacities_registerSelectedId = capacity.id;
   }

   addCapacity() {
      if (this.capacities_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.capacities.forEach(capacity => {
         if (capacity.id == this.capacities_registerSelectedId) {
            let existe = false;
            this.registerSelected.capacities_on_register.forEach(element => {
               if (element.id == capacity.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.registerSelected.capacities_on_register.push(capacity);
               this.capacities_registerSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeCapacity() {
      if (this.capacities_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newCapacities: Capacity[] = [];
      let eliminado = false;
      this.registerSelected.capacities_on_register.forEach(capacity => {
         if (capacity.id !== this.capacities_registerSelectedId) {
            newCapacities.push(capacity);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.registerSelected.capacities_on_register = newCapacities;
      this.capacities_registerSelectedId = 0;
   }

   selectKitchenType(kitchen_type: KitchenType) {
      this.kitchen_types_registerSelectedId = kitchen_type.id;
   }

   addKitchenType() {
      if (this.kitchen_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.kitchen_types.forEach(kitchen_type => {
         if (kitchen_type.id == this.kitchen_types_registerSelectedId) {
            let existe = false;
            this.registerSelected.kitchen_types_on_register.forEach(element => {
               if (element.id == kitchen_type.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.registerSelected.kitchen_types_on_register.push(kitchen_type);
               this.kitchen_types_registerSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeKitchenType() {
      if (this.kitchen_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newKitchenTypes: KitchenType[] = [];
      let eliminado = false;
      this.registerSelected.kitchen_types_on_register.forEach(kitchen_type => {
         if (kitchen_type.id !== this.kitchen_types_registerSelectedId) {
            newKitchenTypes.push(kitchen_type);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.registerSelected.kitchen_types_on_register = newKitchenTypes;
      this.kitchen_types_registerSelectedId = 0;
   }

   selectServiceType(service_type: ServiceType) {
      this.service_types_registerSelectedId = service_type.id;
   }

   addServiceType() {
      if (this.service_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.service_types.forEach(service_type => {
         if (service_type.id == this.service_types_registerSelectedId) {
            let existe = false;
            this.registerSelected.service_types_on_register.forEach(element => {
               if (element.id == service_type.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.registerSelected.service_types_on_register.push(service_type);
               this.service_types_registerSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeServiceType() {
      if (this.service_types_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newServiceTypes: ServiceType[] = [];
      let eliminado = false;
      this.registerSelected.service_types_on_register.forEach(service_type => {
         if (service_type.id !== this.service_types_registerSelectedId) {
            newServiceTypes.push(service_type);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.registerSelected.service_types_on_register = newServiceTypes;
      this.service_types_registerSelectedId = 0;
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