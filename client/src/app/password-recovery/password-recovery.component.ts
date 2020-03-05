import { EstablishmentOnRuc } from './../models/negocio/EstablishmentOnRuc';
import { User } from './../models/profile/User';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DinardapService } from '../services/negocio/dinardap.service';
import { Ruc } from '../models/BASE/Ruc';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
    selector: 'app-register',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  user: User = new User();
  ruc: Ruc = new Ruc();
  busy: Promise<any>;
  esperando: Boolean;
  isRepresentantLegal = true;
  cuentaInterna = false;
  isRucOwner = true;
//   isRepresentantLegal = false;
//   isRucOwner = false;
  rucInactive = true;
  identificationValidated = false; 
  consumoCedula = false;
  cedulaNombre = '';
  identidadConfirmada = false;
  rucValidated = false;
  consumoRuc = false;
  rucData = '';
  emailContactValidated = false;
  CedulaData = '';
  REGCIVILOK = false;
  SRIOK = false;
  fechaExpedicion = 'porValidar';
  fechaExpiracion = 'porValidar';
  fechaNacimiento = 'porValidar';
  fechaIngresada = '';
  razon_social = '';

  aleatorio = 0;

  constructor(private router: Router,
    private authDataServise: AuthService,
    private toastr: ToastrManager,
    private dinardapDataService: DinardapService) {}

  ngOnInit() {
    this.user = new User();
    this.ruc = new Ruc();
    this.esperando = false;
  }

  recuperarCredenciales() {
   if(this.emailContactValidated && this.rucValidated && this.identidadConfirmada && !this.esperando){
      this.esperando = true;
      this.user.ruc = this.ruc.number;
      this.ruc.contact_user = this.user;
      this.busy = this.authDataServise.recover_credentials(this.user).then( r => {
         this.esperando = false;
         if (r == 0 || typeof r == 'undefined') {
            Swal.fire({
               title: 'La información proporcionada no es correcta.',
               text: 'No es posible recuperar los credenciales de la cuenta, con la información proporcionada.',
               type: 'error',
             })
             .then( response => {
               this.router.navigate(['/login']);
             });
             return;
         }
         Swal.fire({
           title: 'Te damos la bienvenida',
           text: 'Enviamos tu contraseña a tu correo',
           type: 'success',
         })
         .then( response => {
           this.user = new User();
           this.ruc = new Ruc();
           this.router.navigate(['/login']);
         });
       }).catch( e => {
         this.esperando = false;
         console.log(e);
       });
     } else {
      Swal.fire({
         title: 'Datos no confirmados',
         text: 'La recuperación de credenciales no se pudo completar, los datos ingresados no se pudieron confirmar.',
         type: 'error',
       });
     }
  }
  
  checkCedula() {
    this.user.identification = this.user.identification.replace(/[^\d]/, '');
    if (this.user.identification.length !== 10) {
       this.identificationValidated = false;
       this.consumoCedula = false;
       this.fechaIngresada = '';
       this.identidadConfirmada = false;
       return;
    }
    if (this.consumoCedula && this.REGCIVILOK) {
       return;
    }
    this.CedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
    if (!this.consumoCedula) {
       this.identificationValidated = true;
       this.consumoCedula = true;
       this.dinardapDataService.get_cedula(this.user.identification).then( r => {
          const registros = r.original.entidades.entidad.filas.fila.columnas.columna;
          this.CedulaData = '';
          this.REGCIVILOK = true;
          let sorteo = [];
          registros.forEach(element => {
             if (element.campo === 'cedula') {
                if (element.valor === this.user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationValidated = true;
                } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationValidated = false;
                }
             }
             if (this.identificationValidated) {
                if (element.campo === 'nombre') {
                   this.user.name= element.valor;
                }
                if (element.campo === 'fechaNacimiento') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(0);
                   }
                   this.fechaNacimiento = element.valor;
                }
                if (element.campo === 'fechaExpiracion') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(1);
                   } 
                  this.fechaExpiracion = element.valor;
                }
                if (element.campo === 'fechaExpedicion') {
                  if (JSON.stringify(element.valor) !== '{}') {
                     sorteo.push(2);
                   }
                   this.fechaExpedicion = element.valor;
                }
             }
          });
          const indice = Math.floor(Math.random() * sorteo.length);
          this.aleatorio = sorteo[indice];
       }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.CedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOK = false;
         this.consumoCedula = false;
       });
    }
   }

   checkRuc() {
      this.ruc.number = this.ruc.number.replace(/[^\d]/, '');
      if (this.ruc.number.length !== 13) {
        this.rucValidated = false;
        this.consumoRuc = false;
        return;
      }
      if (this.consumoRuc && this.SRIOK) {
         return;
      }
      this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
      if (!this.consumoRuc && this.identificationValidated) {
        this.rucValidated = true;
        this.consumoRuc = true;
        this.rucInactive = true;
        this.dinardapDataService.get_RUC(this.ruc.number).then( r => {
          this.SRIOK = true; 
          this.rucValidated = true;
          const itemsDetalles_SRI_RUC = r.sri_ruc.original.entidades.entidad.filas.fila.columnas.columna;
          const itemsDetalles_SRI_RUC_COMPLETO = r.sri_ruc_completo.original.entidades.entidad;
          this.rucData = '';
          let datosGenerales = '';
          let datosRL = '';
          itemsDetalles_SRI_RUC_COMPLETO.forEach(entidad => {
             if (entidad.nombre == 'Actividad Economica') {
                const AE = entidad.filas.fila.columnas.columna;
                AE.forEach(element => {
                   if (element.campo == 'actividadGeneral') {
                   }
                });
             }
             if (entidad.nombre == 'Contribuyente Datos Completo') {
                const DC = entidad.filas.fila.columnas.columna;
                DC.forEach(element => {
                   if (element.campo == 'razonSocial') {
                      this.razon_social = element.valor;
                      datosGenerales += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
                   }
                   if (element.campo == 'email') {
                      if (JSON.stringify(element.valor) !== '{}') {
                      }
                   }
                   if (element.campo == 'telefonoDomicilio') {
                      if (JSON.stringify(element.valor) !== '{}') {
                      }
                   }
                });
             }
             if (entidad.nombre == 'Representante Legal') {
                const RL = entidad.filas.fila.columnas.columna;
                RL.forEach(element => {
                   if (element.campo == 'identificacion') {
                      if (JSON.stringify(element.valor) !== '{}') {
                         this.ruc.person_representative.identification = element.valor;
                         this.checkIdentificationRepresentant();
                      }
                   }
                   if (element.campo == 'nombre') {
                     datosRL += '<strong>Nombre Representante Legal: </strong> ' + element.valor + '<br/>';
                   }
                });
             }
          });
          itemsDetalles_SRI_RUC.forEach(element => {
             if (element.campo == 'estadoContribuyente') {
                if (element.valor === 'ACTIVO') {
                   this.rucInactive = false;
                } else {
                   this.rucInactive = true;
                }
             }
             if (element.campo == 'fechaInscripcionRuc') {
             }
             if (element.campo == 'fechaActualizacion') {
             }
             if (element.campo == 'obligado') {
                if (element.valor == 'N') {
                   this.ruc.baised_accounting = false;
                } else {
                   this.ruc.baised_accounting = true;
                }
             }
             if (element.campo == 'personaSociedad') {
                if (element.valor == 'PNL') {
                   this.ruc.tax_payer_type_id = 1;
                   this.checkRazonSocial();
                } else {
                   this.ruc.tax_payer_type_id = 2;
                }
             }
             this.rucData = datosGenerales;
             if (this.ruc.tax_payer_type_id != 1) {
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

    checkRazonSocial() {
      // this.isRucOwner = false;
      // if (this.razon_social == this.user.name) {
      //   this.isRucOwner = true;
      // }
     }
  
    checkIdentificationRepresentant() { 
      // this.isRepresentantLegal = false; 
      // if (this.ruc.person_representative.identification == this.user.identification) {
      //   this.isRepresentantLegal = true;
      // }
     }

  checkEmail(): Boolean {
    const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email.toString());
    this.emailContactValidated = isOk;
    if (!isOk) {
       this.user.identification = '';
       this.fechaIngresada = '';
       this.user.name = '';
    }
    if (this.user.email.split('@')[1] == 'turismo.gob.ec') {
      this.cuentaInterna = true; 
      this.emailContactValidated = false;
      return false;
    }
    this.cuentaInterna = false;
    return this.emailContactValidated;
  }

   confirmarIdentidad() {
      if (this.fechaIngresada == '') {
        return false;
      }
      if (this.aleatorio == 0) {
         if( this.fechaIngresada == this.fechaNacimiento) {
            this.identidadConfirmada = true;
            return true;
         }
      }
      if (this.aleatorio == 1) {
         if( this.fechaIngresada == this.fechaExpiracion) {
            this.identidadConfirmada = true;
            return true;
         }
      }
      if (this.aleatorio == 2) {
         if( this.fechaIngresada == this.fechaExpedicion) {
            this.identidadConfirmada = true;
            return true;
         }
      }
      this.identidadConfirmada = false;
      this.cedulaNombre = '';
      return false;
   }
}
