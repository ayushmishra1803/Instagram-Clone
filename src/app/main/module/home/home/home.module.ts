import { ToolbarComponent } from './../../../toolbar/toolbar.component';
import { AppRoutingModule } from './../../../../app-routing.module';
import { AppModule } from './../../../../app.module';
import { MaterialModule } from './../../../../module/material/material/material.module';
import { HomeComponent } from './../../../componets/home/home.component';
import { ProfileComponent } from './../../../componets/profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    HomeComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
})
export class HomeModule {}
