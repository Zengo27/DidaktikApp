import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KatedralaJolasaPage } from './katedrala-jolasa.page';

const routes: Routes = [
  {
    path: '',
    component: KatedralaJolasaPage
  },
  {
    path: 'bukatu',
    loadChildren: () => import('../bukatu/bukatu.module').then( m => m.BukatuPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KatedralaJolasaPageRoutingModule {}
