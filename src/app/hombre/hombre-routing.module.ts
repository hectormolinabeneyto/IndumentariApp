import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombrePage } from './hombre.page';

const routes: Routes = [
  {
    path: '',
    component: HombrePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HombrePageRoutingModule {}
