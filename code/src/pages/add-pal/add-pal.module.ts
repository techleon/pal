import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPalPage } from './add-pal';

@NgModule({
  declarations: [
    AddPalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPalPage),
  ],
  exports: [
    AddPalPage
  ]
})
export class AddPalPageModule {}
