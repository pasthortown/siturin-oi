import { ProfilePicture } from './../../models/profile/ProfilePicture';
import { ProfilePictureService } from './../../services/profile/profilepicture.service';
import { UserService } from './../../services/profile/user.service';
import { User } from './../../models/profile/User';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cambiandoClaves = false;
  clavesCoinciden = false;
  clave: String = '';
  cuentaInterna = false;
  claveConfirm: String = '';
  profileImg = 'assets/images/accounts.png';
  profilePicture: ProfilePicture;
  user: User;
  mainPhoneValidated: Boolean = false;
  secondaryPhoneValidated: Boolean = false;
  
  passwordMinimoCaracteres: Boolean = false;
  passwordCaracteresEspeciales: Boolean = false;
  passwordCaracteresNumericos: Boolean = false;
  passwordCaracteresUpper: Boolean = false;
  passwordCaracteresLower: Boolean = false;

  @ViewChild('fotoInput') fotoInput;

  constructor(
    private toastr: ToastrManager,
    private authDataServise: AuthService,
    private profilePictureDataService: ProfilePictureService,
    private userDataService: UserService) {
    this.user = new User();
    this.profilePicture = new ProfilePicture();
  }

  ngOnInit() {
    this.getUser();
    this.getProfilePicture();
  }

  getUser() {
    this.userDataService.get(JSON.parse(sessionStorage.getItem('user')).id).then( r => {
      this.user = r as User;
      if (this.user.email.split('@')[1] == 'turismo.gob.ec') {
        this.cuentaInterna = true;
      } else {
        this.cuentaInterna = false;
      }
      this.checkTelefonoPrincipal();
      this.checkTelefonoSecundario();
    }).catch( e => console.log(e));
  }

  getProfilePicture() {
    if ( JSON.parse(sessionStorage.getItem('profilePicture')) !== null ) {
      this.profilePicture = JSON.parse(sessionStorage.getItem('profilePicture')) as ProfilePicture;
      this.profileImg = 'data:' + this.profilePicture.file_type + ';base64,' + this.profilePicture.file;
    } else {
      this.profilePicture.id = 0;
    }
  }

  validateAddress(): Boolean {
    if(typeof this.user.address == 'undefined' || this.user.address == ''){
      return false;
    }
    return true;
  }

  verificarCambioClaves() {
    if (this.clave.length !== 0 || this.claveConfirm.length !== 0) {
      this.cambiandoClaves = true;
    } else {
      this.cambiandoClaves = false;
    }
    if (this.clave === this.claveConfirm) {
      this.clavesCoinciden = true;
    } else {
      this.clavesCoinciden = false;
    }
  }


  subirFoto() {
    this.fotoInput.nativeElement.click();
  }

  CodificarArchivo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profilePicture.file_name = file.name;
        this.profilePicture.file_type = file.type;
        this.profilePicture.file = reader.result.toString().split(',')[1];
        this.profileImg = 'data:' + this.profilePicture.file_type + ';base64,' + this.profilePicture.file;
      };
    }
  }

  guardar() {
    this.user.address = ' '
    const validated = this.mainPhoneValidated && this.secondaryPhoneValidated && this.validateAddress();
    if (!validated) {
      this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Actualización de Perfil');
      return;
    }
    const userData = { id: this.user.id, name: this.user.name };
    sessionStorage.setItem('user', JSON.stringify(userData));
    this.userDataService.put(this.user).then( r => {
      this.guardarFoto();
      if (this.cambiandoClaves && this.clavesCoinciden && !this.validatePassword()) {
        this.actualizarClave();
      } else {
        Swal.fire({
          title: 'Datos Guardados',
          text: 'Datos guardados satisfactoriamente.',
          type: 'success',
        });
      }
    }).catch ( e => console.log(e));
  }

  guardarFoto() {
    if ( this.profileImg === 'assets/images/accounts.png' ) {
      return;
    }
    if (this.profilePicture.id === 0 ) {
      this.profilePictureDataService.post(this.profilePicture).then( r => {
        this.profileImg = 'data:' + r.file_type + ';base64,' + r.file;
        this.profilePicture.id = r.id;
        sessionStorage.setItem('profilePicture', JSON.stringify(this.profilePicture));
      }).catch( e => console.log(e) );
    } else {
      this.actualizarFoto();
    }
  }

  actualizarFoto() {
    this.profilePictureDataService.put(this.profilePicture).then( r => {
      sessionStorage.setItem('profilePicture', JSON.stringify(this.profilePicture));
      this.profileImg = 'data:' + r.file_type + ';base64,' + r.file;
    }).catch( e => console.log(e) );
  }

  actualizarClave() {
    this.authDataServise.password_change(this.clave).then( r => {
      Swal.fire({
        title: 'Datos Guardados',
        text: 'Datos guardados satisfactoriamente. Cierre sesión y utilice su nueva contraseña.',
        type: 'success',
      });
    }).catch( e => {
      console.log(e);
    });
  }

  address_mapEvent(event) {
    this.user.address_map_latitude = event.coords.lat;
    this.user.address_map_longitude = event.coords.lng;
 }

  checkTelefonoPrincipal(): Boolean {
   if (this.user.main_phone_number == null) {
     this.user.main_phone_number = '';
   }
    this.user.main_phone_number = this.user.main_phone_number.replace(/[^\d]/, '');
   if (this.user.main_phone_number.length < 9) {
      this.mainPhoneValidated = false;
      return false;
   }
   this.mainPhoneValidated = true;
   return true;
  }

  checkTelefonoSecundario(): Boolean {
    if (this.user.secondary_phone_number == null) {
      this.user.secondary_phone_number = '';
    }
   this.user.secondary_phone_number = this.user.secondary_phone_number.replace(/[^\d]/, '');
   if (this.user.secondary_phone_number.length > 0 && this.user.secondary_phone_number.length < 9) {
      this.secondaryPhoneValidated = false;
      return false;
   }
   this.secondaryPhoneValidated = true;
   return true;
  }

  validatePassword(): Boolean {
    if (this.clave.length < 8 ) {
      this.passwordMinimoCaracteres = true;
    } else {
      this.passwordMinimoCaracteres = false;
    }
    this.passwordCaracteresNumericos = true;
    this.passwordCaracteresEspeciales = true;
    this.passwordCaracteresUpper = true;
    this.passwordCaracteresLower = true;
    this.clave.split('').forEach(element => {
      if (element >= '0' && element <= '9') {
        this.passwordCaracteresNumericos = false;
      }
      if(element.match('[^A-Za-z0-9 ]')) {
        this.passwordCaracteresEspeciales = false;
      }
      if(!element.match('[^A-Z]')) {
        this.passwordCaracteresUpper = false;
      }
      if(!element.match('[^a-z]')) {
        this.passwordCaracteresLower = false;
      }
    });
    this.verificarCambioClaves();
    return this.passwordMinimoCaracteres || this.passwordCaracteresEspeciales || this.passwordCaracteresNumericos || this.passwordCaracteresUpper || this.passwordCaracteresLower;
  }
}
