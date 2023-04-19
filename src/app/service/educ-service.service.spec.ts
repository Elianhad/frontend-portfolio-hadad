import { TestBed } from '@angular/core/testing';

import { EducServiceService } from './educ-service.service';

describe('EducServiceService', () => {
  let service: EducServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
