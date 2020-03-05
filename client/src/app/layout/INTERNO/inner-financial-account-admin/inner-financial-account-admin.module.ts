import { UserService } from './../../../services/profile/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DinardapService } from './../../../services/negocio/dinardap.service';

import { InnerFinancialAccountAdminRoutingModule } from './inner-financial-account-admin-routing.module';
import { InnerFinancialAccountAdminComponent } from './inner-financial-account-admin.component';

@NgModule({
  imports: [CommonModule, InnerFinancialAccountAdminRoutingModule, FormsModule],
  declarations: [InnerFinancialAccountAdminComponent],
  providers: [UserService, DinardapService]
})
export class InnerFinancialAccountAdminModule {}
