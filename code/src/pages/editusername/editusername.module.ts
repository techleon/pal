import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditusernamePage } from './editusername';

@NgModule({
  declarations: [
    EditusernamePage,
  ],
  imports: [
    IonicPageModule.forChild(EditusernamePage),
  ],
  exports: [
    EditusernamePage
  ]
})
export class EditusernamePageModule {}
