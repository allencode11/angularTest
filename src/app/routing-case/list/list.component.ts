import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth2.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  invalidCredentialMsg: string= '';
  username: string = '';

  constructor(private authServise: AuthService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authServise.login();
    console.log(this.authServise.open.value);
  }

  logout() {
    this.authServise.logout();
    console.log(this.authServise.open.value);

  }

}
