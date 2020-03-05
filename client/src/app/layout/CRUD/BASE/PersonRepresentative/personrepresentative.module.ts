import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonRepresentativeRoutingModule } from './personrepresentative-routing.module';
import { PersonRepresentativeComponent } from './personrepresentative.component';
import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             PersonRepresentativeRoutingModule,
             FormsModule],
   declarations: [PersonRepresentativeComponent],
   providers: [
               NgbModal,
               PersonRepresentativeService
               ]
})
export class PersonRepresentativeModule {}