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
    redirectTo: 'mapa',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukatuPageRoutingModule {}
