import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuzzleaPage } from './puzzlea.page';

const routes: Routes = [
  {
    path: '',
    component: PuzzleaPage
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
export class PuzzleaPageRoutingModule {}
