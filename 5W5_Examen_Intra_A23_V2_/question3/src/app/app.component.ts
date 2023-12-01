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
    trigger('flip', [transition(':increment', useAnimation(flip))]),
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
  shake1= false;
  bounce1= false;
  shake= false;
  bounce = false;
  flip =false;

  constructor() {
  }

  polling(){
    //Si on a pas arreter l'attente
    this.shakeNbounce();
    //Si le resultat n'est pas celui attendu
    if(true){
      //On recommence dans .5 seconde
      setTimeout(() => {this.polling()}, 3000);
    }
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

  shakeNbounce(){
    this.shake1 = true;
    setTimeout(()=>{
      this.shake1 = false;
      this.bounce1 = true;}
      , 1000);

      setTimeout(() => {
        this.bounce1 = false;}
        , 3000);
  }

  all(){
    this.shake = true;
    setTimeout(() => {
      this.shake = false;
      this.flip = true;
    }, 1000);

    setTimeout(() => {
      this.flip = false;
      this.bounce = true
    }, 3000);

    setTimeout(() => {
      this.bounce = false
    }, 5000);
  }

}
