import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  },
  {
    path: 'leku-informazioa/:lekua',
    children:[
      {
        path:"",
        loadChildren: () => import('../leku-informazioa/leku-informazioa.module').then( m => m.LekuInformazioaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
