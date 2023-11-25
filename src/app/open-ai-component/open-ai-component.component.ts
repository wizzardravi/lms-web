import { Component, EventEmitter  } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { ManageKey, openAIModel, KnowledgeBaseRelay } from '../interfaces';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { KnowledgebaseServiceService } from '../knowledgebase-service.service';

@Component({
  selector: 'app-open-ai-component',
  templateUrl: './open-ai-component.component.html',
  styleUrls: ['./open-ai-component.component.css']
})
export class OpenAiComponentComponent {
  txtInputText! : string;
  openAIModel! : openAIModel;
  manageKey! : ManageKey;
  isRecording! : boolean;
  btnRecordStopText! : string;
  knowledgeBaseRelay : KnowledgeBaseRelay = {};
  knowledgeBaseRelays : KnowledgeBaseRelay[] = [];
  
constructor(private openaiservice:OpenAiService, private speechRecognitionService: SpeechRecognitionService, private knowledgeBaseService : KnowledgebaseServiceService){
}




ngOnInit(): void {
  this.isRecording = false;
  this.btnRecordStopText = "Start Recording"
  this.openaiservice.getApiKey('OPEN-API-KEY').subscribe(manageKey=>{
this.manageKey = manageKey;
  });

  this.knowledgeBaseService.getKnowledgeBaseForUser().subscribe(
    kbUserData => {
      if(kbUserData[0].isValid){
localStorage.setItem('kbUserValid', "true")
      }
      else{
        localStorage.setItem('kbUserValid', "false")
      }
    });
  }

  startRecording() {
    this.btnRecordStopText = "Stop Recording"
    this.speechRecognitionService.startRecognition();
    this.speechRecognitionService.speechResult.subscribe((result) => {
      this.txtInputText = result;
      this.knowledgeBaseRelay = {};
      this.knowledgeBaseRelay.Q =  this.txtInputText;
      this.knowledgeBaseRelay.A =  '....';
      this.getdata();
    });
  }

  stopRecording() {
    this.btnRecordStopText = "Start Recording";
    this.speechRecognitionService.stopRecognition();
  }

startStopRecording(){
  this.isRecording = !this.isRecording;

  if(this.isRecording){
   this.startRecording();
  }
  else{
   this.stopRecording();
  }
}

  getdata(): void{
    this.stopRecording();
if(localStorage.getItem('kbUserValid') == "true"){
        this.openaiservice.getOpenAIData(this.txtInputText).subscribe(
          data => {
            this.openAIModel = data;
           
      
      this.knowledgeBaseRelay.A =  this.openAIModel.choices[0].message.content;
       
          });
          this.knowledgeBaseRelays.push(this.knowledgeBaseRelay);  
        }
        else{
          alert('Please log out and register or contact administrator');
        }
         
        }
  }

