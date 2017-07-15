import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataStoreService } from '../../app/services/user-data-store.service';
import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-moodupdate',
  templateUrl: 'moodupdate.html',
})
export class MoodupdatePage {

	toggled: boolean = false;

	emojitext: string;

	constructor(private userService: UserService, public navCtrl: NavController, public navParams: NavParams, private userDataStoreService: UserDataStoreService) {
	}

	handleSelection(event) {
		
	}  

	updateMood() {
		this.userService.updateMood(this.emojitext)
			.then(response_json => {
				if(response_json.success){
					this.userDataStoreService.userInfo.mood = this.emojitext;
					alert('Mood updated');
					this.navCtrl.pop();
				}else{
					alert('Error updating mood');
				}
			});
	}

	currentMood(): string {
		return this.userDataStoreService.userInfo.mood;
	}

}
