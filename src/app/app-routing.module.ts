import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'telas-tejidos',
    loadChildren: () => import('./telas-tejidos/telas-tejidos.module').then( m => m.TelasTejidosPageModule)
  },
  {
    path: 'hombre',
    loadChildren: () => import('./hombre/hombre.module').then( m => m.HombrePageModule)
  },
  {
    path: 'mujer',
    loadChildren: () => import('./mujer/mujer.module').then( m => m.MujerPageModule)
  },
  {
    path: 'ninos',
    loadChildren: () => import('./ninos/ninos.module').then( m => m.NinosPageModule)
  },
  {
    path: 'tutoriales',
    loadChildren: () => import('./tutoriales/tutoriales.module').then( m => m.TutorialesPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
