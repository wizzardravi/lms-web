import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing, Questionnaire, QuestionnaireDetails } from '../interfaces';
import { fakeQuestionnaire, fakeQuestionnaireDetails } from '../listingsdata';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  listing:Listing  =  { listingId: "1", listingName: "hello", listingStartDate : "", listingEndDate: "", isActive : true };;
questionnaire:Questionnaire = {
  questionnaireid : "",
  questionnairename : "", 
  listingid:"",
  isQuestionnaireManadatory:true
}

constructor(private route:ActivatedRoute){

}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  let questionnaire = fakeQuestionnaire.find(questionnaire => questionnaire.listingid == id);
  this.questionnaire.questionnaireid = questionnaire?.questionnaireid;
  this.questionnaire.questionnairename = questionnaire?.questionnairename;
  this.questionnaire.listingid = questionnaire?.listingid;
  this.questionnaire.isQuestionnaireManadatory = questionnaire?.isQuestionnaireManadatory;
}
}
