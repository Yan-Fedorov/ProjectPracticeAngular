import { TestBed, inject } from '@angular/core/testing';

import { CompletedTaskService } from './completed-task.service';

describe('CompletedTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedTaskService]
    });
  });

  it('should be created', inject([CompletedTaskService], (service: CompletedTaskService) => {
    expect(service).toBeTruthy();
  }));
});
