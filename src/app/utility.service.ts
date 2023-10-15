import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HtmlElementTypes } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http:HttpClient) {

   }

   getAllHtmlElementTypes():Observable<HtmlElementTypes[]>{
    return this.http.get<HtmlElementTypes[]>('/api/Utilities');
   }
}
