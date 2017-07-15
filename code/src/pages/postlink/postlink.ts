import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsettingsPage } from '../postsettings/postsettings';

@IonicPage()
@Component({
  selector: 'page-postlink',
  templateUrl: 'postlink.html',
  styles:[`.right{color:black;float:right;}

`]
})
export class PostlinkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   nav(page:any){
    this.navCtrl.push(PostsettingsPage,{});
  }
 

}
