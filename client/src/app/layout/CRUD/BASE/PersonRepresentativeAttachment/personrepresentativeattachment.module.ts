import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonRepresentativeAttachmentRoutingModule } from './personrepresentativeattachment-routing.module';
import { PersonRepresentativeAttachmentComponent } from './personrepresentativeattachment.component';
import { PersonRepresentativeAttachmentService } from './../../../../services/CRUD/BASE/personrepresentativeattachment.service';
import { environment } from 'src/environments/environment';
import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';

@NgModule({
   imports: [CommonModule,
             PersonRepresentativeAttachmentRoutingModule,
             FormsModule],
   declarations: [PersonRepresentativeAttachmentComponent],
   providers: [
               NgbModal,
               PersonRepresentativeService,
               PersonRepresentativeAttachmentService
               ]
})
export class PersonRepresentativeAttachmentModule {}