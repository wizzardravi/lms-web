import { Injectable } from '@angular/core';
import { ICompletion, IMessage, ManageKey, openAIModel } from './interfaces';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import OpenAI from 'openai';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  id!:string;
  message! : IMessage;
  messages!:IMessage[];
  api_key! : string ;
  appendoutput! : string;
  private controller: AbortController = new AbortController();
  
  private apiUrl = 'https://api.openai.com/v1'; // Replace with the actual OpenAI API URL
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  stopCompletions() {
    this.controller.abort();
    console.log('Stream stoped')
    }


    async createCompletions() {
      if (!this.controller) {
      this.controller = new AbortController();
      }
      const signal = this.controller.signal;
      const url: string = `${this.apiUrl}/chat/completions`;
      const headers = {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
      };
      const body = {
      model: 'gpt-3.5-turbo',
      messages: [{ "role": "user",
      "content": 'explain about angular services'}],
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
      for (const line of parsedLines) {
      const { choices } = line;
      const { delta } = choices[0];
      if (delta?.content) {
      //Result that must be concatenated
      this.appendoutput += this.appendoutput +  delta.content;
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
        console.log('In final completions')
      this.stopCompletions();
      return this.appendoutput;
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
          

  //   getOpenAIData(prompt: string):Observable<openAIModel> {
  //   const apiKey = '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';
  //   const headers = { 'Authorization': `Bearer ${apiKey}` };
  

    
  //   return this.http.post<openAIModel>(`${this.apiUrl}/chat/completions`, {
  //     "model": "gpt-3.5-turbo",
  //     "messages": [
  //         {
  //             "role": "user",
  //             "content": prompt
  //         }
  //     ],
  //     "temperature": 0.7
  // }, { headers });
  // }


getApiKey(key:string):Observable<ManageKey>{
  return new Observable<ManageKey>(observer => {
          this.http.get<ManageKey>(`https://www.listmanagementapi.com/api/KnowledgeBase/keys/${key}`).subscribe(managekey =>{
            observer.next(managekey);
            localStorage.setItem('openkey', managekey.manageKeyValue);
          }) 
      });
    };

  getOpenAIData(prompt:String): Observable<openAIModel>{
    const key  = localStorage.getItem('openkey');
    const headers = { 'Authorization': `Bearer ${key}` };
  
    return new Observable<openAIModel>(observer => {
            this.http.post<openAIModel>(`${this.apiUrl}/chat/completions`, {
              "model": "gpt-3.5-turbo",
              "messages": [
                  {
                      "role": "user",
                      "content": prompt
                  }
              ],
              "temperature": 0.5,
              "stream": true
             
          }, { headers }).subscribe(listing =>{
            //  observer.next(listing);
            console.log(listing);
            })
  })
}


// Define a JavaScript function
myFunction() {
  
  this.api_key   = localStorage.getItem('openkey')!;
 const openai = new OpenAI({ apiKey : this.api_key, dangerouslyAllowBrowser: true });
  
  async function main() {
      const stream = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: "Say this is a test" }],
          stream: true,
      });

      for await (var chunk of stream) {
          console.log(chunk.choices[0]?.delta?.content || "");
      }
  }
  
  main();
}

// Call the JavaScript function
anotherFunction() {
  //this.myFunction(); // Call myFunction() within another function
  // this.message.content = "Explain about angular micro services?";
  // this.message.role = "user";
  // this.messages.push(this.message);
  this.createCompletions();
}



}
