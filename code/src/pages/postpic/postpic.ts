import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsettingsPage } from '../postsettings/postsettings';
@IonicPage()
@Component({
  selector: 'page-postpic',
  templateUrl: 'postpic.html',
  styles:[`.right{color:black;float:right;}
  .imagepost{margin-top:0%;width:100%;height:auto;}
`]
})
export class PostpicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
   nav(page:any){
    this.navCtrl.push(PostsettingsPage,{});
  }
 

}
