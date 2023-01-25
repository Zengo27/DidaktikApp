import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DanborradaJolasaPageRoutingModule } from './danborrada-jolasa-routing.module';

import { DanborradaJolasaPage } from './danborrada-jolasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DanborradaJolasaPageRoutingModule
  ],
  declarations: [DanborradaJolasaPage]
})
export class DanborradaJolasaPageModule {}
