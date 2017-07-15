import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemindercreationPage } from './remindercreation';

@NgModule({
  declarations: [
    RemindercreationPage,
  ],
  imports: [
    IonicPageModule.forChild(RemindercreationPage),
  ],
  exports: [
    RemindercreationPage
  ]
})
export class RemindercreationPageModule {}
