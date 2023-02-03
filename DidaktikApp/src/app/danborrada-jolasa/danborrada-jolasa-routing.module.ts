import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanborradaJolasaPage } from './danborrada-jolasa.page';

const routes: Routes = [
  {
    path: '',
    component: DanborradaJolasaPage
  },
  {
    path: 'bukatu',
    loadChildren: () => import('../bukatu/bukatu.module').then( m => m.BukatuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanborradaJolasaPageRoutingModule {}
