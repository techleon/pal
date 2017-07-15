import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
  styles: [`
  .default-msg{position:relative;top:25%;left:50%;transform:translate(-50%);
               font-size:2em;opacity:0.5;white space:nowrap;padding:1em;overflow:hidden;
              }
  
`]
})
export class WallPage {

  constructor(public navCtrl: NavController) {

  }

}
