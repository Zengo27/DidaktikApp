import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IgeldoArgazkiakPage } from './igeldo-argazkiak.page';

const routes: Routes = [
  {
    path: '',
    component: IgeldoArgazkiakPage
  },
  {
    path: 'bikoteak',
    loadChildren: () => import('../bikoteak/bikoteak.module').then( m => m.BikoteakPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IgeldoArgazkiakPageRoutingModule {}
