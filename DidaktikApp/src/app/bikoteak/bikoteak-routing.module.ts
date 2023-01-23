import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikoteakPage } from './bikoteak.page';

const routes: Routes = [
  {
    path: '',
    component: BikoteakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikoteakPageRoutingModule {}
