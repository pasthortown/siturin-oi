import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './../../../../services/CRUD/CATASTRO/register.service';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';

@NgModule({
   imports: [CommonModule,
             RegisterRoutingModule,
             AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
             FormsModule],
   declarations: [RegisterComponent],
   providers: [
               NgbModal,
               DinardapService,
               RegisterService
               ]
})
export class RegisterModule {}