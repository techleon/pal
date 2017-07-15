import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsettingsPage } from '../postsettings/postsettings';

@IonicPage()
@Component({
  selector: 'page-postext',
  templateUrl: 'postext.html',
  styles:[`.right{color:black;float:right;}

`]
})
export class PosttextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  nav(page:any){
    this.navCtrl.push(PostsettingsPage,{});
  }
 
}
