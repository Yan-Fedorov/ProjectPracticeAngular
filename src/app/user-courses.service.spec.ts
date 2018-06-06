import { TestBed, inject } from '@angular/core/testing';

import { UserCoursesService } from './user-courses.service';

describe('UserCoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCoursesService]
    });
  });

  it('should be created', inject([UserCoursesService], (service: UserCoursesService) => {
    expect(service).toBeTruthy();
  }));
});
