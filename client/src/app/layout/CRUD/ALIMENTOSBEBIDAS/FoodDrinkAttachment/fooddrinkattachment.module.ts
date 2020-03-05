import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodDrinkAttachmentRoutingModule } from './fooddrinkattachment-routing.module';
import { FoodDrinkAttachmentComponent } from './fooddrinkattachment.component';
import { FoodDrinkAttachmentService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';

@NgModule({
   imports: [CommonModule,
             FoodDrinkAttachmentRoutingModule,
             FormsModule],
   declarations: [FoodDrinkAttachmentComponent],
   providers: [
               NgbModal,
               RegisterService,
               FoodDrinkAttachmentService
               ]
})
export class FoodDrinkAttachmentModule {}