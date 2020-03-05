import { ZoneService } from './../services/CRUD/BASE/zone.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ProfilePictureService } from '../services/profile/profilepicture.service';
import { ConsultorService } from './../services/negocio/consultor.service';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, HttpModule],
    declarations: [LoginComponent],
    providers: [AuthService, ZoneService, ConsultorService, NgbModal, ProfilePictureService]
})
export class LoginModule {}
