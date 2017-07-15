import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { UserDataStoreService } from '../../app/services/user-data-store.service'; 
import { HttpClientService } from '../../app/services/http-client.service';
import { CrewService } from '../../app/services/crew.service';
import { CrewMembersPage } from '../crew-members/crew-members';

@IonicPage()
@Component({
  selector: 'page-crewcreation',
  templateUrl: 'crewcreation.html',
  styles:[`
  
  .profile-content{
   height:45%;
   background-image:url('assets/crewdefault.jpg');
   background-repeat: no-repeat;
   background-position: center center;
   background-attachment: fixed;
   background-size:cover;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
 .crewname{margin-left:10pt;position:fixed;top:30%;background-color:transparent;font-weight:350pt;color:white;text-shadow: 2pt 2pt #8c8c8c;}
 .profileediticon{color:white;float:right;margin:2% 2% 28% 2%;width:20pt;height:20pt;font-size:15pt;top:80%;}
 .content{background-color:#686877;}
 .fab-back-button{background: transparent;box-shadow: none;padding-left: 0px;padding-right: 0px;width: 40px;height: 40px;}
 .ion-fab-edge-left{top: 0px; left: 0px;}
 .ion-fab-edge-right{top: 0px; right: 0px;}
 .crew-name{ position: absolute; left: 10px; bottom: calc(55% + 10px); font-size: 150%; font-weight: 500; text-shadow: 1px 1px 3px #333; color: white }
 .back-icon{ }
`]
})
export class CrewcreationPage {

  crew: any;
  cover_base64_data_uri: string;
  scannerShow: boolean = false;
  fileTransfer: FileTransferObject;

  constructor(private crewService: CrewService, private httpClient: HttpClientService, private userDataStoreService: UserDataStoreService, private transfer: FileTransfer, private file: File, private imagePicker: ImagePicker, public navCtrl: NavController,public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.crew = this.navParams.data.crew;
    this.fileTransfer = this.transfer.create();
  }

  ionViewDidLoad() {
    this.loadCoverImage();
  }

  goBack() {
    this.navCtrl.pop();
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
             'x-api-key': this.userDataStoreService.userInfo.api_key,
             'crew_id': this.crew._id
           }
        }
        this.httpClient.appComponent.showLoading();
        this.fileTransfer.upload(results[0], this.httpClient.serverPath('crews/cover_image'), options)
         .then((data) => {

           this.httpClient.appComponent.dismissLoading();
           var response_json = JSON.parse(data.response);
           if(response_json.success){
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
    this.crewService.getCoverImage(this.crew._id)
      .then(response_base64 => {
        this.cover_base64_data_uri = `data:image/*;base64,${response_base64}`;
        document.getElementById('profile-content').style.backgroundImage = `url("${this.cover_base64_data_uri}")`;
      }).catch(function() {

      });
  }

  openCrewMembers() {
    this.navCtrl.push(CrewMembersPage, { crew: this.crew });
  }

  addMember() {
    this.barcodeScanner.scan({
      prompt: 'Place QR Code inside the view finder rectangle to scan it'
    }).then((barcodeData) => {
      //alert(barcodeData.text);
      this.crewService.addMember(this.crew._id, barcodeData.text)
        .then(response_json => {
          if(response_json.success){
            alert('Added member');
          }else{
            alert('Error adding member');  
          }
        }).catch(function(){
          alert('Error adding member');
        });
     // Success! Barcode data is here
    }, (err) => {
      alert(err);
        // An error occurred
    });
    /*
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted

           alert('authroized');
           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             alert('Scanned something' + text);
             this.scannerShow = false;
             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
           });
           this.scannerShow = true;
           // show camera preview
           this.qrScanner.show();

           // wait for user to scan something, then the observable callback will be called

         } else if (status.denied) {
           alert('status denied');
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           alert('status denied 2');
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) => alert('Error is' + e));
    */
  }
   
}
