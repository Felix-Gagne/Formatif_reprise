import { Injectable } from '@angular/core';
import { CatLover } from './catlover';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser?: CatLover;

  constructor() { }
}
