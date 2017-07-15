import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsoundPage } from './postsound';

@NgModule({
  declarations: [
    PostsoundPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsoundPage),
  ],
  exports: [
    PostsoundPage
  ]
})
export class PostsoundPageModule {}
