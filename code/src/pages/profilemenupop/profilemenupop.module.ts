import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilemenupopPage } from './profilemenupop';

@NgModule({
  declarations: [
    ProfilemenupopPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilemenupopPage),
  ],
  exports: [
    ProfilemenupopPage
  ]
})
export class ProfilemenupopPageModule {}
