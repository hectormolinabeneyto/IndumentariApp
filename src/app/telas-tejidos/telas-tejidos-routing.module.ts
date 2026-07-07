import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelasTejidosPage } from './telas-tejidos.page';

const routes: Routes = [
  {
    path: '',
    component: TelasTejidosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelasTejidosPageRoutingModule {}
