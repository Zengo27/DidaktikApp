import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetraSopaInfoPageRoutingModule } from './letra-sopa-info-routing.module';

import { LetraSopaInfoPage } from './letra-sopa-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetraSopaInfoPageRoutingModule
  ],
  declarations: [LetraSopaInfoPage]
})
export class LetraSopaInfoPageModule {}
