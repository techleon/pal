import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PosttextPage } from './postext';

@NgModule({
  declarations: [
    PosttextPage,
  ],
  imports: [
    IonicPageModule.forChild(PosttextPage),
  ],
  exports: [
    PosttextPage
  ]
})
export class PosttextPageModule {}
