import { Injectable } from '@angular/core';
import { Listing } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  listings: Listing[] = [];
  constructor(private http: HttpClient) { }

  getListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>('api/Listing');
  }
}
