import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth2.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
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
