import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing, Questionnaire, QuestionnaireDetails } from '../interfaces';
import { fakeQuestionnaire, fakeQuestionnaireDetails } from '../listingsdata';
import { QuestionnaireService } from '../questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  id:string = '';
  listing:Listing  =  { listingId: "1", listingName: "hello", listingStartDate : "", listingEndDate: "", isActive : true };
  questionnaires!:Questionnaire[];
questionnaire:Questionnaire = {};

constructor(private route:ActivatedRoute, private questionnaireService:QuestionnaireService){

}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.id = id !== null ? id : '';
this.questionnaireService.getQuestionnaire(this.id).subscribe(value=> {
  this.questionnaires = value;
  this.questionnaire = this.questionnaires[0];
})
  // let questionnaire = fakeQuestionnaire.find(questionnaire => questionnaire.listingId == id);
  // this.questionnaire.questionnaireId = questionnaire?.questionnaireId;
  // this.questionnaire.questionnaireName = questionnaire?.questionnaireName;
  // this.questionnaire.listingId = questionnaire?.listingId;
  // this.questionnaire.isQuestionnaireManadatory = questionnaire?.isQuestionnaireManadatory;
}

}
