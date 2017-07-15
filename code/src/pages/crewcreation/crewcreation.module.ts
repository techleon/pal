import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrewcreationPage } from './crewcreation';

@NgModule({
  declarations: [
    CrewcreationPage,
  ],
  imports: [
    IonicPageModule.forChild(CrewcreationPage),
  ],
  exports: [
    CrewcreationPage
  ]
})
export class CrewcreationPageModule {}
