import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-postsettings',
  templateUrl: 'postsettings.html',
})
export class PostsettingsPage {
  post:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  togglepost(){
    console.log("enteredededd");
    this.post=true;
  }
  
}
