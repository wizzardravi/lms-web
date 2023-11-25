import { TestBed } from '@angular/core/testing';

import { KnowledgebaseServiceService } from './knowledgebase-service.service';

describe('KnowledgebaseServiceService', () => {
  let service: KnowledgebaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgebaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
