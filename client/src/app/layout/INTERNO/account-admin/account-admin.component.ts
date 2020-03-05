import { UserService } from 'src/app/services/profile/user.service';
import { User } from './../../../models/profile/User';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DinardapService } from './../../../services/negocio/dinardap.service';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.scss']
})
export class AccountAdminComponent implements OnInit {

  account_rucs: User[] = [];
  account_rucSelected: User = new User();
  currentPage = 1;
  lastPage = 1;
  recordsByPage = 5;
  ruc = '';
  CedulaData = '';
  identificationPersonValidated = false;
  consumoCedula = false;
  REGCIVILOK = false;
  rucData = '';
  superciasData = '';
  rucValidated = false;
  consumoRuc = false;
  SRIOK = false;

  constructor(private modalService: NgbModal,
              private toastr: ToastrManager,
              private dinardapDataService: DinardapService,
              private userDataService: UserService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.account_rucSelected = new User();
    this.goToPage(this.currentPage);
  }

  goToPage(page: number) {
    if ( page < 1 || page > this.lastPage ) {
       this.toastr.errorToastr('La página solicitada no existe.', 'Error');
       return;
    }
    this.currentPage = page;
    this.getAccountRucs();
  }

  getAccountRucs() {
    let filtro = this.ruc;
    if (this.ruc === '') {
      filtro = 'all';
    }
    this.userDataService.get_filtered_by_rol(this.recordsByPage, this.currentPage, '2', filtro).then( r => {
      this.account_rucs = r.data as User[];
      this.lastPage = r.last_page;
    }).catch( e => { console.log(e); });
  }

  selectAccountRuc(accountRuc) {
    this.account_rucSelected = accountRuc;
    this.CedulaData = '';
    this.identificationPersonValidated = false;
    this.consumoCedula = false;
    this.REGCIVILOK = false;
    this.rucData = '';
    this.rucValidated = false;
    this.consumoRuc = false;
    this.SRIOK = false;
  }

  newAccountRuc(content) {
    this.account_rucSelected = new User();
    this.openDialog(content);
  }

  editAccountRuc(content) {
    if (typeof this.account_rucSelected.id === 'undefined') {
      this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
      return;
    }
    this.openDialog(content);
  }
  
  deleteAccountRuc() {
    if (typeof this.account_rucSelected.id === 'undefined') {
      this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
      return;
   }
   this.userDataService.delete_account_by_rol(this.account_rucSelected.id, 2).then( r => {
      this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
      this.getAccountRucs();
   }).catch( e => console.log(e) );
  }

  filtrar(filter: String) {
    alert(filter);
  }

  openDialog(content) {
    this.checkIdentification();
    this.checkRuc();
    this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
       if ( response === 'Guardar click' ) {
          if (typeof this.account_rucSelected.id === 'undefined') {
             this.userDataService.create_account_by_rol(this.account_rucSelected, 2).then( r => {
               this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
               this.refresh();
              }).catch( e => { console.log(e); });
          } else {
            this.userDataService.update_account_by_rol(this.account_rucSelected, 2).then( r => {
              this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
              this.refresh();
            }).catch( e => console.log(e) );
          }
       }
    }), ( r => {}));
  }

  checkIdentification() {
    this.account_rucSelected.identification = this.account_rucSelected.identification.replace(/[^\d]/, '');
    if (this.account_rucSelected.identification.length !== 10) {
       this.identificationPersonValidated = false;
       this.consumoCedula = false;
       this.account_rucSelected.name = '';
      return;
    }
    if (this.consumoCedula && this.REGCIVILOK) {
       return;
    }
    this.CedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
    if (!this.consumoCedula) {
       this.identificationPersonValidated = true;
       this.consumoCedula = true;
       this.dinardapDataService.get_cedula(this.account_rucSelected.identification).then( r => {
          const registros = r.return.instituciones.datosPrincipales.registros;
          this.CedulaData = '';
          this.REGCIVILOK = true;
          registros.forEach(element => {
             if (element.campo === 'cedula') {
                if (element.valor === this.account_rucSelected.identification) {
                   this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                   this.identificationPersonValidated = true;
                } else {
                   this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                   this.identificationPersonValidated = false;
                }
             }
             if (this.identificationPersonValidated) {
                if (element.campo === 'nombre') {
                   this.CedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                   this.account_rucSelected.name = element.valor;
                }
                if (element.campo === 'fechaNacimiento') {
                   this.CedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
                }
                if (element.campo === 'nacionalidad') {
                   this.CedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
                }
             }
          });
       }).catch( e => {
          this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
          this.CedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
          this.REGCIVILOK = false;
          this.consumoCedula = false;
       });
    }
   }

    checkRuc() {
      this.account_rucSelected.ruc = this.account_rucSelected.ruc.replace(/[^\d]/, '');
      if (this.account_rucSelected.ruc.length !== 13) {
         this.rucValidated = false;
         this.consumoRuc = false;
         return;
      }
      if (this.consumoRuc && this.SRIOK) {
         return;
      }
      this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
      if (!this.consumoRuc) {
        this.consumoRuc = true;
        this.rucValidated = true;
        this.dinardapDataService.get_super_cias(this.account_rucSelected.ruc).then( r => {
         this.superciasData = '';
         if (r.companias !== 0) {
            const companias = r.companias.original.entidades.entidad;
            companias.forEach(entidad => {
               if (entidad.nombre == 'Superintendencia de Compañias Datos Companía') {
                  entidad.filas.fila.columnas.columna.forEach(element => {
                     if (element.campo == 'expediente') {
                        this.superciasData += '<strong>Número de Expediente: </strong> ' + element.valor + '<br/>';
                     }
                     if (element.campo == 'objeto_social') {
                        this.superciasData += '<strong>Objeto Social: </strong> ' + element.valor + '<br/>';
                     }   
                  });
               }
            });  
         }
      }).catch( e => { console.log(e); });
        this.dinardapDataService.get_RUC(this.account_rucSelected.ruc).then( r => {
           this.SRIOK = true; 
           this.rucValidated = true;
           const itemsDetalles_SRI_RUC = r.sri_ruc.original.entidades.entidad.filas.fila.columnas.columna;
           const itemsDetalles_SRI_RUC_COMPLETO = r.sri_ruc_completo.original.entidades.entidad;
           this.rucData = '';
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
                       datosContactoSRI += '<strong>Correo Electrónico - Registrado en SRI: </strong> ' + element.valor + '<br/>';
                    }
                    if (element.campo == 'telefonoDomicilio') {
                       datosContactoSRI += '<strong>Teléfono Domicilio - Registrado en SRI: </strong> ' + element.valor + '<br/>';
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
              let PNL = false;
              if (element.campo == 'personaSociedad') {
                 if (element.valor == 'PNL') {
                    PNL = true;
                 } else {
                    PNL = false;
                 }
                 datosGenerales += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
              }
              this.rucData = datosGenerales + datosAE + datosContactoSRI;
              if (!PNL) {
                 this.rucData += datosRL;
              }
           });
        }).catch( e => {
           console.log(e);
           this.rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
           this.consumoRuc = false;
           this.SRIOK = false;
        });
     }
    }
}
