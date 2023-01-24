import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekuInformazioaPage } from './leku-informazioa.page';

const routes: Routes = [
  {
    path: '',
    component: LekuInformazioaPage
  },
  {
    path: 'joku-informazioa',
    loadChildren: () => import('../joku-informazioa/joku-informazioa.module').then( m => m.JokuInformazioaPageModule)
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
