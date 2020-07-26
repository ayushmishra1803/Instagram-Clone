import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService) {}

  ngOnInit(): void {}
  submit(f: NgForm) {
    this.service.login({
      username:f.value.username,
      password:f.value.passwortd
    })
  }
}
