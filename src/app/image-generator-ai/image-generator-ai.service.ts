import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Dalleresponse } from '../interfaces/dalleresponse';

@Injectable({
  providedIn: 'root'
})
export class ImageGeneratorAIService {


  private url = environment.openAiApiUrl;
  private OPENAI_API_KEY = environment.openAiKey;

  constructor(private http: HttpClient) { }

  getGeneratedImage(prompt:string): Observable<Dalleresponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.OPENAI_API_KEY}`
    });
  
    const body = {
      'model': 'dall-e-2',
      'prompt': prompt,
      'n': 1,
      'size': '256x256'
    };
  
    return this.http.post<Dalleresponse>(this.url, body, { headers: headers });
  }
}
