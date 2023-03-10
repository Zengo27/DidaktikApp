import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotzekoJokuaPage } from './lotzeko-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: LotzekoJokuaPage
  },
  {
    path: 'katedrala-jolasa',
    loadChildren: () => import('../katedrala-jolasa/katedrala-jolasa.module').then( m => m.KatedralaJolasaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotzekoJokuaPageRoutingModule {}
