import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { openAIModel } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1'; // Replace with the actual OpenAI API URL
  constructor(private http: HttpClient) { }

  getOpenAIData(prompt: string):Observable<openAIModel> {
    const apiKey = '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'; // Replace with your OpenAI API key
    const headers = { 'Authorization': `Bearer ${apiKey}` };
  
    return this.http.post<openAIModel>(`${this.apiUrl}/chat/completions`, {
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
              "content": prompt
          }
      ],
      "temperature": 0.7
  }, { headers });
  }
}
