import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TutorialesPage } from './tutoriales.page';

import { TutorialesPageRoutingModule } from './tutoriales-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialesPageRoutingModule
  ],
  declarations: [TutorialesPage]
})
export class TutorialesPageModule {}
