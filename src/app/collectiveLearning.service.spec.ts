import { TestBed, inject } from '@angular/core/testing';

import { CollectiveLearningService } from './collectiveLearningservice';

describe('CollectiveLearningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectiveLearningService]
    });
  });

  it('should be created', inject([CollectiveLearningService], (service: CollectiveLearningService) => {
    expect(service).toBeTruthy();
  }));
});
