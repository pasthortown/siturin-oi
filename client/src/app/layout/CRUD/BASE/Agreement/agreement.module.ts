import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgreementRoutingModule } from './agreement-routing.module';
import { AgreementComponent } from './agreement.component';
import { AgreementService } from './../../../../services/CRUD/BASE/agreement.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             AgreementRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [AgreementComponent],
   providers: [
               NgbModal,
               AgreementService
               ]
})
export class AgreementModule {}