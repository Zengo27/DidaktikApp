import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetraSopaJokuaPage } from './letra-sopa-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: LetraSopaJokuaPage
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
export class LetraSopaJokuaPageRoutingModule {}
