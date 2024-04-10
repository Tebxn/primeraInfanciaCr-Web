import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGeneratorAiComponent } from './text-generator-ai.component';

describe('TextGeneratorAiComponent', () => {
  let component: TextGeneratorAiComponent;
  let fixture: ComponentFixture<TextGeneratorAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextGeneratorAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextGeneratorAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
