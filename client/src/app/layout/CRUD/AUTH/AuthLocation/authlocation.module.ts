import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthLocationRoutingModule } from './authlocation-routing.module';
import { AuthLocationComponent } from './authlocation.component';
import { environment } from 'src/environments/environment';
import { AuthLocationService } from 'src/app/services/CRUD/AUTH/authlocation.service';

@NgModule({
   imports: [CommonModule,
             AuthLocationRoutingModule,
             FormsModule],
   declarations: [AuthLocationComponent],
   providers: [
               NgbModal,
               AuthLocationService
               ]
})
export class AuthLocationModule {}