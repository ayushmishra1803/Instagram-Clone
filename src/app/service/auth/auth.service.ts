import { Signup } from './../../interface/auth/signup/signup';
import { Login } from './../../interface/auth/login/login';
import { Forgetpassword } from './../../interface/auth/forgetpassword/forgetpassword';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(data: Login) {
    console.log('login');
  }
  signup(data: Signup) {
    console.log('signup');
  }
  forgetPassword(data: Forgetpassword) {
    console.log('ForgetPassword');
  }
}
