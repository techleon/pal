import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostpicPage } from './postpic';

@NgModule({
  declarations: [
    PostpicPage,
  ],
  imports: [
    IonicPageModule.forChild(PostpicPage),
  ],
  exports: [
    PostpicPage
  ]
})
export class PostpicPageModule {}
