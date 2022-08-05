import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


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

  onLogin(username: string = 'user') {
    // this.authService.login(username).subscribe(data => {
    //   console.log(data);
    // });
  }

  logout() {
    // this.authService.logoutUser();

  }

}
