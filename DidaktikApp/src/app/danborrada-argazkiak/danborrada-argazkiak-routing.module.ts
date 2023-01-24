import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanborradaArgazkiakPage } from './danborrada-argazkiak.page';

const routes: Routes = [
  {
    path: '',
    component: DanborradaArgazkiakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanborradaArgazkiakPageRoutingModule {}
