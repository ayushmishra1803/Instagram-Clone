import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //authmodule
  {path:"login",component:LoginComponent},
  {path:"sigup" ,component:SignupComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
