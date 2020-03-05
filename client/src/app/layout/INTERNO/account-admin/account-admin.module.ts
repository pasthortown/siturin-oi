import { UserService } from './../../../services/profile/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DinardapService } from './../../../services/negocio/dinardap.service';
import { AccountAdminRoutingModule } from './account-admin-routing.module';
import { AccountAdminComponent } from './account-admin.component';

@NgModule({
  imports: [CommonModule, AccountAdminRoutingModule, FormsModule],
  declarations: [AccountAdminComponent],
  providers: [UserService, DinardapService]
})
export class AccountAdminModule {}
