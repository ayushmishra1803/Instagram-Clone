import { Signup } from './../../interface/auth/signup/signup';
import { Login } from './../../interface/auth/login/login';
import { Forgetpassword } from './../../interface/auth/forgetpassword/forgetpassword';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logedinUser:string
  constructor(private db: AngularFirestore, private auth: AngularFireAuth,private router:Router) {}

  login(data: Login) {
    console.log('login');
    this.auth
      .signInWithEmailAndPassword(data.username, data.password)
      .then((re) => {
        console.log(re + 'Success');
        this.authstatus();
        this.router.navigate(['/home'])
      })
      .catch((re) => {
        console.log(re + 'Failed');
        this.router.navigate(['/login'])
      });
  }
  signup(data: Signup) {
    this.auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((re) => {
        console.log(re + 'Success');
          this.db.collection('Users').add(data);
          console.log('signup');
        this.router.navigate(['/login'])
      })
      .catch((re) => {
        console.log(re + 'Failed');
        this.router.navigate(['/login'])
      });

  }
  forgetPassword(data:string) {
    console.log('ForgetPassword');
    this.auth.sendPasswordResetEmail(data);
  }
  authstatus(){
    this.auth.authState.subscribe(re=>{
      console.log(re.email);
      this.logedinUser=re.email

    })
  }
  getlogedinuser(){
    return this.logedinUser
  }
}
