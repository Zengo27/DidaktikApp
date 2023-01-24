import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokuInformazioaPageRoutingModule } from './joku-informazioa-routing.module';

import { JokuInformazioaPage } from './joku-informazioa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokuInformazioaPageRoutingModule
  ],
  declarations: [JokuInformazioaPage]
})
export class JokuInformazioaPageModule {}
