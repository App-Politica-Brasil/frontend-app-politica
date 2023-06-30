import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { CardContainerModule } from 'src/app/shared/components/card-container/card-container.module';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { DeputiesComponent } from './pages/deputies/deputies.component';
import { DeputyCardComponent } from './components/deputy-card/deputy-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    IntroductionComponent,
    DeputiesComponent,
    DeputyCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    CardContainerModule
  ]
})
export class HomeModule { }
