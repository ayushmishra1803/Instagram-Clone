import { profile } from './../../componets/profile/interface/profile';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {map}from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db:AngularFirestore) { }
  getProfileData(){
    this.db.collection('Users').snapshotChanges().pipe(map(re=>{
      return re.map(re=>{
        const data=re.payload.doc.data() as profile;
        const id=re.payload.doc.id;
        return {id,...data}
      })
    }))
  }
}
