import { Injectable } from '@angular/core';
import { Listing } from './interfaces';
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
export class ListingService {
  listings: Listing[] = [];
  id!:string;
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  getListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>('https://www.listmanagementapi.com/api/Listing');
  }
    getListingsForUser(): Observable<Listing[]>{
    return new Observable<Listing[]>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token=>{
          if(user && token){
            this.id = user.uid;
            this.http.get<Listing[]>('https://www.listmanagementapi.com/api/listing/'+this.id).subscribe(listing =>{
              observer.next(listing);
            })
       
        }
        else{
          observer.next([]);
        }
      })
    })
    
  })
}

  saveListings(listing:Listing): Observable<number>
  {
    return new Observable<number>(observer => {
      this.auth.user.subscribe(user => {
        user && user.getIdToken().then(token=>{
          if(user && token){
            this.id = user.uid;
            listing.userId = this.id;
            this.http.post<number>('https://www.listmanagementapi.com/api/Listing', listing).subscribe(value =>{
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
}
