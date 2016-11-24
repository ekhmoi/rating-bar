import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rating: any = 0;
  public color: string = 'secondary';
  public numberOfStars: number = 5;
  public small: boolean = false;
  constructor(public navCtrl: NavController) {

  }

  removeStar() {
    this.numberOfStars -= 1;
  }
  addStar() {
    this.numberOfStars += 1;
  }

}
