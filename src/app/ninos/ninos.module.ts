import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NinosPage } from './ninos.page';

import { NinosPageRoutingModule } from './ninos-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NinosPageRoutingModule
  ],
  declarations: [NinosPage]
})
export class NinosPageModule {}
