import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MycrewsPage } from '../mycrews/mycrews';
import { CrewsPage } from '../crews/crews'


@IonicPage()
@Component({
  selector: 'page-crew',
  templateUrl: 'crew.html',
  
})
export class CrewPage {
  tab1Root:     any = MycrewsPage;
  tab2Root:     any = CrewsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  openpage(page:any) {
    this.navCtrl.push(page,{});
  }

}
