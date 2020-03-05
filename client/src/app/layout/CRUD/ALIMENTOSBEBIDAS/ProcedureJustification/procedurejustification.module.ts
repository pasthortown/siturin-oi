import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcedureJustificationRoutingModule } from './procedurejustification-routing.module';
import { ProcedureJustificationComponent } from './procedurejustification.component';
import { ProcedureJustificationService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/procedurejustification.service';
import { environment } from 'src/environments/environment';
import { ProcedureService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/procedure.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             ProcedureJustificationRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [ProcedureJustificationComponent],
   providers: [
               NgbModal,
               ProcedureService,
               ProcedureJustificationService
               ]
})
export class ProcedureJustificationModule {}