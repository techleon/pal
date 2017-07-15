import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserService } from '../../app/services/user.service';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styles: [`
  .logo{position:relative;top:30%;left:50%;transform:translateX(-50%);width:6em;height:6em;}         
  .signup{background-image:url('assets/introslide.jpeg');background-repeat:no repeat;overflow:hidden;background-size:cover;}
  .items-form{background-color:transparent;}
  .items{margin-left:30pt;margin-right:30pt;margin-top:50pt;}
  .label {color:#32db64;}       
  .or{color:white;}       
  .input {color:white;}       
  .error{background-color:#FF9999;
  border-left: 2px solid red;
          border-radius:10px;
          padding:1%;
          opacity:0.9;}
  .social{text-align:center;}
  .google{background-color:#4885ed;padding-left:0px !important;padding-right:0.2rem;border: 1px solid #4885ed;height: 44px !important;}        
  .facebook{background-color:#3b5998;}
  .google-icon{position: relative;left: -2px;}
  .getstarted{float:right;width:45%;margin-top:-100pt;padding:0;padding-left:20pt;}
`]        
})
export class SignUpPage {

  newUser: any = {};
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,private userService: UserService){}
  
  goToHome() {
    this.navCtrl.push(HomePage,{});
  }

  submitEvent(formValid: boolean) {
    if(formValid){
      this.userService.signUp(this.newUser)
        .then(response_json => {
          if(response_json.success)
            this.goToHome();
        })
        .catch(function(){
          
        });
    }else{
      alert('Please fill in all fields');
    }
  }
  withoutsignup(){    
    this.goToHome(); 
  } 
    nameerrorToast() {
    let toast = this.toastCtrl.create({
      message: 'Name cannot be left empty!',
      duration: 3000
    });
    toast.present();
  }



}
