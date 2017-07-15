import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrewMembersPage } from './crew-members';

@NgModule({
  declarations: [
    CrewMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(CrewMembersPage),
  ],
  exports: [
    CrewMembersPage
  ]
})
export class CrewMembersPageModule {}
