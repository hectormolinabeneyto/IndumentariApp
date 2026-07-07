import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialesPage } from './tutoriales.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialesPageRoutingModule {}
