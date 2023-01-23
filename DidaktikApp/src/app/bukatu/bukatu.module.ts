import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukatuPageRoutingModule } from './bukatu-routing.module';

import { BukatuPage } from './bukatu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukatuPageRoutingModule
  ],
  declarations: [BukatuPage]
})
export class BukatuPageModule {}
