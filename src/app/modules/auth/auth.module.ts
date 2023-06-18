import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    RecoverPassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimaryButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class AuthModule { }
