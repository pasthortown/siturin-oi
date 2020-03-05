import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaxPayerTypeRoutingModule } from './taxpayertype-routing.module';
import { TaxPayerTypeComponent } from './taxpayertype.component';
import { TaxPayerTypeService } from './../../../../services/CRUD/BASE/taxpayertype.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             TaxPayerTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [TaxPayerTypeComponent],
   providers: [
               NgbModal,
               TaxPayerTypeService
               ]
})
export class TaxPayerTypeModule {}