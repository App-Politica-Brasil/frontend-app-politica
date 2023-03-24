import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RecoverPassComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimaryButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class HomeModule { }
