import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekuInformazioaPage } from './leku-informazioa.page';

const routes: Routes = [
  {
    path: '',
    component: LekuInformazioaPage
  },
  {
    path: 'igeldo-argazkiak',
    loadChildren: () => import('../igeldo-argazkiak/igeldo-argazkiak.module').then( m => m.IgeldoArgazkiakPageModule)
  },
  {
    path: 'lotzeko-jokua',
    loadChildren: () => import('../lotzeko-jokua/lotzeko-jokua.module').then( m => m.LotzekoJokuaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekuInformazioaPageRoutingModule {}
