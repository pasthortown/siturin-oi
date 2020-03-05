import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UbicationRoutingModule } from './ubication-routing.module';
import { UbicationComponent } from './ubication.component';
import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';

@NgModule({
   imports: [CommonModule,
             UbicationRoutingModule,
             AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
             FormsModule],
   declarations: [UbicationComponent],
   providers: [
               NgbModal,
               UbicationService
               ]
})
export class UbicationModule {}