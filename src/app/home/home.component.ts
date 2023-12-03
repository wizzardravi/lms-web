import { Component } from '@angular/core';
import { KnowledgeBase } from '../interfaces';
import { KnowledgebaseServiceService } from '../knowledgebase-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  knowledgeBase :KnowledgeBase = {knowledgeBaseId : 0,  timeZoneId : 0, userId : -1, providerUserId : "test", endDate : "", startDate : "", isValid : true };

  constructor(private knowledgeBaseService : KnowledgebaseServiceService ){
  }

  registerForKnowledgeBase(knowledgeBase:KnowledgeBase){
    knowledgeBase.providerUserId = localStorage.getItem("kb_provider_id")!;
    this.knowledgeBaseService.saveKnowledgeBase(knowledgeBase).subscribe(value => {
      console.log('Knowledgebase saved -' + value )
      //this.router.navigateByUrl('');
  });
  }
}
