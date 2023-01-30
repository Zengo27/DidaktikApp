import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LetraSopaJokuaPageRoutingModule } from './letra-sopa-jokua-routing.module';

import { LetraSopaJokuaPage } from './letra-sopa-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LetraSopaJokuaPageRoutingModule
  ],
  declarations: [LetraSopaJokuaPage]
})
export class LetraSopaJokuaPageModule {}
