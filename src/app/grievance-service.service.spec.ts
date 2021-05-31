import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { GrievanceServiceService } from './grievance-service.service';

describe('GrievanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrievanceServiceService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([GrievanceServiceService], (service: GrievanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
