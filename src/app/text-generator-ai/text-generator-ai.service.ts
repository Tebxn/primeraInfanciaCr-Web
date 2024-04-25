import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { TextGeneratorReponse } from '../interfaces/text.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  public responseText: TextGeneratorReponse[] = [];
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) { }

  chatCompletion(prompt: string): void {
    prompt = 'Genera un texto destinado a publico infantil sobre la tematica de: ' + prompt;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.apiKey}`);

    const body = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    };

    this.http.post<TextGeneratorReponse>(this.apiUrl, body, { headers })
      .subscribe(resp => {
        this.responseText = [{
          id: resp.id,
          object: resp.object,
          created: resp.created,
          model: resp.model,
          system_fingerprint: resp.system_fingerprint,
          choices: resp.choices,
          usage: resp.usage
        }];
        console.log('Response:', this.responseText);
        console.log('Response:', JSON.stringify(this.responseText, null, 2));

      });
  }
}




