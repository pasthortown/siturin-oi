import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FloorAuthorizationCertificateRoutingModule } from './floorauthorizationcertificate-routing.module';
import { FloorAuthorizationCertificateComponent } from './floorauthorizationcertificate.component';
import { FloorAuthorizationCertificateService } from './../../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             FloorAuthorizationCertificateRoutingModule,
             FormsModule],
   declarations: [FloorAuthorizationCertificateComponent],
   providers: [
               NgbModal,
               FloorAuthorizationCertificateService
               ]
})
export class FloorAuthorizationCertificateModule {}