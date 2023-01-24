import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotzekoJokuaPageRoutingModule } from './lotzeko-jokua-routing.module';

import { LotzekoJokuaPage } from './lotzeko-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotzekoJokuaPageRoutingModule
  ],
  declarations: [LotzekoJokuaPage]
})
export class LotzekoJokuaPageModule {}
