import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsearchPage } from './eventsearch';

@NgModule({
  declarations: [
    EventsearchPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsearchPage),
  ],
  exports: [
    EventsearchPage
  ]
})
export class EventsearchPageModule {}
