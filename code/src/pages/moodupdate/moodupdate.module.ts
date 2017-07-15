import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodupdatePage } from './moodupdate';

@NgModule({
  declarations: [
    MoodupdatePage,
  ],
  imports: [
    IonicPageModule.forChild(MoodupdatePage)
  ],
  exports: [
    MoodupdatePage
  ]
})
export class MoodupdatePageModule {}
