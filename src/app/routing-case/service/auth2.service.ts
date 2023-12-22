import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login() {
    this.open.next(true);
    localStorage.setItem('logged', 'true');
  }

  logout() {
    this.open.next(false);
    localStorage.setItem('logged', 'false');
  }

  isAuthentcated(): boolean {
    return localStorage.getItem('logged') === 'true';
  }
}
