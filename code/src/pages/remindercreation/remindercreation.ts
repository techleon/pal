import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsearchPage } from '../eventsearch/eventsearch';
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-remindercreation',
  templateUrl: 'remindercreation.html',
   styles: [`
  .content{background-color:#686877;}
  .inputs{background-color:transparent;margin-top:15pt;}
  .label{color:#ffa121;}
  .prior{margin-left:10pt;margin-bottom:0;color:#ffa121;}
  .hour{width:20pt}
  .minute{width:20pt}
  .note{background-color:#43434f;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
  .text{background-color:transparent;padding-left:16px;padding-right:16px;}
  .reminders{background-color:transparent;}
  .done{width:100%;margin:0;background-color:#efeaea;}
  
  `]    
})
export class RemindercreationPage {

  fromtime: any;

  eventTime: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createReminder() { 
      let fromtime_hour_min: Array<string> = this.fromtime.split(':');      
      let milliseconds_before: number = (Number(fromtime_hour_min[0]) * this.one_hour_milli()) + (Number(fromtime_hour_min[1]) * this.one_min_milli());      
      let reminder_at = new Date(Number(this.eventTime) - milliseconds_before);
      window.cordova.plugins.notification.local.schedule({
        text: "Delayed Notification",
        at: reminder_at,
        led: "00ff00",
        sound: null
    });
  }

  one_hour_milli(): number {
    return 1000 * 60 * 60;
  }
  one_min_milli(): number {
    return 1000 * 60;
  }
  nav(){
    this.navCtrl.push(EventsearchPage,{});
  }
}
