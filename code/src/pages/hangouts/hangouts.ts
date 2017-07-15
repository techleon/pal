import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatehangoutPage } from "../createhangout/createhangout";
@Component({
  selector: 'page-hangouts',
  templateUrl: 'hangouts.html',
  styles: [`
  .default-msg{position:relative;top:25%;left:50%;transform:translate(-50%);
               font-size:2em;opacity:0.5;white space:nowrap;padding:1em;overflow:hidden;
              }
  
`]
})
export class HangoutsPage {
  
  nav(){
    this.navCtrl.push(CreatehangoutPage,{});
  }
  constructor(public navCtrl: NavController){}

}
