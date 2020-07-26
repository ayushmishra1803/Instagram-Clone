import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private service: AuthService) {}

  ngOnInit(): void {}
  submit(f: NgForm) {
    this.service.signup({
      email: f.value.email,
      number: f.value.phone,
      Full_Name: f.value.fullname,
      username: f.value.username,
      password: f.value.password,
    });
  }
}
