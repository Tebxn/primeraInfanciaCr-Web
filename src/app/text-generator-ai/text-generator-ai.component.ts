import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-generator-ai',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './text-generator-ai.component.html',
  styleUrl: './text-generator-ai.component.scss'
})
export class TextGeneratorAiComponent {
 prompt: string = '';

  constructor() { }

  generateText(){
   
  }
}
