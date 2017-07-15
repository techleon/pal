import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostitPage } from './postit';

@NgModule({
  declarations: [
    PostitPage,
  ],
  imports: [
    IonicPageModule.forChild(PostitPage),
  ],
  exports: [
    PostitPage
  ]
})
export class PostitPageModule {}
