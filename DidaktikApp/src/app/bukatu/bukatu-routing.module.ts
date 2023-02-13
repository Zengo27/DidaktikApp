import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukatuPage } from './bukatu.page';

const routes: Routes = [
  {
    path: '',
    component: BukatuPage
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
export class BukatuPageRoutingModule {}
