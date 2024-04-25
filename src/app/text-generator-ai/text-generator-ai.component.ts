import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpenAIService } from './text-generator-ai.service';
import { environment } from '../../environments/environment.development';
import { TextGeneratorReponse } from '../interfaces/text.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-generator-ai',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-generator-ai.component.html',
  styleUrl: './text-generator-ai.component.scss'
})
export class TextGeneratorAiComponent {
  prompt: string = '';
  generatedText: TextGeneratorReponse[] = [];

  constructor(private apiService: OpenAIService) { }

  generateText(): void {
    this.apiService.chatCompletion(this.prompt);
  }
}

