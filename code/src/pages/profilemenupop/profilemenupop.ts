import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RankingsPage } from '../rankings/rankings';
import { RatingsPage } from '../ratings/ratings';
import { QrpagePage } from '../qrpage/qrpage';
import { MoodupdatePage } from '../moodupdate/moodupdate';
import { ProfileDatastoreService } from '../../app/services/profile-datastore.service';
@IonicPage()
@Component({
  selector: 'page-profilemenupop',
  template: `
    <ion-list>
      <button ion-item (click)="nav(ratings)">Ratings</button>
      <button ion-item (click)="nav(rankings)">Rankings</button>
      <button ion-item (click)="nav(qr)">QR</button>
      <button ion-item (click)="nav(mood)">Mood</button>
      <button ion-item (click)="profileEditable()">Edit</button>
    </ion-list>`
})
export class ProfilemenupopPage {
  ratings : any = RatingsPage;
  rankings: any = RankingsPage;
  qr      : any = QrpagePage;
  mood    : any = MoodupdatePage
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private profileDatastoreService : ProfileDatastoreService) {
  }
  nav(page:any){
    this.navCtrl.push(page,{});

  }

  profileEditable() {
    this.profileDatastoreService.dataStore.profileedit = true;
    this.viewCtrl.dismiss();
  }
  

}
