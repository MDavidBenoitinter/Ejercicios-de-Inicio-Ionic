import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastyAlertPage } from './toasty-alert.page';

const routes: Routes = [
  {
    path: '',
    component: ToastyAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastyAlertPageRoutingModule {}
