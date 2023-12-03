import { Component, EventEmitter , HostListener  } from '@angular/core';
import { OpenAiService } from '../open-ai.service';
import { ManageKey, openAIModel, KnowledgeBaseRelay, ICompletion } from '../interfaces';
import { SpeechRecognitionService } from '../speech-recognition.service';
import { KnowledgebaseServiceService } from '../knowledgebase-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  knowledgeBaseRelays !: Array<KnowledgeBaseRelay>;

  api_key! : string ;
  appendoutput : string = "";
  appendoutput1 : string = "";
  appendoutput2 : string = "";
  tag : string = "";
  prompt : string = "";
  private controller: AbortController = new AbortController();
  private apiUrl = 'https://api.openai.com/v1';

  fasterResponse!:string;


   istrue : boolean = true;
   value! : any;
   done! : any;
  
constructor(private openaiservice:OpenAiService, private speechRecognitionService: SpeechRecognitionService, private knowledgeBaseService : KnowledgebaseServiceService, private router:Router, private http: HttpClient){
this.knowledgeBaseRelays = [];
}


// @HostListener('window:keyup.w', ['$event']) w(e: KeyboardEvent) {
//   console.log('w captured', e);
// }

// @HostListener('window:keyup.Shift.w', ['$event']) sw(e: KeyboardEvent) {
//   console.log('shift w captured', e);
// }

// @HostListener('window:keyup', ['$event']) keyUp(e: KeyboardEvent) {
//   console.log('key up', e);
//   if(e.key == 'control' || e.key == 'shift' || e.key == ' '){
//     this.startStopRecording();
//   }
// }

ngOnInit(): void {
  this.isRecording = false;
  this.btnRecordStopText = "Start Recording"
  this.openaiservice.getApiKey('OPEN-API-KEY').subscribe(manageKey=>{
this.manageKey = manageKey;

  });


  this.knowledgeBaseService.getKnowledgeBaseForUser().subscribe(
    kbUserData => {
      var x = -1;
      var y = -1;
      if(kbUserData.length > 0 && kbUserData[0].isValid){

      //   if(kbUserData[0].timeZoneId == 1 && kbUserData[0].startDate){
      //   x =   this.compareWithCST(kbUserData[0].startDate);
      //  console.log(x);
      //  if(x < 900){
      //   localStorage.setItem('kbUserValid', "true");
      //  // alert('You are within in 15 minute window to your schedule. You have ' + x + ' seconds left to practise before your schedule begins.');
      //  }
      //  else{
      //   localStorage.setItem('kbUserValid', "false");
      //   alert('You are out of 15 minute window to your schedule.');
      //  }
      // }
      // if(kbUserData[0].timeZoneId == 1 && kbUserData[0].endDate){
      //   y =   this.compareWithCST(kbUserData[0].endDate);
      //  console.log(y);
      // }

      if(kbUserData[0].startDate && kbUserData[0].endDate){
      if(kbUserData[0].timeZoneId == 1){
        x =   this.compareWithTimeZone(kbUserData[0].startDate, 'America/Chicago');
        y =   this.compareWithTimeZone(kbUserData[0].endDate, 'America/Chicago');
      }
      if(kbUserData[0].timeZoneId == 2){
        x =   this.compareWithTimeZone(kbUserData[0].startDate, 'America/Los_Angeles');
        y =   this.compareWithTimeZone(kbUserData[0].endDate, 'America/Los_Angeles');
      }
      if(kbUserData[0].timeZoneId == 3){
        x =   this.compareWithTimeZone(kbUserData[0].startDate, 'America/New_York');
        y =   this.compareWithTimeZone(kbUserData[0].endDate, 'America/New_York');
      }
//x - is begin time < 900, gives a time frame of 15 minutes before
        if(x < 900 && y > -900){
          alert('You are within in 15 minute window to your schedule. You have ' + x + ' seconds left to practise before your schedule begins.');
          localStorage.setItem('kbUserValid', "true");
        }
        else{
          alert('You are out of 15 minute window to your schedule. Please reschedule from Home');
          localStorage.setItem('kbUserValid', "false");
          this.router.navigateByUrl('home');
        }
     
      }
        


      }
      else{
        localStorage.setItem('kbUserValid', "false");
      }
    });
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

  startRecording() {
    this.btnRecordStopText = "Stop Recording"
    this.speechRecognitionService.startRecognition();
    this.speechRecognitionService.speechResult.subscribe((result) => {
      this.txtInputText =   result;
          });
  }

  stopRecording() {
    this.btnRecordStopText = "Start Recording";
    this.speechRecognitionService.stopRecognition();
        this.getdata();
    
  }



  getdata(): void{
    this.appendoutput = "";
    //this.knowledgeBaseRelay = {};
    //this.stopRecording();
    //this.openaiservice.anotherFunction();
    
if(localStorage.getItem('kbUserValid') == "true"){
  if(this.txtInputText){
  this.createCompletions();
  }
//   this.openaiservice.getOpenAIData(this.txtInputText + '. Respond in 10 words.').subscribe(
//     data => {
//       this.fasterResponse = '';
//       this.openAIModel = data;
//       this.fasterResponse = this.openAIModel.choices[0].message.content!;

// this.knowledgeBaseRelay.A =  this.openAIModel.choices[0].message.content;
 
//     });

  //       this.openaiservice.getOpenAIData(this.txtInputText).subscribe({ next :
  //         data => {
  //           console.log('In stream');
  //           this.openAIModel = data;
  //           console.log(data);
  //           console.log(this.openAIModel);
            
           
      
  //     // this.knowledgeBaseRelay.A =   this.knowledgeBaseRelay.A + this.openAIModel.choices[0].message.content!;
  //   } ,

  // error: (err) => {
  //                   console.log(err);
  //               },
  //               complete: () => {
  //                   console.log('stream completed');
  //                  // this.knowledgeBaseRelays.push(this.knowledgeBaseRelay);  
  //               }
  //         });
         
        }
        else{
          alert('Please navigate to HOME from menu and register or drop an email at kbdemo99@gmail.com ');
          this.router.navigateByUrl('home');
        }
         
        }

        press(keyString: string) {
          this.triggerKeyboardEvent(window, keyString);
        }

        triggerKeyboardEvent(el: any, keyString: string) {
          var eventObj = document.createEvent("Events") as any;
        
          if(eventObj.initEvent){
            eventObj.initEvent("keyup", true, true);
          }
      
          eventObj.shiftKey = true;
          eventObj.ctrlKey = false;
          eventObj.metaKey = false;
          eventObj.altKey = false;
          eventObj.key = keyString;
          
          el.dispatchEvent ? 
          el.dispatchEvent(eventObj) : 
          el.fireEvent("onkeyup", eventObj); 
        
      } 


      addTag(tag:string){
        this.tag = 'Answer in ' + tag + '. ';
      }

      resetTag(){
        this.tag = '';
      }
      


      stopCompletions() {
        this.controller.abort();
        console.log('Stream stoped')
        }
    
    
        async createCompletions() {
          this.prompt = this.tag + this.txtInputText;

          this.appendoutput = "";
          //if (!this.controller) {

          this.controller = new AbortController();
         // }
          const signal = this.controller.signal;
          const url: string = `${this.apiUrl}/chat/completions`;
          const headers = {
          Authorization: `Bearer ${this.manageKey.manageKeyValue}`,
          'Content-Type': 'application/json',
          };
          const body = {
          model: 'gpt-3.5-turbo',
          messages: [{ "role": "user",
          "content": this.prompt}],
          stream: true,
          };
          const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body),
          signal,
          };
          try {
          const response: Response = await fetch(url, options);
          const reader: ReadableStreamDefaultReader<string> | undefined =
          response.body?.pipeThrough(new TextDecoderStream()).getReader();
          if (!reader) {
          throw new Error('Error occurred while creating stream reader');
          }
          while (true) {
          const { value, done } = await reader.read();
          if (done) {
          break;
          }
        
      
          const lines: string[] = value.split('\n');
          
          const parsedLines: ICompletion[] =
          this.getParsedStreamedCompletionResponse(lines);
          let linesCount = parsedLines.length;
       
          for (const line of parsedLines) {
            
          const { choices } = line;
          const { delta } = choices[0];
          if (delta?.content) {
          //Result that must be concatenated
         
            this.appendoutput = this.appendoutput + delta.content;
            
         
          console.log(delta.content);
          }
          }
          }
          } catch (error) {
          if (signal.aborted) {
          console.error('Request aborted.');
          } else {
          this.handleError(error);
          }
          } finally {
            console.log('In final completions');
            // this.knowledgeBaseRelay.Q = this.txtInputText;
            // this.knowledgeBaseRelay.A = this.appendoutput;
            // this.knowledgeBaseRelays.push(this.knowledgeBaseRelay);
          this.stopCompletions();
          //return this.appendoutput;
          }
          }
    
          private getParsedStreamedCompletionResponse(
            lines: string[]
            ): ICompletion[] {
            return lines
            .map((line) => line.replace(/^data: /, '').trim())
            .filter((line) => line !== '' && line !== '[DONE]')
            .map((line) => JSON.parse(line));
            }
    
            private handleError(error: any) {
              console.error('Error:', error);
              if (error instanceof DOMException && error.name === 'AbortError') {
              throw new Error('Request was aborted');
              } else if (
              error instanceof TypeError &&
              error.message === 'Failed to fetch'
              ) {
              throw new Error('Network error occurred');
              } else if (
              error instanceof TypeError &&
              error.message === 'Failed to decode'
              ) {
              throw new Error('Error decoding response from server');
              } else if (
              error instanceof TypeError &&
              error.message ===
              'JSON.parse: unexpected end of data at line 1 column 1 of the JSON data'
              ) {
              throw new Error('Invalid JSON response from server');
              } else if (
              error instanceof TypeError &&
              error.message ===
              'response.body?.pipeThrough(...).getReader is not a function'
              ) {
              throw new Error('Invalid response from server');
              } else {
              throw new Error('Unknown error occurred');
              }
              }



                            convertToTimeZone(datetime: Date, timeZone: string): string {
                return datetime.toLocaleString('en-US', { timeZone: timeZone });
              }

              compareWithTimeZone(cstDatetime : string, timeZone : string): number {
                const currentDatetime = this.convertToTimeZone(new Date(), timeZone);
                const differenceInMilliseconds = new Date(cstDatetime).getTime() - new Date(currentDatetime).getTime();
                const differenceInSeconds = differenceInMilliseconds / 1000;
                return  differenceInSeconds;
                // Example: Log the time difference in seconds
                console.log('Time difference (seconds):', differenceInSeconds);
              }


  }

