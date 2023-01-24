import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KatedralaJolasaPageRoutingModule } from './katedrala-jolasa-routing.module';

import { KatedralaJolasaPage } from './katedrala-jolasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KatedralaJolasaPageRoutingModule
  ],
  declarations: [KatedralaJolasaPage]
})
export class KatedralaJolasaPageModule {}
