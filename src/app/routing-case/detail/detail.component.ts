import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth2.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(private authServise: AuthService) {
  }

  onLogin(): void {
    this.authServise.login();
  }

  logout(): void {
    this.authServise.logout();
  }

  isLogged(): boolean {
    return this.authServise.isAuthentcated();
  }
}
