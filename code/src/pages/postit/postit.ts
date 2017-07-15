import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PosttextPage } from '../postext/postext';
import { PostsoundPage } from '../postsound/postsound';
import { PostpicPage } from '../postpic/postpic';
import { PostlinkPage } from '../postlink/postlink';
import { PostvideoPage } from '../postvideo/postvideo';
@IonicPage()
@Component({
  selector: 'page-postit',
  templateUrl: 'postit.html',
  styles     : [`
  
  .pic{height: 20%;width:100%;margin:0;background-image:url(assets/image.jpg);background-size:cover;color:black;}
  .audio{height: 20%;width:100%;margin:0;background-image:url(assets/audio.jpg);background-size:cover;color:white;}
  .quote{height: 20%;width:100%;margin:0;background-image:url(assets/quote.jpg);background-size:cover;color:black;}
  .link{height: 20%;width:100%;margin:0;background-image:url(assets/link.jpg);background-size:cover;color:black;}
  .video{height: 20%;width:100%;margin:0;background-image:url(assets/video.jpg);background-size:cover;}
 `]
})
export class PostitPage {
  ptext :any = PosttextPage;
  psound:any = PostsoundPage;
  ppic  :any = PostpicPage;
  plink :any = PostlinkPage;
  pvideo:any = PostvideoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  nav(page:any){
    this.navCtrl.push(page,{});
  }
  

}
