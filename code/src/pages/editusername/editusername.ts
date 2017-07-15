import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';
import { UserDataStoreService } from '../../app/services/user-data-store.service';

@IonicPage()
@Component({
  selector: 'page-editusername',
  templateUrl: 'editusername.html',
  styles:[`
 .ok{width:50%;float:left;margin-right:0;display:inline-block;}
 .cancel{width:48%;float:right;margin-left:0;display:inline-block;}
 .valids{position:fixed;left:0%;bottom:0%;width:100%;}
`]
})
export class EditusernamePage {

	name: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private userDataStoreService: UserDataStoreService) {
		this.name = this.userDataStoreService.userInfo.name;
	}
 
	updateName() {
		if(this.name)
			this.userService.updateName(this.name)
				.then(response_json => {
					if(response_json.success){
						alert(`Name changed to ${this.name}`);
						this.userDataStoreService.userInfo.name = this.name;
						this.navCtrl.pop();
					}else
						alert('Error updating name, kindly try again later');
				}).catch(function(){
					alert('Error updating name, check your internet connection');
				});
		else
			alert('Please enter your name');
	}

}
