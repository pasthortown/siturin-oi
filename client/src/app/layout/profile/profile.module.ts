import { environment } from 'src/environments/environment';
import { HttpModule } from '@angular/http';
import { AuthService } from './../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserService } from 'src/app/services/profile/user.service';
import { ProfilePictureService } from 'src/app/services/profile/profilepicture.service';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, FormsModule, HttpModule, AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),],
  declarations: [ProfileComponent],
  providers: [AuthService, UserService, ProfilePictureService]
})
export class ProfileModule {}
