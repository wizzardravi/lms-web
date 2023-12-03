import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from './interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  gUser : User = {};
  constructor(
    public afAuth: AngularFireAuth, private http:HttpClient    // Inject Firebase auth service,

  ) {}

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        // assign to user
        this.gUser.providerUserId = result?.user?.uid;
        this.gUser.displayName = result?.user?.displayName;
        this.gUser.email = result?.user?.email;
        this.gUser.photoURL = result?.user?.photoURL;
        this.gUser.uid = result?.user?.uid;
        if(result?.user?.phoneNumber){
          this.gUser.phoneNumber = result?.user?.phoneNumber;
        }
        else{
          this.gUser.phoneNumber = "";
        }
        this.gUser.providerId = result?.user?.providerId;
       
        return result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  AuthLogout(): void{
     this.afAuth.signOut();

    }

    registerUser(gFUser:User):Observable<number>{
      return new Observable<number>(observer => {
              this.http.post<number>('https://www.listmanagementapi.com/api/User', gFUser).subscribe(value =>{
                observer.next(value);
              });
          })
    }


  

    
}