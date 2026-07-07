import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HombrePage } from './hombre.page';

import { HombrePageRoutingModule } from './hombre-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombrePageRoutingModule
  ],
  declarations: [HombrePage]
})
export class HombrePageModule {}
