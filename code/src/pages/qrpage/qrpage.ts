import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataStoreService } from '../../app/services/user-data-store.service'; 
import { HttpClientService } from '../../app/services/http-client.service';
import { UserService } from '../../app/services/user.service';


@IonicPage()
@Component({
  selector: 'page-qrpage',
  templateUrl: 'qrpage.html',
})
export class QrpagePage {

  qr_base64_data_uri: string;

  constructor(
      public navCtrl:               NavController, 
      public navParams:             NavParams, 
      private userDataStoreService: UserDataStoreService, 
      private httpClient:           HttpClientService,
      private userService:          UserService
    ) {
    this.userService.getQRImage()
      .then(response_base64 => {
        this.buildDataURI(response_base64);
      }).catch(function() {

      });
  }

  ionViewDidLoad() {
  }

  buildDataURI(base64_data) {
    this.qr_base64_data_uri = `data:image/svg+xml;base64,${base64_data}`;
  }

}
