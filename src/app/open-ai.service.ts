import { Injectable } from '@angular/core';
import { ManageKey, openAIModel } from './interfaces';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  id!:string;
  
  private apiUrl = 'https://api.openai.com/v1'; // Replace with the actual OpenAI API URL
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  //   getOpenAIData(prompt: string):Observable<openAIModel> {
  //   const apiKey = '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';
  //   const headers = { 'Authorization': `Bearer ${apiKey}` };
  

    
  //   return this.http.post<openAIModel>(`${this.apiUrl}/chat/completions`, {
  //     "model": "gpt-3.5-turbo",
  //     "messages": [
  //         {
  //             "role": "user",
  //             "content": prompt
  //         }
  //     ],
  //     "temperature": 0.7
  // }, { headers });
  // }


getApiKey(key:string):Observable<ManageKey>{
  return new Observable<ManageKey>(observer => {
          this.http.get<ManageKey>(`https://www.listmanagementapi.com/api/KnowledgeBase/keys/${key}`).subscribe(managekey =>{
            observer.next(managekey);
            localStorage.setItem('openkey', managekey.manageKeyValue);
          }) 
      });
    };

  getOpenAIData(prompt:String): Observable<openAIModel>{
    const key  = localStorage.getItem('openkey');
    const headers = { 'Authorization': `Bearer ${key}` };
  
    return new Observable<openAIModel>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token=>{
          if(user && token){
            this.id = user.uid;
            this.http.post<openAIModel>(`${this.apiUrl}/chat/completions`, {
              "model": "gpt-3.5-turbo",
              "messages": [
                  {
                      "role": "user",
                      "content": prompt
                  }
              ],
              "temperature": 0.7
          }, { headers }).subscribe(listing =>{
              observer.next(listing);
            })
       
        }
        else{
          observer.next();
        }
      })
    })
    
  })
}

}
