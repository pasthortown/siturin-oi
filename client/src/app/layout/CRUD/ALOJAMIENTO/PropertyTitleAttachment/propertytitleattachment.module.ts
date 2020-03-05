import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropertyTitleAttachmentRoutingModule } from './propertytitleattachment-routing.module';
import { PropertyTitleAttachmentComponent } from './propertytitleattachment.component';
import { PropertyTitleAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/propertytitleattachment.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';

@NgModule({
   imports: [CommonModule,
             PropertyTitleAttachmentRoutingModule,
             FormsModule],
   declarations: [PropertyTitleAttachmentComponent],
   providers: [
               NgbModal,
               RegisterService,
               PropertyTitleAttachmentService
               ]
})
export class PropertyTitleAttachmentModule {}