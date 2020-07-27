import { Signup } from './../../interface/auth/signup/signup';
import { Login } from './../../interface/auth/login/login';
import { Forgetpassword } from './../../interface/auth/forgetpassword/forgetpassword';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private db:AngularFirestore) {}

  login(data: Login) {
    console.log('login');
  }
  signup(data: Signup) {
    this.db.collection("Users").add(data);
    console.log('signup');
  }
  forgetPassword(data: Forgetpassword) {
    console.log('ForgetPassword');
  }
}
