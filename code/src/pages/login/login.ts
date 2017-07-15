import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles:[`
  .content{background-image:url('assets/introslide.jpeg');background-size:cover;} 
  .loginform{margin-top:20%;} 
  .logo{position:relative;top:30%;left:50%;transform:translateX(-50%);width:6em;height:6em;}         
  .item1{position:static;top:35%;background-color:transparent;left:50%;padding:2em;}
  .item2{position:static;top:50%;background-color:transparent;left:50%;padding:2em;}
  .signin{top:15pt;right:5pt;width:35%;position:absolute;z-index:9999;}
  .label{color:#32db64;}
  .forgotpass{color:#ff9400;white-space:nowrap;left:50%;transform:translate(-50%);}
  .input { color: white; }
`]
})
export class LoginPage {

  loginUserInfo: any = {

  };

  constructor(public navCtrl: NavController,private toastCtrl: ToastController ,public navParams: NavParams, private userService: UserService) {
  }

  goToHome(){    
   this.navCtrl.push(HomePage,{});
  } 
  login(formValid: boolean) {
    if(formValid){
      this.userService.login(this.loginUserInfo)
        .then(response_json => {
          if(response_json.success)
            this.goToHome();
          else{
            alert('Invalid email or password');
          }
        })
    }
  }

}
