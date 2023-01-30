import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LetraSopaJokuaPage } from './letra-sopa-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: LetraSopaJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetraSopaJokuaPageRoutingModule {}
