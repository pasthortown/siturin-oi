import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReceptionRoomRoutingModule } from './receptionroom-routing.module';
import { ReceptionRoomComponent } from './receptionroom.component';
import { ReceptionRoomService } from './../../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';

@NgModule({
   imports: [CommonModule,
             ReceptionRoomRoutingModule,
             FormsModule],
   declarations: [ReceptionRoomComponent],
   providers: [
               NgbModal,
               RegisterService,
               ReceptionRoomService
               ]
})
export class ReceptionRoomModule {}