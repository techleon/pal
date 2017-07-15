import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-postvideo',
  templateUrl: 'postvideo.html',
   styles:[`.right{color:black;float:right;}
  .videopost{margin-top:0%;width:100%;height:auto;}
`]
})
export class PostvideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
