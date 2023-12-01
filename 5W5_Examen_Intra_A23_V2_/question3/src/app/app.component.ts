import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, flip, shake} from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('bounce', [transition(':increment', useAnimation(bounce))]),
    trigger('shake', [transition(':increment', useAnimation(shake))]),
    trigger('flip', [transition(':increment', useAnimation(flip))])
  ]
})
export class AppComponent {

  // Les classes CSS sont .shake, .bounce et .flip

  ng_shake = 0;
  ng_bounce = 0;
  ng_flip = 0;
  css_shake= false;
  css_bounce = false;
  css_flip = false;

  constructor() {
  }

  shakeMe() {
    this.css_shake = true;
    setTimeout(() => {this.css_shake = false;},1000);
  }

  bounceMe() {
    this.css_bounce = true;
    setTimeout(() => {this.css_bounce = false;},1000);
  }

  flipMe() {
    this.css_flip = true;
    setTimeout(() => {this.css_flip = false;},1000);
  }

}
