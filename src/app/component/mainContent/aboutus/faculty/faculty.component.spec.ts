import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FacultyComponent } from './faculty.component';

describe('FacultyComponent', () => {
  let component: FacultyComponent;
  let fixture: ComponentFixture<FacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
