import { TestBed, inject } from '@angular/core/testing';

import { GrievanceServiceService } from './grievance-service.service';

describe('GrievanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrievanceServiceService]
    });
  });

  it('should be created', inject([GrievanceServiceService], (service: GrievanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
