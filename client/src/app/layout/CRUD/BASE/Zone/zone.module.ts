import { UserService } from './../../../../services/profile/user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneComponent } from './zone.component';
import { ZoneService } from './../../../../services/CRUD/BASE/zone.service';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             ZoneRoutingModule,
             CKEditorModule,
             AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
             FormsModule],
   declarations: [ZoneComponent],
   providers: [
               NgbModal,
               UbicationService,
               UserService,
               ZoneService
               ]
})
export class ZoneModule {}