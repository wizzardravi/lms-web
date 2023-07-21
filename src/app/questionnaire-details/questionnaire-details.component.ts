import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireDetails } from '../interfaces';
import { fakeQuestionnaireDetails } from '../listingsdata';

@Component({
  selector: 'app-questionnaire-details',
  templateUrl: './questionnaire-details.component.html',
  styleUrls: ['./questionnaire-details.component.css']
})
export class QuestionnaireDetailsComponent implements OnInit {
questionnaireDetails:QuestionnaireDetails[] = [];
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    const id  =  this.route.snapshot.paramMap.get('id');
    this.questionnaireDetails = fakeQuestionnaireDetails;
  }

 //{
//   questionnairedetid : "",
//   questionnaireid : "",
//   questionnairequestion : "", 
//   minimumrequirement:"",
//   additionaldetails:""
// }; 
}
