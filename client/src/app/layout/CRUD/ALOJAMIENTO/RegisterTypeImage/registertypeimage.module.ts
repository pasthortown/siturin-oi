import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterTypeImageRoutingModule } from './registertypeimage-routing.module';
import { RegisterTypeImageComponent } from './registertypeimage.component';
import { RegisterTypeImageService } from './../../../../services/CRUD/ALOJAMIENTO/registertypeimage.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';

@NgModule({
   imports: [CommonModule,
             RegisterTypeImageRoutingModule,
             FormsModule],
   declarations: [RegisterTypeImageComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               RegisterTypeImageService
               ]
})
export class RegisterTypeImageModule {}