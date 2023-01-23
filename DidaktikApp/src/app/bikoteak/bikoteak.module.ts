import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikoteakPageRoutingModule } from './bikoteak-routing.module';

import { BikoteakPage } from './bikoteak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikoteakPageRoutingModule
  ],
  declarations: [BikoteakPage]
})
export class BikoteakPageModule {}
