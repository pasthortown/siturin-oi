import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PreviewRegisterCodeRoutingModule } from './previewregistercode-routing.module';
import { PreviewRegisterCodeComponent } from './previewregistercode.component';
import { PreviewRegisterCodeService } from './../../../../services/CRUD/BASE/previewregistercode.service';
import { environment } from 'src/environments/environment';
import { SystemNameService } from './../../../../services/CRUD/BASE/systemname.service';

@NgModule({
   imports: [CommonModule,
             PreviewRegisterCodeRoutingModule,
             FormsModule],
   declarations: [PreviewRegisterCodeComponent],
   providers: [
               NgbModal,
               SystemNameService,
               PreviewRegisterCodeService
               ]
})
export class PreviewRegisterCodeModule {}