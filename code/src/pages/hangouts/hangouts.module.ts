import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HangoutsPage } from './hangouts';

@NgModule({
  declarations: [
    HangoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(HangoutsPage),
  ],
  exports: [
    HangoutsPage
  ]
})
export class HangoutsPageModule {}
