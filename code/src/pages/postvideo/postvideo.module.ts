import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostvideoPage } from './postvideo';

@NgModule({
  declarations: [
    PostvideoPage,
  ],
  imports: [
    IonicPageModule.forChild(PostvideoPage),
  ],
  exports: [
    PostvideoPage
  ]
})
export class PostvideoPageModule {}
