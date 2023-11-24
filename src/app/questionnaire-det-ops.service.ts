import { Injectable } from '@angular/core';
import { QuestionnaireDetailOptions } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireDetOpsService {
  questionnaireDetailOptions : QuestionnaireDetailOptions = {};
  constructor(private http:HttpClient) { }

  saveQuestionnaireDetOps(questionnaireDetOps:QuestionnaireDetailOptions[], id:number): Observable<number>{
    
    for (let index = 0; index < questionnaireDetOps.length; index++) {
      this.questionnaireDetailOptions  = questionnaireDetOps[index];
      
      this.questionnaireDetailOptions.questionnaireDetId = '' + id;
    }
   return  this.http.post<number>('https://www.listmanagementapi.com/api/QuestionnaireDetailOps',this.questionnaireDetailOptions);
    }

    saveQuestionnaireDetOp(questionnaireDetOp:QuestionnaireDetailOptions): Observable<number>{
      return this.http.post<number>('https://www.listmanagementapi.com/api/QuestionnaireDetailOps',questionnaireDetOp);
    }

    getQuestionnaireDetOpsByQuestionnaireDetId(questionnaireDetId:string):Observable<QuestionnaireDetailOptions[]>{
      return this.http.get<QuestionnaireDetailOptions[]>('https://www.listmanagementapi.com/api/QuestionnaireDetailOps/${questionnaireDetId}');
    }
    
}
