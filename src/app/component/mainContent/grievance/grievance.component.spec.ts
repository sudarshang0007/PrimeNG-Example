import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievanceComponent } from './grievance.component';

describe('GrievanceComponent', () => {
  let component: GrievanceComponent;
  let fixture: ComponentFixture<GrievanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GrievanceComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
