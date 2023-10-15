import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireDetailOptions, QuestionnaireDetails } from '../interfaces';
import { fakeQuestionnaireDetails } from '../listingsdata';
import { QuestionnaireDetailsService } from '../questionnaire-details.service';
import { QuestionnaireDetOpsService } from '../questionnaire-det-ops.service';

@Component({
  selector: 'app-questionnaire-details',
  templateUrl: './questionnaire-details.component.html',
  styleUrls: ['./questionnaire-details.component.css']
})
export class QuestionnaireDetailsComponent implements OnInit {
questionnaireDetails:QuestionnaireDetails[] = [];
questionnaireDetOps:QuestionnaireDetailOptions[] = [];
id:string = '';
questionnaireDetId!:string ;
  constructor(private route: ActivatedRoute,private questionnareDetailsService:QuestionnaireDetailsService
    ,private questionnaireDetOpsService:QuestionnaireDetOpsService){

  }

  ngOnInit(): void {
     const id  =  this.route.snapshot.paramMap.get('id');
     this.id = id !== null ? id : '';
    this.questionnareDetailsService.getQuestionnaireDetailsByQuestionnaireId(this.id).subscribe(
      questionnaireDetails => {this.questionnaireDetails = questionnaireDetails;
     this.questionnaireDetId = questionnaireDetails[0].questionnaireDetId !== null ? questionnaireDetails[0].questionnaireDetId! : ''; 
     
      this.questionnaireDetOpsService.getQuestionnaireDetOpsByQuestionnaireDetId(this.questionnaireDetId).subscribe(value=>{
        this.questionnaireDetOps = value;
      });
      });
  }

 //{
//   questionnairedetid : "",
//   questionnaireid : "",
//   questionnairequestion : "", 
//   minimumrequirement:"",
//   additionaldetails:""
// }; 
}
