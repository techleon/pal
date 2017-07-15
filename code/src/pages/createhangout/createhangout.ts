import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventypePage } from '../eventype/eventype';
import { PopoverController } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { HangoutService } from '../../app/services/hangout.service';
@IonicPage()
@Component({
  selector: 'page-createhangout',
  templateUrl: 'createhangout.html',
  styles:[`
 .done{width:50%;float:left;margin-right:0;display:inline-block;}
 .cancel{width:48%;float:right;margin-left:0;display:inline-block;}
 .valids{left:0%;width:100%;}
 .locationmap{margin-right:13.33px;}
 .hangout-content{background-color:#686877;background-image:url('assets/createhangout.jpg');background-size:cover;}
 .inputs{background-color:transparent;}
 .hangoutpals{margin-left:12pt;color:blue;}  
 .hangoutpalist{background-color:transparent;}
 .label{color:blue;}
`]
})
export class CreatehangoutPage {

  fromDate: any;
  fromtime: any;
  name: any;
  myInput: any;
  crew_members: any = [];
  searchCrewMembers: any = [];
  selectedCrewMembers: any = [];
  eventypePopover(popevent) {
  let popover = this.popoverCtrl.create(EventypePage);
  popover.present({
    ev: popevent
  });
  }
  constructor(private hangoutService: HangoutService, public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, private googleMaps: GoogleMaps) {
      this.hangoutService.getHangoutMembers()
        .then(response_json => {
          this.crew_members = response_json.crew_members;
          this.searchCrewMembers = response_json.crew_members;
        });
  }
  ngAfterViewInit() {
   this.loadMap();
  }

  onInput(event: any) {
    console.log(event);
    console.log(this.myInput);
    if(!this.myInput)
      this.searchCrewMembers = this.crew_members;
    else{
      this.searchCrewMembers = [];
      var len = this.crew_members.length;
      for(var i=0;i<len;i++){
        var crew_member = this.crew_members[i];
        if(crew_member.user_info[0] && crew_member.user_info[0].name.indexOf(this.myInput) > -1)
          this.searchCrewMembers.push(crew_member);
      }
    }
  }

  onCancel(event: any) {
    console.log(event);
    console.log(this.myInput);
    this.searchCrewMembers = this.crew_members;
  }

  loadMap() {
   // make sure to create following structure in your view.html file
   // and add a height (for example 100%) to it, else the map won't be visible
   // <ion-content>
   //  <div #map id="map" style="height:100%;"></div>
   // </ion-content>

   // create a new map by passing HTMLElement
   let element: HTMLElement = document.getElementById('map');

   let map: GoogleMap = this.googleMaps.create(element);

   // listen to MAP_READY event
   // You must wait for this event to fire before adding something to the map or modifying it in anyway
   map.one(GoogleMapsEvent.MAP_READY).then(
     () => {
       console.log('Map is ready!');
       // Now you can add elements to the map like the marker
     }
   );

   // create LatLng object
   let ionic: LatLng = new LatLng(43.0741904,-89.3809802);

   // create CameraPosition
   let position: CameraPosition = {
     target: ionic,
     zoom: 18,
     tilt: 30
   };

   // move the map's camera to position
   map.moveCamera(position);

   // create new marker
   let markerOptions: MarkerOptions = {
     position: ionic,
     title: 'Ionic'
   };

   /*const marker: any = map.addMarker(markerOptions)
     .then((marker: Marker) => {
        marker.showInfoWindow();
      });*/

  }

  

}
