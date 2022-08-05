import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false; //switch to true for login

  constructor() {
  }

  log() {
    this.isLoggedIn = true;
  }

  out() {
    this.isLoggedIn = false;
  }
}
