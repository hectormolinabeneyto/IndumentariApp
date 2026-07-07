import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TelasTejidosPage } from './telas-tejidos.page';

import { TelasTejidosPageRoutingModule } from './telas-tejidos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelasTejidosPageRoutingModule
  ],
  declarations: [TelasTejidosPage]
})
export class TelasTejidosPageModule {}
