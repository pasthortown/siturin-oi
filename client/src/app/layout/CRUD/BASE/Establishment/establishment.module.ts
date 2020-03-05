import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentRoutingModule } from './establishment-routing.module';
import { EstablishmentComponent } from './establishment.component';
import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { RucService } from './../../../../services/CRUD/BASE/ruc.service';
import { PreviewRegisterCodeService } from './../../../../services/CRUD/BASE/previewregistercode.service';
import { LanguageService } from './../../../../services/CRUD/BASE/language.service';
import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { WorkerService } from './../../../../services/CRUD/BASE/worker.service';
import { EstablishmentPropertyTypeService } from './../../../../services/CRUD/BASE/establishmentpropertytype.service';
import { EstablishmentCertificationService } from './../../../../services/CRUD/BASE/establishmentcertification.service';
import { RucNameTypeService } from './../../../../services/CRUD/BASE/rucnametype.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             EstablishmentRoutingModule,
             CKEditorModule,
             AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
             FormsModule],
   declarations: [EstablishmentComponent],
   providers: [
               NgbModal,
               RucService,
               PreviewRegisterCodeService,
               LanguageService,
               UbicationService,
               WorkerService,
               EstablishmentPropertyTypeService,
               EstablishmentCertificationService,
               RucNameTypeService,
               EstablishmentService
               ]
})
export class EstablishmentModule {}