import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrewPage } from './crew';

@NgModule({
  declarations: [
    CrewPage,
  ],
  imports: [
    IonicPageModule.forChild(CrewPage),
  ],
  exports: [
    CrewPage
  ]
})
export class CrewPageModule {}
