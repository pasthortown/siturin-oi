import { DinardapService } from 'src/app/services/negocio/dinardap.service';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PasswordRecoveryRoutingModule } from './password-recovery-routing.module';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, PasswordRecoveryRoutingModule, FormsModule, HttpModule],
    declarations: [PasswordRecoveryComponent],
    providers: [AuthService, DinardapService]
})
export class PasswordRecoveryModule {}
