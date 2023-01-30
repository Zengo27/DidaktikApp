import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetraSopaInfoPage } from './letra-sopa-info.page';

const routes: Routes = [
  {
    path: '',
    component: LetraSopaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetraSopaInfoPageRoutingModule {}
