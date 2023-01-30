import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaizearenorraziaJokuaPageRoutingModule } from './haizearenorrazia-jokua-routing.module';

import { HaizearenorraziaJokuaPage } from './haizearenorrazia-jokua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaizearenorraziaJokuaPageRoutingModule
  ],
  declarations: [HaizearenorraziaJokuaPage]
})
export class HaizearenorraziaJokuaPageModule {}
