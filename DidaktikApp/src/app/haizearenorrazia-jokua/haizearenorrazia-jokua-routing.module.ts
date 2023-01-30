import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaizearenorraziaJokuaPage } from './haizearenorrazia-jokua.page';

const routes: Routes = [
  {
    path: '',
    component: HaizearenorraziaJokuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaizearenorraziaJokuaPageRoutingModule {}
