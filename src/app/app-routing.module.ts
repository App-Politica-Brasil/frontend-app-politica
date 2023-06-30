import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : () => import("./modules/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path : "conta",
    loadChildren : () => import("./modules/auth/auth.module").then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
