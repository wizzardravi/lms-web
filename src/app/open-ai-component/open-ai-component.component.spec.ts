import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiComponentComponent } from './open-ai-component.component';

describe('OpenAiComponentComponent', () => {
  let component: OpenAiComponentComponent;
  let fixture: ComponentFixture<OpenAiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAiComponentComponent]
    });
    fixture = TestBed.createComponent(OpenAiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
