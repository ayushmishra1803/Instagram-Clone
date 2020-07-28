import { HomeComponent } from './main/componets/home/home.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //authmodule
  {path:"login",component:LoginComponent},
  {path:"signup" ,component:SignupComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  //main
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
