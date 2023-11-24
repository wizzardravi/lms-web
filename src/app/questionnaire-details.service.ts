import { Injectable } from '@angular/core';
import { Questionnaire, QuestionnaireDetails } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireDetailsService {

  constructor(private http: HttpClient) { }

  saveQuestionnaireDetails(questionnaireDetails:QuestionnaireDetails): Observable<number>{
    return this.http.post<number>('https://www.listmanagementapi.com/api/QuestionnaireDetails',questionnaireDetails);
  }

  getQuestionnaireDetailsByQuestionnaireId(qId:string):Observable<QuestionnaireDetails[]>{
    return this.http.get<QuestionnaireDetails[]>('https://www.listmanagementapi.com/api/QuestionnaireDetails/${qId}');
  }
}
