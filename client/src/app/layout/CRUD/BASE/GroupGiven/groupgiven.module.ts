import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupGivenRoutingModule } from './groupgiven-routing.module';
import { GroupGivenComponent } from './groupgiven.component';
import { GroupGivenService } from './../../../../services/CRUD/BASE/groupgiven.service';
import { environment } from 'src/environments/environment';
import { RucService } from './../../../../services/CRUD/BASE/ruc.service';
import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';
import { GroupTypeService } from './../../../../services/CRUD/BASE/grouptype.service';

@NgModule({
   imports: [CommonModule,
             GroupGivenRoutingModule,
             FormsModule],
   declarations: [GroupGivenComponent],
   providers: [
               NgbModal,
               RucService,
               PersonRepresentativeService,
               GroupTypeService,
               GroupGivenService
               ]
})
export class GroupGivenModule {}