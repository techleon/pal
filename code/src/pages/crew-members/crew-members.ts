import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrewService } from '../../app/services/crew.service';
import { UserService } from '../../app/services/user.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the CrewMembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crew-members',
  templateUrl: 'crew-members.html',
})
export class CrewMembersPage {

  crew: any;
  crew_members: Array<any> = [];
  constructor(private sanitizer: DomSanitizer, private userService: UserService, public navCtrl: NavController, public navParams: NavParams, private crewService: CrewService) {
  	this.crew = this.navParams.data.crew;
  	this.loadCrewMembers();
  }

  ionViewDidLoad() {
    
  }

  loadCrewMembers() {
  	this.crewService.getCrewMembers(this.crew._id)
  		.then(response_json => {
  			if(response_json.success){
  				this.crew_members = response_json.crew_members;
  				for(let crew_member of this.crew_members){
  					this.loadProfileImage(crew_member);
  				}
  			}
  		})
  }

  openProfile(user_id) {
  	this.navCtrl.push(ProfilePage, {user_id: user_id});
  }

  name(crew_member: any) {
  	if(crew_member.user_info[0])
  		return crew_member.user_info[0].name;
  	else
  		return '';
  }


  loadProfileImage(crew_member) {
    this.userService.getProfileImageAny(crew_member.user_id)
      .then(response_base64 => {
      	if(response_base64)
        	crew_member.cover_base64_data_uri = `data:image/*;base64,${response_base64}`;
      }).catch(function() {

      });
  }


  trustUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
