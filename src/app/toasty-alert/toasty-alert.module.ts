import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastyAlertPageRoutingModule } from './toasty-alert-routing.module';

import { ToastyAlertPage } from './toasty-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastyAlertPageRoutingModule
  ],
  declarations: [ToastyAlertPage]
})
export class ToastyAlertPageModule {}
