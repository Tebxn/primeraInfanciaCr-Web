import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Dalleresponse } from '../interfaces/dalleresponse';

@Injectable({
  providedIn: 'root'
})
export class ImageGeneratorAIService {

  processedPrompt:string = '';
  private url = environment.openAiApiUrl_DallE;
  private OPENAI_API_KEY = environment.openAiKey;

  constructor(private http: HttpClient) { }

  getGeneratedImage(prompt:string): Observable<Dalleresponse> {
    this.processedPrompt = `Genera una imagen de estilo animada con fin educativo apropiada para infantes de preescolar,
     que logre captar la atencion de este publico meta acerca de: ${prompt}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`
    });
  
    const body = {
      'model': 'dall-e-3',
      'prompt': this.processedPrompt,
      'n': 1,
      'size': '1024x1024'
    };
  
    return this.http.post<Dalleresponse>(this.url, body, { headers: headers });
  }
}
