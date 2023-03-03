import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    FlexLayoutModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule,
  ],
  // exports: [LoginComponent, SignupComponent],
})
export class AuthModule {}
