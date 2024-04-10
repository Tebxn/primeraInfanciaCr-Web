import { Component } from '@angular/core';
import { ImageGeneratorAIService } from './image-generator-ai.service';
import { Dalleresponse } from '../interfaces/dalleresponse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-generator-ai',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-generator-ai.component.html',
  styleUrl: './image-generator-ai.component.scss'
})
export class ImageGeneratorAIComponent {

  prompt: string = '';
  imageUrl: string = '';
  noImageUrl: string = '../../assets/images/no-image.jpeg';
  selectedOption: string = 'TextGenerator';

  constructor(private apiService: ImageGeneratorAIService) { }

  generateImage(){
    this.apiService.getGeneratedImage(this.prompt).subscribe(
      (data: Dalleresponse) => {
        this.imageUrl = data.data[0].url;
      },
      error => {
        console.error('Error al generar la imagen:', error);
      }
    );
  }

  changeOptionToText(){
    this.selectedOption = 'TextGenerator';
  }
  changeOptionToImage(){
    this.selectedOption = 'ImageGenerator';
  }
}
