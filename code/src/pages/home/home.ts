import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WallPage } from '../wall/wall';
import { HangoutsPage } from '../hangouts/hangouts';
import { SocialPage } from '../social/social';
import { ProfilePage } from '../profile/profile';
import { ReminderPage } from '../reminder/reminder';
import { CrewPage } from '../crew/crew';
import { PrivacyPage } from '../privacy/privacy';
import { UserDataStoreService } from '../../app/services/user-data-store.service';
import { IntroPage } from '../intro/intro';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles:[`
          .content{background-color:#202020;}
          .profile{background-color:#202020;color:#ff9400;}
          .reminders{background-color:#202020;color:#ff9400;}
          .crews{background-color:#202020;color:#ff9400;}
          .privacy{background-color:#202020;color:#ff9400;}
          .logout{background-color:#202020;color:#ff9400;}
          .tabs{background-opacity:0.5;}
          .rem-icon{width:12%;height:12%;float:left;margin-right:5%; color:#32db64;} 
          .crews-icon{width:12%;height:12%;float:left;margin-right:5%;color:#32db64;}
          .profile-icon{width:12%;height:12%;float:left;margin-right:5%;color:#32db64;}
          .privacy-icon{width:12%;height:12%;float:left;margin-right:5%;color:#32db64;}
          .logout-icon{width:12%;height:12%;float:left;margin-right:5%;color:#32db64;}
          `]
})
export class HomePage {
  tab1Root:     any = WallPage;
  tab2Root:     any = HangoutsPage;
  tab3Root:     any = SocialPage;
  profilePage:  any = ProfilePage;
  reminderPage: any = ReminderPage;
  crewPage:     any = CrewPage;
  privacyPage:  any = PrivacyPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userDataStoreService: UserDataStoreService) {
        
  }   
  
  openPage(page:any) {   
    this.navCtrl.push(page,{});
  }

  logout() {
    this.userDataStoreService.userInfo = {};
    this.navCtrl.push(IntroPage, {});
  }

}
