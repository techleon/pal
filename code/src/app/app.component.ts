import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoadingController } from 'ionic-angular';
import { HttpClientService } from './services/http-client.service'
@Component({
  templateUrl: 'app.html'
})
export class Pal {
  rootPage:any = IntroPage;
  loading: any;
  constructor(private httpClient: HttpClientService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();   
      httpClient.appComponent = this;
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();

  }

  dismissLoading() {
    if(this.loading){
      this.loading.dismiss();
      this.loading = null;
    }
  }

}

