import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AccountRolAssigment } from 'src/app/models/AUTH/AccountRolAssigment';
import { AccountRol } from 'src/app/models/AUTH/AccountRol';
import { User } from 'src/app/models/profile/User';
import { AccountRolService } from 'src/app/services/CRUD/AUTH/accountrol.service';
import { Ubication } from 'src/app/models/BASE/Ubication';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { AuthLocation } from 'src/app/models/AUTH/AuthLocation';
import { AccountService } from 'src/app/services/negocio/account.service';

@Component({
   selector: 'app-accounts',
   templateUrl: './accounts.component.html',
   styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
   account_rol_assigments: AccountRolAssigment[] = [];
   account_rol_assigmentSelected: AccountRolAssigment = new AccountRolAssigment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   accounts: any[] = [];
   account_rols: AccountRol[] = [];
   ubications: Ubication[] = [];
   zonales: Ubication[] = [];
   new_user: User = new User();
   new_user_account_location: AuthLocation = new AuthLocation();
   account_selected: any = null;
   config: any = {
      paging: true,
      filtering: {filterString: ''},
      className: ['table-striped', 'table-hover', 'table-bordered']
   };
   rows = [];
   columns = [];
   data = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private account_rolDataService: AccountRolService,
               private accountDataService: AccountService,
               private ubicationDataService: UbicationService) {}

   ngOnInit() {
      this.refresh();
   }

   refresh() {
      this.getAccountRol();
      this.getUbications();
   }

   getUbications() {
      this.zonales = [];
      this.ubicationDataService.get().then( r => {
         this.ubications = r as Ubication[];
         this.ubications.forEach(ubication => {
            if (ubication.father_code == '-') {
               this.zonales.push(ubication);
            }
         });
      }).catch( e => { console.log(e); });
   }

   onCellClick(event) {
      this.accounts.forEach(account => {
         if (account.account.email == event.row.email) {
            this.account_selected = account;
         }
      });
      this.rows.forEach(row => {
         if (this.account_selected.account.email == row.email) {
            row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
         } else {
            row.selected = '';
         }
      });
   }

   getAccountRol() {
      this.account_rols = [];
      this.account_rolDataService.get().then( r => {
         this.account_rols = r as AccountRol[];
         this.getAccounts();
      }).catch( e => console.log(e) );
   }

   getAccounts() {
      this.accounts = [];
      this.accountDataService.get_accounts().then( r => {
         this.accounts = r;
         this.buildDataTable();
      }).catch( e => { console.log(e); });
   }

   get_rol_account(id): string {
      let toReturn = '';
      this.account_rols.forEach(account_rol => {
         if (account_rol.id == id) {
            toReturn = account_rol.name.toString(); 
         }
      });
      return toReturn;
   }

   get_zonal(id): string {
      let toReturn = '';
      this.zonales.forEach(zonal => {
         if (zonal.id == id) {
            toReturn = zonal.name.toString();
         }
      });
      return toReturn;
   }

   buildDataTable() {
      this.columns = [
         {title: '', name: 'selected'},
         {title: 'Identificación', name: 'identification'},
         {title: 'Correo Electrónico', name: 'email'},
         {title: 'Nombre Completo', name: 'name'},
         {title: 'Rol Asignado', name: 'rol'},
         {title: 'Estado', name: 'block'},
      ];
      const data = [];
      this.accounts.forEach(item => {
         let status = '<div class="col-12 text-center"><span class="fas fa-lock-open"></span></div>';
         if (item.blocked) {
            status = '<div class="col-12 text-center"><span class="fas fa-lock"></span></div>';
         }
          data.push({
             selected: '',
             identification: item.account.identification,
             email: item.account.email,
             name: item.account.name,
             rol: this.get_rol_account(item.account_rol_assigment.account_rol_id),
             block: status,
          });
      });
      this.data = data;
      this.onChangeTable(this.config);
   }

   onChangeTable(config: any, event?): any {
      const page: any = {page: this.currentPage, itemsPerPage: this.recordsByPage};
      if (config.filtering) {
        Object.assign(this.config.filtering, config.filtering);
      }
      if (config.sorting) {
        Object.assign(this.config.sorting, config.sorting);
      }
      const filteredData = this.changeFilter(this.data, this.config);
      const sortedData = this.changeSort(filteredData, this.config);
      this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
   }

   changeFilter(data: any, config: any): any {
      this.account_selected = null;
      this.rows.forEach(row => {
         row.selected = '';
      });
      let filteredData: Array<any> = data;
      this.columns.forEach((column: any) => {
        if (column.filtering) {
          filteredData = filteredData.filter((item: any) => {
            return item[column.name].match(column.filtering.filterString);
          });
        }
      });
      if (!config.filtering) {
        return filteredData;
      }
      if (config.filtering.columnName) {
        return filteredData.filter((item:any) =>
          item[config.filtering.columnName].match(this.config.filtering.filterString));
      }
      const tempArray: Array<any> = [];
      filteredData.forEach((item: any) => {
        let flag = false;
        this.columns.forEach((column: any) => {
          if (item[column.name].toString().match(this.config.filtering.filterString)) {
            flag = true;
          }
        });
        if (flag) {
          tempArray.push(item);
        }
      });
      filteredData = tempArray;
      return filteredData;
     }
   
     changeSort(data: any, config: any): any {
      if (!config.sorting) {
        return data;
      }
      const columns = this.config.sorting.columns || [];
      let columnName: string = void 0;
      let sort: string = void 0;
      for (let i = 0; i < columns.length; i++) {
        if (columns[i].sort !== '' && columns[i].sort !== false) {
          columnName = columns[i].name;
          sort = columns[i].sort;
        }
      }
      if (!columnName) {
        return data;
      }
      return data.sort((previous:any, current:any) => {
        if (previous[columnName] > current[columnName]) {
          return sort === 'desc' ? -1 : 1;
        } else if (previous[columnName] < current[columnName]) {
          return sort === 'asc' ? -1 : 1;
        }
        return 0;
      });
     }
   
     changePage(page: any, data: Array<any> = this.data):Array<any> {
      const start = (page.page - 1) * page.itemsPerPage;
      const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
      return data.slice(start, end);
     }

   newAccountRolAssigment(content) {
      this.account_rol_assigmentSelected = new AccountRolAssigment();
      this.account_rol_assigmentSelected.account_rol_id = 0;
      this.account_rol_assigmentSelected.user_id = 0;
      this.new_user = new User();
      this.new_user.id = 0;
      this.new_user_account_location = new AuthLocation();
      this.openDialog(content);
   }

   editAccountRolAssigment(content) {
      if (this.account_selected == null) {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.new_user = this.account_selected.account as User;
      this.account_rol_assigmentSelected = this.account_selected.account_rol_assigment as AccountRolAssigment;
      this.new_user_account_location = this.account_selected.auth_location as AuthLocation;
      this.openDialog(content);
   }

   toCSV() {
      const backupData = this.accounts;
      let output = 'id_cuenta (opcional 0 default);identification;email;name;id_rol;;id_ubication;\n';
      output += 'Id_Cuenta;Identificación;Correo Electrónico;Nombre Completo (Apellidos Nombres);Id_Rol;Rol Asignado;Id_Coordinación_Zonal;Coordinación Zonal\n';
      backupData.forEach(element => {
         output += element.account.id + ';' + element.account.identification + ';' + element.account.email + ';' + element.account.name + ';' + element.account_rol_assigment.account_rol_id + ';' + this.get_rol_account(element.account_rol_assigment.account_rol_id) + ';' + element.auth_location.id_ubication + ';' + this.get_zonal(element.auth_location.id_ubication) + '\n';
      });
      const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
      const fecha = new Date();
      saveAs(blob, fecha.toLocaleDateString() + '_Accounts.csv');
   }

   decodeUploadFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            const fileBytes = reader.result.toString().split(',')[1];
            const newData = decodeURIComponent(escape(atob(fileBytes)));
            this.massUpload(newData);
         };
      }
   }

   checkEmail(email): Boolean {
      const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.toString());
      return isOk;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if (response == 'block_account') {
            if (this.new_user.id !== 0) {
               this.blockAccount();
            }
         }
         if (response == 'password_reset') {
            if (this.new_user.id !== 0) {
               this.passwordResetAccount();
            }
         }
         if (response == 'save') {
            if ((this.new_user.identification.length == 10)  &&
               this.checkEmail(this.new_user.email) &&
               this.new_user.name != '' &&
               this.new_user_account_location.id_ubication != 0 &&
               this.account_rol_assigmentSelected.account_rol_id != 0
            ) {
               this.saveAccount();
            }
         }
      }), ( r => {}));
   }

   massUpload(data) {
      this.accountDataService.mass_upload(data).then( r => {
         let output = '';
         r.forEach(row => {
            output += row +'\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Accounts_UpLoad_Result.csv');
         this.refresh();
      }).catch( e => { console.log(e); });
   }

   checkCedula() {
      this.new_user.identification = this.new_user.identification.replace(/[^\d]/, '');
   }

   blockAccount() {
      if (this.account_selected == null) {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.accountDataService.block_account(this.account_selected).then( r => {
         this.refresh();
      }).catch( e => { console.log(e); });
   }

   saveAccount() {
      if (this.new_user.email.split('@')[1] !== 'turismo.gob.ec') {
         this.toastr.errorToastr('Solo se permite la creación de cuentas de usuarios internos.', 'Error');
         return;
      }
      let account = {account: this.new_user, auth_location: this.new_user_account_location, account_rol_assigment: this.account_rol_assigmentSelected};
      this.accountDataService.save_account(account).then( r => {
         this.refresh();
      }).catch( e => { console.log(e); });
   }

   passwordResetAccount() {
      if (this.account_selected == null) {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      if (this.account_selected.account.email.search('@turismo.gob.ec') !== -1) {
         this.toastr.errorToastr('No puede reiniciar contraseñas del dominio del Ministerio de Turismo.', 'Error');
         return;
      }
      this.accountDataService.password_reset_account(this.account_selected);
   }
}