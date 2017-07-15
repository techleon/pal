import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostitPage } from '../postit/postit';
@Component({
  selector: 'page-social',
  templateUrl: 'social.html'
})
export class SocialPage {
 constructor(public navCtrl: NavController) {

  }
   nav(){
    this.navCtrl.push(PostitPage,{});
  }
}
