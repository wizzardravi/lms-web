import { Component, OnInit } from '@angular/core';
import { QuestionnaireDetailsService } from '../questionnaire-details.service';
import { QuestionnaireService } from '../questionnaire.service';
import { HtmlElementTypes, Questionnaire, QuestionnaireDetailOptions, QuestionnaireDetails } from '../interfaces';
import { UtilityService } from '../utility.service';
import { QuestionnaireDetOpsService } from '../questionnaire-det-ops.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-questionnaire-details',
  templateUrl: './create-questionnaire-details.component.html',
  styleUrls: ['./create-questionnaire-details.component.css']
})
export class CreateQuestionnaireDetailsComponent implements OnInit{
  questionnaireDetIdGen:number = -1;
  questionnaires!:Questionnaire[];
  htmlElementTypes!:HtmlElementTypes[];
  questionnaireDetails:QuestionnaireDetails = {};
  questionnaireDetOps:QuestionnaireDetailOptions = {};
  questionnaireDetOpsArr:QuestionnaireDetailOptions[] = [];
  
  constructor(private questionnaireService:QuestionnaireService, private questionnaireDetailsService:QuestionnaireDetailsService,
    private utilityService:UtilityService, private questionnaireDetOpsService:QuestionnaireDetOpsService, private router:Router){

  }

  ngOnInit(): void {
    this.questionnaireService.getAllQuestionnaire().subscribe(questionnaires => this.questionnaires = questionnaires);
    this.utilityService.getAllHtmlElementTypes().subscribe(htmlElementTypes => this.htmlElementTypes = htmlElementTypes);
  }

  saveQuestionnaireDetails(questionnaireDetails:QuestionnaireDetails):void{
    this.questionnaireDetailsService.saveQuestionnaireDetails(questionnaireDetails).subscribe(id=>
      {
        this.questionnaireDetIdGen = id;
        if(questionnaireDetails.htmlElementId !== '1'){
          this.questionnaireDetOpsService.saveQuestionnaireDetOps(this.questionnaireDetOpsArr, this.questionnaireDetIdGen).subscribe(data=>{
this.router.navigateByUrl('listings');
          });
              }
      }
    );
  
    }

    AddQuestionnaireDetOpt(questionnaireDetOps:QuestionnaireDetailOptions):void{
      questionnaireDetOps.questionnaireDetId = this.questionnaireDetails.questionnaireDetId;
      this.questionnaireDetOpsArr.push(questionnaireDetOps) ;
    }
}
