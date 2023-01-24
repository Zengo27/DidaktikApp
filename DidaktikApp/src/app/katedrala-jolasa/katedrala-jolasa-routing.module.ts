import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KatedralaJolasaPage } from './katedrala-jolasa.page';

const routes: Routes = [
  {
    path: '',
    component: KatedralaJolasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KatedralaJolasaPageRoutingModule {}
