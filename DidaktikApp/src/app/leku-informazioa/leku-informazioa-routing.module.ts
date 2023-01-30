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
  {
    path: 'danborrada-jolasa',
    loadChildren: () => import('../danborrada-jolasa/danborrada-jolasa.module').then( m => m.DanborradaJolasaPageModule)
  },
  {
    path: 'haizearenorrazia-jokua',
    loadChildren: () => import('../haizearenorrazia-jokua/haizearenorrazia-jokua.module').then( m => m.HaizearenorraziaJokuaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekuInformazioaPageRoutingModule {}
