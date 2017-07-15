import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController ,NavParams } from 'ionic-angular';
import { CrewService } from '../../app/services/crew.service';
import { CrewcreationPage } from '../crewcreation/crewcreation';
import { DomSanitizer} from '@angular/platform-browser';
CrewcreationPage
@IonicPage()
@Component({
  selector: 'page-mycrews',
  templateUrl: 'mycrews.html',
  styles: [`
  .default-msg{position:relative;top:25%;left:50%;transform:translate(-50%);
               font-size:2em;opacity:0.5;white space:nowrap;padding:1em;overflow:hidden;
              }
  .create{position:fixed;bottom:10%;right:5%;}     
`]
})
export class MycrewsPage {
  crewcreationPage: any=CrewcreationPage;
  crews: Array<any> = [];
  nav(page:any){
    this.navCtrl.push(CrewcreationPage,{});
  }  
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController,public alertCtrl: AlertController,public navParams: NavParams, private crewService: CrewService) {
    this.loadMyCrews();
  }

  loadMyCrews() {
    this.crewService.getMyCrews()
      .then(response_json => {
        if(response_json.success){
          this.crews = response_json.crews;
          for(let crew of this.crews){
            this.crewService.getCoverImage(crew._id)
              .then(response_base64 => {
                if(response_base64)
                  crew.cover_base64_data_uri = `data:image/*;base64,${response_base64}`;
              }).catch(function() {

              });
          }
        }
      });
  }

  trustUrl(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openCrew(crew: any) {
    this.navCtrl.push(CrewcreationPage, { crew: crew });
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Enter Crew Name',
      
      inputs: [
        {
          name: 'title',
          placeholder: 'CrewName'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log(prompt);
          }
        },
        {
          text: 'Save',
          handler: data => {            
            this.crewService.createCrew(data.title)
              .then(response_json => {
                if(response_json.success){
                  alert('Crew created');
                  this.loadMyCrews();
                  this.navCtrl.push(CrewcreationPage, { crew: response_json.crew });
                }else
                  alert('Error creating crew, try again later');  
              }).catch(function(){
                alert('Error creating crew, check your internet connection');
              });
          }
        }
      ]
    });
    prompt.present();
  }
 

  

}
