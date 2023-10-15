import { Injectable } from '@angular/core';
import { Listing, Questionnaire, QuestionnaireDetails } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {
  listings: Listing[] = [];
  constructor(private http: HttpClient) { }

  getAllQuestionnaire(): Observable<QuestionnaireDetails[]>{
    return this.http.get<QuestionnaireDetails[]>('api/Questionnaire');
  }

  getQuestionnaire(listId:string): Observable<QuestionnaireDetails[]>{
    return this.http.get<QuestionnaireDetails[]>(`api/Questionnaire/${listId}`);
  }

  saveQuestionnaire(questionnaire:Questionnaire): Observable<number>{
    return this.http.post<number>('api/Questionnaire',questionnaire);
  }
}
