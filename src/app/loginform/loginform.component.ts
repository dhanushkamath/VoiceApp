import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  userData = {}

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.loginUser(this.userData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
