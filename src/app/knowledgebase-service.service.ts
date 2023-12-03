import { Injectable } from '@angular/core';
import { KnowledgeBase, User } from './interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

@Injectable({
  providedIn: 'root'
})
export class KnowledgebaseServiceService {
  id!:string;
  
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }



  saveKnowledgeBase(knowledgeBase:KnowledgeBase): Observable<number>
  {
    return new Observable<number>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token=>{
          if(user && token){
            this.id = user.uid;
            knowledgeBase.providerUserId = this.id;
            knowledgeBase.isValid = false;
            this.http.post<number>('https://www.listmanagementapi.com/api/knowledgeBase', knowledgeBase).subscribe(value =>{
              observer.next(value);
            });
        }
        else{
          observer.next(-1);
        }
      })
    })
    
  })
}

getKnowledgeBaseForUser(): Observable<KnowledgeBase[]>{
  return new Observable<KnowledgeBase[]>(observer => {
    this.auth.user.subscribe(user => {
      user && user.getIdToken().then(token=>{
        if(user && token){
          this.id = user.uid;
          this.http.get<KnowledgeBase[]>('https://www.listmanagementapi.com/api/KnowledgeBase/'+this.id).subscribe(kb =>{
            observer.next(kb);
          })
     
      }
      else{
        observer.next([]);
      }
    })
  })
  
})
}
}
