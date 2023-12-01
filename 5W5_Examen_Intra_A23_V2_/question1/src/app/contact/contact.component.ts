import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form = this.fb.group({
    // livraison == 1 -> Récupérer dans la ruelle
    // livraison == 2 -> Livrer à la maison
    livraison:[2]
  })

  constructor(public fb: FormBuilder) {}

}
