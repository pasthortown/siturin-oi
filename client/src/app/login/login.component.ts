import { ZoneService } from './../services/CRUD/BASE/zone.service';
import { Zone } from './../models/BASE/Zone';
import { ConsultorService } from './../services/negocio/consultor.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfilePictureService } from '../services/profile/profilepicture.service';
import { ProfilePicture } from '../models/profile/ProfilePicture';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: String = '';
  email: String = '';
  busy: Promise<any>;
  esperando: boolean;
  zonales: Zone[] = [];

  constructor(private consultorDataService: ConsultorService,
    private zoneDataService: ZoneService,
    private router: Router, 
    private modalService: NgbModal, 
    private authDataServise: AuthService, 
    private profilePictureDataService: ProfilePictureService) {}
  
  ngOnInit() {
    this.email = '';
    this.password = '';
    this.esperando = false;
    this.getZonales();
  }

  getZonales() {
    this.zoneDataService.get().then( r => {
      this.zonales = r as Zone[];
    }).catch( e => { console.log(e); });
  }

  login() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.authDataServise.login(this.email, this.password).then( r => {
        this.esperando = false;
        sessionStorage.setItem('api_token', r.token);
        sessionStorage.setItem('roles', JSON.stringify(r.roles));
        sessionStorage.setItem('isLoggedin', 'true');
        const userData = { id: r.id, name: r.name };
        sessionStorage.setItem('user', JSON.stringify(userData));
        this.router.navigate(['/main']);
        const startTime = new Date();
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + 2);
        sessionStorage.setItem('session_time', JSON.stringify({startTime: startTime, endTime: endTime}));
      }).catch( e => {
        this.esperando = false;
        Swal.fire({
          title: 'Iniciar Sesión',
          text: 'Credenciales Incorrectos',
          type: 'error',
        })
        .then( response => {
          sessionStorage.clear();
          this.router.navigate(['/login']);
        });
      });
    }
  }

  password_recovery() {
    if (this.email.split('@')[1] == 'turismo.gob.ec') {
      Swal.fire({
        title: 'Recuperación Contraseña',
        text: 'Para recuperar tu contraseña, comunícate con la Dirección de Tecnologías de la Información y Comunicaciones.',
        type: 'success',
      })
      .then( response => {
        this.password = '';
        this.email = '';
        return;
      });
      return;
    }
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.authDataServise.password_recovery_request(this.email).then( r => {
        this.esperando = false;
        if ( r === 'Solicitud Procesada. Enviaremos la respuesta a tu correo electrónico en un momento.') {
          Swal.fire({
            title: 'Contraseña Recuperada',
            text: 'Para completar el proceso, revisa tu correo',
            type: 'success',
          })
          .then( response => {
            this.password = '';
            this.email = '';
          });
        } else {
          Swal.fire({
            title: 'Contraseña Recuperada',
            text: 'La dirección de correo proporcionada, no corresponde a cuenta alguna',
            type: 'error',
          })
          .then( response => {
            this.password = '';
            this.email = '';
          });
        }
      }).catch( e => {
        this.esperando = false;
        console.log(e);
      });
    }
  }

  openDialog(content) {
    this.modalService.open(content, { centered: true, size: 'lg' }).result.then(( response => {
       
    }), ( r => {}));
 }
}
