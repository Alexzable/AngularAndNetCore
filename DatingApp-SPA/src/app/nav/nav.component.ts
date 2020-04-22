import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(
    public authservice: AuthService,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authservice.login(this.model)
    .subscribe( next => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }
  logedIn() {
    return this.authservice.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('loggoed out');
  }

}
