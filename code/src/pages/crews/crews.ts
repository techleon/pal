import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrewsearchPage } from '../crewsearch/crewsearch';

@IonicPage()
@Component({
  selector: 'page-crews',
  templateUrl: 'crews.html',
  styles: [`
  .default-msg{position:relative;top:25%;left:50%;transform:translate(-50%);
               font-size:2em;opacity:0.5;white space:nowrap;padding:1em;overflow:hidden;
              }
       
`]
})
export class CrewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  nav(){
    this.navCtrl.push(CrewsearchPage,{});
  }
  

}
