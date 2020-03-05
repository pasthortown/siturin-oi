import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountRolRoutingModule } from './accountrol-routing.module';
import { AccountRolComponent } from './accountrol.component';
import { AccountRolService } from './../../../../services/CRUD/AUTH/accountrol.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             AccountRolRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [AccountRolComponent],
   providers: [
               NgbModal,
               AccountRolService
               ]
})
export class AccountRolModule {}