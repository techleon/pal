import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrewsearchPage } from './crewsearch';

@NgModule({
  declarations: [
    CrewsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CrewsearchPage),
  ],
  exports: [
    CrewsearchPage
  ]
})
export class CrewsearchPageModule {}
