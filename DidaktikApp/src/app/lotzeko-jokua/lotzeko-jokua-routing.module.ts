import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotzekoJokuaPage } from './lotzeko-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: LotzekoJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotzekoJokuaPageRoutingModule {}
