import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { KnowledgeBase } from '../interfaces';
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
    id!:string;
    user = this.authService.afAuth.user;
ngOnInit(): void {
}

validateLogin():void{
  this.authService.GoogleAuth().then(userData =>
    {
      console.log(userData);
      this.router.navigateByUrl('home');
    } );

}


registerLogin():void{
  this.authService.GoogleAuth().then(userData =>
    {
      console.log(userData);
      
    } );

}

registerForKnowledgeBase(knowledgeBase:KnowledgeBase){
  this.knowledgeBaseService.saveKnowledgeBase(knowledgeBase).subscribe(value => {
    console.log('Knowledgebase saved -' + value )
    //this.router.navigateByUrl('');
});
}

}
