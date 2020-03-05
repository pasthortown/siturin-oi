import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './declaration.component';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { environment } from 'src/environments/environment';
import { DeclarationItemValueService } from './../../../../services/CRUD/FINANCIERO/declarationitemvalue.service';

@NgModule({
   imports: [CommonModule,
             DeclarationRoutingModule,
             FormsModule],
   declarations: [DeclarationComponent],
   providers: [
               NgbModal,
               DeclarationItemValueService,
               DeclarationService
               ]
})
export class DeclarationModule {}