import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ratingpop',
  templateUrl: 'ratingpopover.html',
  styles:[`
    .star-button{
        color: #f7f7f9;
        padding-left:5pt;
        padding-left:5pt;
        
    }
    .gold-star{
        color: #FFDF00;
    }
    .rating{
        margin:2%;
        text-align:center;
        background-color:dark3;
        whitespace:nowrap;
    }
  `]
})
export class RatingPopPage {
  constructor(public navCtrl: NavController) {

  }

  rating: number = 0;

  starClicked(starPosition: number) {
    this.rating = starPosition;
  }

}
