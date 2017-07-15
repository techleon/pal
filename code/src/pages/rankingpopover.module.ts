import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankingPopPage } from './rankingpopover';

@NgModule({
  declarations: [
    RankingPopPage,
  ],
  imports: [
    IonicPageModule.forChild(RankingPopPage),
  ],
  exports: [
    RankingPopPage
  ]
})
export class RankingPopModule {}
