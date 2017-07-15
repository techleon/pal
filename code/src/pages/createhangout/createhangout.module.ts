import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatehangoutPage } from './createhangout';

@NgModule({
  declarations: [
    CreatehangoutPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatehangoutPage),
  ],
  exports: [
    CreatehangoutPage
  ]
})
export class CreatehangoutPageModule {}
