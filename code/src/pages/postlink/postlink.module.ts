import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostlinkPage } from './postlink';

@NgModule({
  declarations: [
    PostlinkPage,
  ],
  imports: [
    IonicPageModule.forChild(PostlinkPage),
  ],
  exports: [
    PostlinkPage
  ]
})
export class PostlinkPageModule {}
