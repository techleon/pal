import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrewsPage } from './crews';

@NgModule({
  declarations: [
    CrewsPage,
  ],
  imports: [
    IonicPageModule.forChild(CrewsPage),
  ],
  exports: [
    CrewsPage
  ]
})
export class CrewsPageModule {}
