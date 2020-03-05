import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { StateService } from './../../../../services/CRUD/ALOJAMIENTO/state.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             StateRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [StateComponent],
   providers: [
               NgbModal,
               StateService
               ]
})
export class StateModule {}