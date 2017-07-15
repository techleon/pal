import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { EditusernamePage } from '../editusername/editusername';
import { UserService } from '../../app/services/user.service';
import { RatingsPage } from '../ratings/ratings';
import { RankingsPage } from '../rankings/rankings';
import { ProfilemenupopPage } from '../profilemenupop/profilemenupop';
import { PostitPage } from '../postit/postit';
import { RatingPopPage } from '../ratingpopover';
import { RankingPopPage } from '../rankingpopover';
import { ProfileDatastoreService } from '../../app/services/profile-datastore.service';
import { UserDataStoreService } from '../../app/services/user-data-store.service'; 
import { HttpClientService } from '../../app/services/http-client.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@IonicPage()
@Component({
selector   : 'page-profile',
templateUrl: 'profile.html',
styles     : [`
 .profile-content{
  height:30%;
  background-image:url('assets/twirl.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size:cover;
}
.avatar {
  background-image: url("assets/bulldog.jpeg");
  background-size: cover;
  border-radius: 10%;
  border:2px solid green;
  margin-left:50%;transform:translateX(-50%);
  position:relative;
  top:-5rem;
  width: 10rem;
  height: 10rem;
  box-shadow: 0 0 0 8px rgba(255,255,255,0.2);
  }

.username{margin-top:-35%;}
.user-name{text-align:center;font-size:20pt;color:#32db64;}
.profileediticon{float:right;margin:2% 2% 28% 2%;width:20pt;height:20pt;font-size:15pt;display:inline;position:absolute;color:#ff9400;}
.profimage-edit{margin-left:calc(50% + 3rem);position: relative; top: -18rem;}
.coverimage-edit{margin-left:calc(50% + 12rem);position: relative; top: -20rem;}
.menuoptions{position: fixed; top: calc(56px + 1rem);right:1rem;font-size:25pt;color:#ff9400;}
.profile{background-color:#fff;}
.mood-update{background-color:#efeaea;}
.moodinput{color:#efeaea;}
.profiledetails{background-color:#202020; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
.profile-segments{background-color:#efeaea;}
.valids{left:0%;width:100%;}
.cancel{width:100%;margin:0;display:inline-block;background-color:#efeaea;}
.rate{color:#ff9400;width:30%;}
.rank{color:#ff9400;width:30%;}
.anotext{color:#ff9400;width:30%;}
.anotext-icon{width:50%;height:50%;}
.profile{background-color:#686877;}
.profactions{background-color:#050505;}
.description{color:white;}
`]
})
export class ProfilePage {
  profileedit : boolean;
  ratings:      any = RatingsPage;
  rankings:     any = RankingsPage;
  editusername: any = EditusernamePage;
  postit   :    any = PostitPage;
  filePath: string;
  fileTransfer: FileTransferObject;
  uploadURL: string;
  profile_base64_data_uri: string;
  cover_base64_data_uri: string;
  user: any;
  constructor(
      private transfer: FileTransfer, 
      private file: File, 
      public navCtrl: NavController, 
      public navParams: NavParams, 
      private profileDatastoreService : ProfileDatastoreService, 
      private imagePicker: ImagePicker, 
      private userService: UserService,
      public popoverCtrl: PopoverController, 
      private httpClient: HttpClientService, 
      private userDataStoreService: UserDataStoreService
    ) {
    if(this.navParams.data.user_id){
      this.user = {
      }
      this.userService.getUserInfo(this.navParams.data.user_id)
        .then(response_json => {
          if(response_json.success){
            this.user = response_json.user_info;
            this.loadCoverImage()
            this.loadProfileImage();
          }
        });
    }else{
      this.user = this.userDataStoreService.userInfo;
    }
    this.profileedit=false;
    this.fileTransfer = this.transfer.create();
  }


  ionViewDidLoad() {
    this.loadProfileImage();
    this.loadCoverImage();
  }

   editvisibility(visibility:boolean){
    
   }
   profilemenuPopover(popevent) {
    let popover = this.popoverCtrl.create(ProfilemenupopPage);
    popover.present({
      ev: popevent
    });
  }
   ratingPopover(popevent) {
    let popover = this.popoverCtrl.create(RatingPopPage);
    popover.present({
      ev: popevent
    });
  }
   rankingPopover(popevent) {
    let popover = this.popoverCtrl.create(RankingPopPage);
    popover.present({
      ev: popevent
    });
  }
  
  nav(page:any){
    this.navCtrl.push(page,{});
  }
  
  selectImage() {
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
      //for (var i = 0; i < results.length; i++) {
      //    alert('Image URI: ' + results[i]);
      //}      
      if(results[0]){
        var extension = results[0].split('.').pop()
        let options: FileUploadOptions = {
           fileKey: 'file',
           fileName: ('image.' + extension),
           headers: {
             'x-api-key': this.userDataStoreService.userInfo.api_key
           }
        }
        this.httpClient.appComponent.showLoading();
        this.fileTransfer.upload(results[0], this.httpClient.serverPath('users/profile_image'), options)
         .then((data) => {
           var response_json = JSON.parse(data.response);
           if(response_json.success){
             this.httpClient.appComponent.dismissLoading();
             this.loadProfileImage();
             alert('Profile image updated');
           }else
             alert('Error updating profile image');
         }, (err) => {
           this.httpClient.appComponent.dismissLoading();
           alert('Error updating profile image');
         })
      }
    }, (err) => { });
  }

  loadProfileImage() {
    if(this.user.api_key)
      this.userService.getProfileImage()
        .then(response_base64 => {
          this.profile_base64_data_uri = `data:image/*;base64,${response_base64}`;
          document.getElementById('avatar').style.backgroundImage = `url("${this.profile_base64_data_uri}")`;
        }).catch(function() {

        });
    else
      this.userService.getProfileImageAny(this.user._id)
        .then(response_base64 => {
          this.profile_base64_data_uri = `data:image/*;base64,${response_base64}`;
          document.getElementById('avatar').style.backgroundImage = `url("${this.profile_base64_data_uri}")`;
        }).catch(function() {

        });
  }

  selectCoverImage() {
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
      //for (var i = 0; i < results.length; i++) {
      //    alert('Image URI: ' + results[i]);
      //}      
      if(results[0]){
        var extension = results[0].split('.').pop()
        let options: FileUploadOptions = {
           fileKey: 'file',
           fileName: ('image.' + extension),
           headers: {
             'x-api-key': this.userDataStoreService.userInfo.api_key
           }
        }
        this.httpClient.appComponent.showLoading();
        this.fileTransfer.upload(results[0], this.httpClient.serverPath('users/cover_image'), options)
         .then((data) => {
           var response_json = JSON.parse(data.response);
           if(response_json.success){
             this.httpClient.appComponent.dismissLoading();
             this.loadCoverImage();
             alert('Cover image updated');
           }else
             alert('Error updating cover image');
         }, (err) => {
           this.httpClient.appComponent.dismissLoading();
           alert('Error updating cover image');
         })
      }
    }, (err) => { });
  }

  loadCoverImage() {
    if(this.user.api_key)
      this.userService.getCoverImage()
        .then(response_base64 => {
          this.cover_base64_data_uri = `data:image/*;base64,${response_base64}`;
          document.getElementById('profile-content').style.backgroundImage = `url("${this.cover_base64_data_uri}")`;
        }).catch(function() {

        });
    else
      this.userService.getCoverImageAny(this.user._id)
        .then(response_base64 => {
          if(response_base64){
            this.cover_base64_data_uri = `data:image/*;base64,${response_base64}`;
            document.getElementById('profile-content').style.backgroundImage = `url("${this.cover_base64_data_uri}")`;
          }
        }).catch(function() {

        });
  }

  name(): string {
    return this.userDataStoreService.userInfo.name;
  }

  profileEditDataStore(): boolean {
    return this.profileDatastoreService.dataStore.profileedit;
  }
  disableedit():boolean{
    return this.profileDatastoreService.dataStore.profileedit = false;
  }
}
