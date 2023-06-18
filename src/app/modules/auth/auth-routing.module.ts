import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : "", component : AuthComponent,
    children : [
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "cadastrar",
        component : RegisterComponent
      },
      {
        path : "esqueceu-a-senha",
        component : RecoverPassComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }