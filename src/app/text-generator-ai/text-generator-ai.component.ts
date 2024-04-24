import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenAIService } from './text-generator-ai.service';
import { ApiResponseAiText } from '../interfaces/text.interface';
import OpenAi, { OpenAI } from 'openai';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-text-generator-ai',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-generator-ai.component.html',
  styleUrl: './text-generator-ai.component.scss'
})
export class TextGeneratorAiComponent {
  prompt: string = '';
  generatedText:string = '';

  constructor(private apiService: OpenAIService) { }

  openai = new OpenAI({
    apiKey: environment.openAiKey, // This is the default and can be omitted
  });

  async generateText(){
     // Non-streaming:
  const completion = await this.openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: this.prompt }],
  });
  console.log(completion.choices[0]?.message?.content);
  }

}
