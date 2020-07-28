import { ProfileService } from './../../service/profile/profile.service';
import { profile } from './interface/profile';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profile:ProfileService) { }
  profile_data:profile[]=[];
  profileob:Observable<profile[]>;

  ngOnInit(): void {
    this.profile.getProfileData();
    this.profileob=this.profile.getProfileData();
    console.log(this.profileob);
    this.profileob.subscribe(re=>{
      this.profile_data=re
      console.log(this.profile_data);

    })

  }

}
