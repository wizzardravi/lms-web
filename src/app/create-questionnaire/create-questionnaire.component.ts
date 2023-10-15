import { Component, OnInit } from '@angular/core';
import { Listing, Questionnaire } from '../interfaces';
import { QuestionnaireService } from '../questionnaire.service';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.css']
})
export class CreateQuestionnaireComponent implements OnInit {
  questionnaire:Questionnaire = {};
  listings!:Listing[];
constructor(private questionnaireService:QuestionnaireService, private listingService:ListingService, private router:Router){

}

ngOnInit(): void {
  this.listingService.getListings().subscribe(listings => this.listings = listings);
}

saveQuestionnaire(questionnaire:Questionnaire):void{
this.questionnaireService.saveQuestionnaire(questionnaire).subscribe(
  value => {
    this.router.navigateByUrl('create-ques-details');
  }
);
}


}
