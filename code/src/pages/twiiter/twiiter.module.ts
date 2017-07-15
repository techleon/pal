import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwiiterPage } from './twiiter';

@NgModule({
  declarations: [
    TwiiterPage,
  ],
  imports: [
    IonicPageModule.forChild(TwiiterPage),
  ],
  exports: [
    TwiiterPage
  ]
})
export class TwiiterPageModule {}
