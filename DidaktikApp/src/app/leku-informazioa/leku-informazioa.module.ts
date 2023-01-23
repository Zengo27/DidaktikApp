import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LekuInformazioaPageRoutingModule } from './leku-informazioa-routing.module';

import { LekuInformazioaPage } from './leku-informazioa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LekuInformazioaPageRoutingModule
  ],
  declarations: [LekuInformazioaPage]
})
export class LekuInformazioaPageModule {}
