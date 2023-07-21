import { Injectable } from '@angular/core';
import { Listing, QuestionnaireDetails } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  listings: Listing[] = [];
  constructor(private http: HttpClient) { }

  getListings(): Observable<QuestionnaireDetails[]>{
    return this.http.get<QuestionnaireDetails[]>('api/Listing');
  }
}
