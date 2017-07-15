import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemindercreationPage } from '../remindercreation/remindercreation';

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
  styles: [`
  .default-msg{position:relative;top:25%;left:50%;transform:translate(-50%);
               font-size:2em;opacity:0.5;white space:nowrap;padding:1em;overflow:hidden;
              }
     
`]
})
export class ReminderPage {
  constructor(public navCtrl: NavController, public navParams: NavParams){}
  remindercreationPage:any=RemindercreationPage;
  nav(page:any){
    this.navCtrl.push(RemindercreationPage,{});
  }  
  

}
