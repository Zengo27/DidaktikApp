import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokuInformazioaPage } from './joku-informazioa.page';

const routes: Routes = [
  {
    path: '',
    component: JokuInformazioaPage
  },{
    path: 'igeldo-argazkiak',
    loadChildren: () => import('../igeldo-argazkiak/igeldo-argazkiak.module').then( m => m.IgeldoArgazkiakPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokuInformazioaPageRoutingModule {}
