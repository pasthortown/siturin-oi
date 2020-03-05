import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentStateRoutingModule } from './establishmentstate-routing.module';
import { EstablishmentStateComponent } from './establishmentstate.component';
import { EstablishmentStateService } from './../../../../services/CRUD/BASE/establishmentstate.service';
import { environment } from 'src/environments/environment';
import { StateService } from './../../../../services/CRUD/BASE/state.service';
import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             EstablishmentStateRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [EstablishmentStateComponent],
   providers: [
               NgbModal,
               StateService,
               EstablishmentService,
               EstablishmentStateService
               ]
})
export class EstablishmentStateModule {}