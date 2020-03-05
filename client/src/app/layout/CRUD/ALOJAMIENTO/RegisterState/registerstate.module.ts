import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterStateRoutingModule } from './registerstate-routing.module';
import { RegisterStateComponent } from './registerstate.component';
import { RegisterStateService } from './../../../../services/CRUD/ALOJAMIENTO/registerstate.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { StateService } from './../../../../services/CRUD/ALOJAMIENTO/state.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             RegisterStateRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [RegisterStateComponent],
   providers: [
               NgbModal,
               RegisterService,
               StateService,
               RegisterStateService
               ]
})
export class RegisterStateModule {}