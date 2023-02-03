import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikoteakPage } from './bikoteak.page';

const routes: Routes = [
  {
    path: '',
    component: BikoteakPage
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
export class BikoteakPageRoutingModule {}
