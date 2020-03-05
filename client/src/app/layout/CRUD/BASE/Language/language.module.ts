import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageComponent } from './language.component';
import { LanguageService } from './../../../../services/CRUD/BASE/language.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             LanguageRoutingModule,
             FormsModule],
   declarations: [LanguageComponent],
   providers: [
               NgbModal,
               LanguageService
               ]
})
export class LanguageModule {}