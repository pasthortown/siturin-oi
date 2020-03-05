import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';
import { PayService } from './../../../../services/CRUD/FINANCIERO/pay.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             PayRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [PayComponent],
   providers: [
               NgbModal,
               PayService
               ]
})
export class PayModule {}