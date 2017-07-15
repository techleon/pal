import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventypePage } from './eventype';

@NgModule({
  declarations: [
    EventypePage,
  ],
  imports: [
    IonicPageModule.forChild(EventypePage),
  ],
  exports: [
    EventypePage
  ]
})
export class EventypePageModule {}
