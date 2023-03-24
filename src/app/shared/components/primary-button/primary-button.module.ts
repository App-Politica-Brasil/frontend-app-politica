import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from '@angular/material/button';
import { PrimaryButtonComponent } from './primary-button.component';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports : [PrimaryButtonComponent]
})
export class PrimaryButtonModule { }