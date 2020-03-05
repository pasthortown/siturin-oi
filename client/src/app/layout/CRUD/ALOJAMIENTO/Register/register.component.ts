import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { Register } from './../../../../models/ALOJAMIENTO/Register';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { ComplementaryServiceType } from './../../../../models/ALOJAMIENTO/ComplementaryServiceType';

import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { RegisterType } from './../../../../models/ALOJAMIENTO/RegisterType';

import { CapacityService } from './../../../../services/CRUD/ALOJAMIENTO/capacity.service';
import { Capacity } from './../../../../models/ALOJAMIENTO/Capacity';

import { ComplementaryServiceFoodService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefood.service';
import { ComplementaryServiceFood } from './../../../../models/ALOJAMIENTO/ComplementaryServiceFood';


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
   complementary_service_foods: ComplementaryServiceFood[] = [];
   complementary_service_foods_registerSelectedId: number;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private complementary_service_typeDataService: ComplementaryServiceTypeService,
               private register_typeDataService: RegisterTypeService,
               private capacityDataService: CapacityService,
               private complementary_service_foodDataService: ComplementaryServiceFoodService,
               private registerDataService: RegisterService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getComplementaryServiceType();
      this.getRegisterType();
      this.getCapacity();
      this.getComplementaryServiceFood();
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

   getComplementaryServiceFood() {
      this.complementary_service_foods = [];
      this.complementary_service_foodDataService.get().then( r => {
         this.complementary_service_foods = r as ComplementaryServiceFood[];
      }).catch( e => console.log(e) );
   }

   getComplementaryServiceFoodsOnRegister() {
      this.registerSelected.complementary_service_foods_on_register = [];
      this.registerDataService.get(this.registerSelected.id).then( r => {
         this.registerSelected.complementary_service_foods_on_register = r.attach[0].complementary_service_foods_on_register as ComplementaryServiceFood[];
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
      this.complementary_service_foods_registerSelectedId = 0;
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
      this.complementary_service_foods_registerSelectedId = 0;
      this.openDialog(content);
   }

   editRegister(content) {
      if ( typeof this.registerSelected.complementary_service_types_on_register === 'undefined' ) {
         this.registerSelected.complementary_service_types_on_register = [];
      }
      if ( typeof this.registerSelected.capacities_on_register === 'undefined' ) {
         this.registerSelected.capacities_on_register = [];
      }
      if ( typeof this.registerSelected.complementary_service_foods_on_register === 'undefined' ) {
         this.registerSelected.complementary_service_foods_on_register = [];
      }
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getComplementaryServiceTypesOnRegister();
      this.complementary_service_types_registerSelectedId = 0;
      this.getCapacitiesOnRegister();
      this.capacities_registerSelectedId = 0;
      this.getComplementaryServiceFoodsOnRegister();
      this.complementary_service_foods_registerSelectedId = 0;
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
            output += element.id + ';' + element.code + ';' + element.autorized_complementary_capacities + ';' + element.establishment_id + ';' + element.autorized_complementary_food_capacities + ';' + element.register_type_id + '\n';
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

   selectComplementaryServiceFood(complementary_service_food: ComplementaryServiceFood) {
      this.complementary_service_foods_registerSelectedId = complementary_service_food.id;
   }

   addComplementaryServiceFood() {
      if (this.complementary_service_foods_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.complementary_service_foods.forEach(complementary_service_food => {
         if (complementary_service_food.id == this.complementary_service_foods_registerSelectedId) {
            let existe = false;
            this.registerSelected.complementary_service_foods_on_register.forEach(element => {
               if (element.id == complementary_service_food.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.registerSelected.complementary_service_foods_on_register.push(complementary_service_food);
               this.complementary_service_foods_registerSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeComplementaryServiceFood() {
      if (this.complementary_service_foods_registerSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newComplementaryServiceFoods: ComplementaryServiceFood[] = [];
      let eliminado = false;
      this.registerSelected.complementary_service_foods_on_register.forEach(complementary_service_food => {
         if (complementary_service_food.id !== this.complementary_service_foods_registerSelectedId) {
            newComplementaryServiceFoods.push(complementary_service_food);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.registerSelected.complementary_service_foods_on_register = newComplementaryServiceFoods;
      this.complementary_service_foods_registerSelectedId = 0;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.registerSelected.id === 'undefined' || this.registerSelected.id === 0) {
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