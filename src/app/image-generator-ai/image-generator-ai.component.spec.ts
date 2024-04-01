import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGeneratorAIComponent } from './image-generator-ai.component';

describe('ImageGeneratorAIComponent', () => {
  let component: ImageGeneratorAIComponent;
  let fixture: ComponentFixture<ImageGeneratorAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGeneratorAIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageGeneratorAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
