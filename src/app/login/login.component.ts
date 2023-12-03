import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { KnowledgeBase, User } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { KnowledgebaseServiceService } from '../knowledgebase-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}


const httpOptionsWithAuthToken = token => ({headers: new HttpHeaders({
  'Content-Type':'application/json',
  'AuthToken':token,
})
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  knowledgeBase :KnowledgeBase = {knowledgeBaseId : 0,  timeZoneId : 0, userId : -1, providerUserId : "test", endDate : "", startDate : "", isValid : true };
constructor(public authService: AuthService, private router:Router, private auth: AngularFireAuth, private http: HttpClient, private knowledgeBaseService : KnowledgebaseServiceService ){
    }
    gUser : User = {};
    id!:string;
    user = this.authService.afAuth.user;
ngOnInit(): void {
}

validateLogin():void{
  this.authService.GoogleAuth().then(result =>
    {
      
      this.gUser.providerUserId = result?.uid;
        this.gUser.displayName = result?.displayName;
        localStorage.setItem("kb_display_name", result?.displayName!);
        this.gUser.email = result?.email;
        this.gUser.photoURL = result?.photoURL;
        localStorage.setItem("kb_photo_url", result?.photoURL!);
        this.gUser.uid = result?.uid;
        localStorage.setItem("kb_provider_id", result?.uid!);
        if(result?.phoneNumber){
        this.gUser.phoneNumber = result?.phoneNumber;
        }
        else{
          this.gUser.phoneNumber = '';
        }
        this.gUser.providerId = result?.providerId;
      this.saveUser(this.gUser);
     // this.router.navigateByUrl('home');
    } );

}


registerLogin():void{
  this.authService.GoogleAuth().then(userData =>
    {
      console.log(userData);
      
    } );

}

saveUser(user:User): void{
  this.authService.registerUser(user).subscribe(value => {
    this.router.navigateByUrl('home');
});

}



}
