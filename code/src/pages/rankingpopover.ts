import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-rankingpop',
  template: `
  <ion-list radio-group>
    <ion-list-header>
         Rank
    </ion-list-header>

    <ion-item>
        <ion-label>Stranger</ion-label>
        <ion-radio checked="true" value="Stranger"></ion-radio>
    </ion-item>

    <ion-item>
        <ion-label>Acquaintance</ion-label>
        <ion-radio value="Acquaintance"></ion-radio>
    </ion-item>

    <ion-item>
        <ion-label>Buddy</ion-label>
        <ion-radio value="Buddy"></ion-radio>
    </ion-item>

    <ion-item>
        <ion-label>Friend</ion-label>
        <ion-radio value="Friend"></ion-radio>
    </ion-item>

    <ion-item>
        <ion-label>Good Friend</ion-label>
        <ion-radio value="Good Friend"></ion-radio>
    </ion-item>

    <ion-item>
        <ion-label>Best Friend </ion-label>
        <ion-radio value="Best Friend"></ion-radio>
    </ion-item>
    
    <ion-item>
        <ion-label>Bro</ion-label>
        <ion-radio value="Bro"></ion-radio>
    </ion-item>
</ion-list>`
})
export class RankingPopPage {
  constructor(public navCtrl: NavController) {

  }

}
