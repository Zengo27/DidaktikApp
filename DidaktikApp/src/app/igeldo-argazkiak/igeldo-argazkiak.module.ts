import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IgeldoArgazkiakPageRoutingModule } from './igeldo-argazkiak-routing.module';

import { IgeldoArgazkiakPage } from './igeldo-argazkiak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IgeldoArgazkiakPageRoutingModule
  ],
  declarations: [IgeldoArgazkiakPage]
})
export class IgeldoArgazkiakPageModule {}
