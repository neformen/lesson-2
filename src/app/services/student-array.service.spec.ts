import { TestBed, inject } from '@angular/core/testing';

import { StudentArrayService } from './student-array.service';

describe('StudentArrayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentArrayService]
    });
  });

  it('should ...', inject([StudentArrayService], (service: StudentArrayService) => {
    expect(service).toBeTruthy();
  }));
});
