import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})
export class ForgetpasswordComponent implements OnInit {
  constructor(private service: AuthService) {}

  ngOnInit(): void {}
  submit(f: NgForm) {
    this.service.forgetPassword({
      email: f.value.email,
    });
  }
}
