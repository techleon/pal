import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage }from '../signup/signup'
import { LoginPage }from '../login/login'
@IonicPage()
@Component({
  selector   : 'page-intro',
  templateUrl: 'intro.html',
  styles     :[`     
.content{background: transparent;
         overflow:hidden;z-index: 100;position:fixed;top:0px;left: 0px;width: 100%;}

.logo{width:11em;height:11em;position:absolute;
      top:10%;left:50%;
      transform:translateX(-50%);z-index: 100;}

.logotext {margin:0px;position:absolute;
           top:30%;left:50%;transform:translateX(-48%);
           color:#32db64;font-size:15pt;white-space: nowrap ;z-index: 100;}  

.signup{position:absolute;top:65%;left:50%;
        transform:translateX(-50%);width:75%;margin:0;z-index: 100;
        }

.login {width:75%;margin:0pt;position:absolute;top:80%;left:50%;
        transform:translateX(-50%);z-index: 100;
        }

.logintext{font-size:12pt;width:12em;color:#ff9400;position:absolute;top:75%;left:50%;
           transform:translateX(-48%);white-space: nowrap ;z-index: 100;}
.conditions{color:#ff9400;position:absolute;top:90%;left:50%;display:inline;
            transform:translateX(-48%);white-space: nowrap ;z-index: 100;}
           }
.introslides{z-index:-10;border:2px solid white;position:fixed;top:0px;left: 0px;width: 100%;}          
.thirdtext{color:white important;z-index: 100;}
.intro-buttons{position: fixed; bottom: 5pt; left: 10%; width: 80%;z-index: 100;background: transparent; }
.intro-logo{position: fixed; top: 15%; left: 30%; width: 40%;z-index: 100;background: transparent; }
`]
})
export class IntroPage {
  signuppage:any=SignUpPage;
  loginpage :any=LoginPage;
   
constructor(public navCtrl: NavController, public navParams: NavParams) {
}
pagenavigator(page:any){
  console.log("enteres");
   this.navCtrl.push(page,{});
}
  
}
