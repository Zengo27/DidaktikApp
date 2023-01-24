import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanborradaArgazkiakPageRoutingModule } from './danborrada-argazkiak-routing.module';

import { DanborradaArgazkiakPage } from './danborrada-argazkiak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanborradaArgazkiakPageRoutingModule
  ],
  declarations: [DanborradaArgazkiakPage]
})
export class DanborradaArgazkiakPageModule {}
