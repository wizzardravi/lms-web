import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireDetailsComponent } from './create-questionnaire-details.component';

describe('CreateQuestionnaireDetailsComponent', () => {
  let component: CreateQuestionnaireDetailsComponent;
  let fixture: ComponentFixture<CreateQuestionnaireDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionnaireDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionnaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
