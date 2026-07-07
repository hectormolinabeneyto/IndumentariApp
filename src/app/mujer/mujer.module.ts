import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MujerPage } from './mujer.page';

import { MujerPageRoutingModule } from './mujer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujerPageRoutingModule
  ],
  declarations: [MujerPage]
})
export class MujerPageModule {}
