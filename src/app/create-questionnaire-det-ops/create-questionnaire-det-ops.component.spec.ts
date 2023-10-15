import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionnaireDetOpsComponent } from './create-questionnaire-det-ops.component';

describe('CreateQuestionnaireDetOpsComponent', () => {
  let component: CreateQuestionnaireDetOpsComponent;
  let fixture: ComponentFixture<CreateQuestionnaireDetOpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateQuestionnaireDetOpsComponent]
    });
    fixture = TestBed.createComponent(CreateQuestionnaireDetOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
