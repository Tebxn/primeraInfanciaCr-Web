import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ApiResponseAiText } from '../interfaces/text.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {

  private url = environment.openAiApiUrl_DallE;
  private OPENAI_API_KEY = environment.openAiKey;

  processedPrompt: string = '';

  constructor(private http: HttpClient) { }

  generateText(prompt: string): Observable<ApiResponseAiText> {
    this.processedPrompt = `Genera una imagen de estilo animada con fin educativo apropiada para infantes de preescolar,
     que logre captar la atencion de este publico meta acerca de: ${prompt}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: 'Hello!'
        }
      ]
    };

    return this.http.post<ApiResponseAiText>(this.url, body, { headers });
  }
}
