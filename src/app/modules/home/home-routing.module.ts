import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DeputiesComponent } from './pages/deputies/deputies.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent,
    children : [
      {
        path : "",
        component : IntroductionComponent
      },
      {
        path : "deputados",
        component : DeputiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
