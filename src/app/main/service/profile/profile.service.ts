import { AuthService } from 'src/app/service/auth/auth.service';
import { profile } from './../../componets/profile/interface/profile';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private db: AngularFirestore, private auth: AuthService) {}
  user = this.auth.getlogedinuser();
  getProfileData() {
    return this.db
      .collection('Users', (ref) =>
        ref.where('email', '==', 'ayushmishra0810@gmail.com')
      )
      .snapshotChanges()
      .pipe(
        map((re) => {
          return re.map((re) => {
            const data = re.payload.doc.data() as profile;
            const id = re.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
}
