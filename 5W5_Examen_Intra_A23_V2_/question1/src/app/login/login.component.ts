import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CAT_LOVERS, CatLover } from '../catlover';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  catLovers = CAT_LOVERS;
  selectedUser?: CatLover;

  constructor(public user:UserService, public route: Router) { }

  ngOnInit() {
    
  }

  login()  {
    console.log(this.selectedUser);

    this.user.currentUser = this.selectedUser;

    this.route.navigate(['/home'])
  }
  

}
