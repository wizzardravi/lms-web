import { TestBed } from '@angular/core/testing';

import { QuestionnaireDetOpsService } from './questionnaire-det-ops.service';

describe('QuestionnaireDetOpsService', () => {
  let service: QuestionnaireDetOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireDetOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
