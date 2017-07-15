import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPopPage } from './ratingpopover';

@NgModule({
  declarations: [
    RatingPopPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPopPage),
  ],
  exports: [
    RatingPopPage
  ]
})
export class RatingPopModule {}
