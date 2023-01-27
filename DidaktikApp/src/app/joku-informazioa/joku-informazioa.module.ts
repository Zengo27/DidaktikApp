import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokuInformazioaPageRoutingModule } from './joku-informazioa-routing.module';

import { JokuInformazioaPage } from './joku-informazioa.page';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    JokuInformazioaPageRoutingModule
  ],
  declarations: [JokuInformazioaPage]
})
export class JokuInformazioaPageModule {}
