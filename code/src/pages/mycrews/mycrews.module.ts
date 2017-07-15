import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycrewsPage } from './mycrews';

@NgModule({
  declarations: [
    MycrewsPage
  ],
  imports: [
    IonicPageModule.forChild(MycrewsPage),
  ],
  exports: [
    MycrewsPage
  ]
})
export class MycrewsPageModule {}
