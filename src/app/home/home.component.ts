import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryNavigationComponent } from './components/category-navigation/category-navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ImageGeneratorAIComponent } from '../image-generator-ai/image-generator-ai.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FooterComponent, CategoryNavigationComponent, ResourcesComponent, ImageGeneratorAIComponent,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedOption: string = 'Inicio'; // Opción por defecto

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
