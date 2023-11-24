import { Component, EventEmitter  } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { openAIModel } from '../interfaces';
import { SpeechRecognitionService } from '../speech-recognition.service';

@Component({
  selector: 'app-open-ai-component',
  templateUrl: './open-ai-component.component.html',
  styleUrls: ['./open-ai-component.component.css']
})
export class OpenAiComponentComponent {
  txtInputText! : string;
  openAIModel! : openAIModel;
  
constructor(private openaiservice:OpenAiService, private speechRecognitionService: SpeechRecognitionService){
}




ngOnInit(): void {
  // this.listingService.getListings().subscribe(
  //   listings => console.log('listings  ' + listings),
  //   err => console.error('Observer got an error: ' + err),
  //   () => console.log('Observer got a complete notification')
  //   );
 
  
  }

  startRecognition() {
    this.speechRecognitionService.startRecognition();
    this.speechRecognitionService.speechResult.subscribe((result) => {
      console.log('Speech Recognized:', result);
      this.txtInputText = result;
      // Do something with the recognized speech here
    });
  }

  stopRecognition() {
    this.speechRecognitionService.stopRecognition();
  }

  getdata(): void{
    this.openaiservice.getOpenAIData(this.txtInputText).subscribe(
      data => {
        console.log(data);
        
        this.openAIModel = data;
  //this.listings = listings;
  //console.log('listings Data ' + this.listings);
  
  //this.listings = fakeListings;
  //console.log('Fake Listings Data ' + this.listings);
      });

  }



}
