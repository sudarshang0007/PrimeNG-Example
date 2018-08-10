import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFlagComponent } from './header-flag.component';

describe('HeaderFlagComponent', () => {
  let component: HeaderFlagComponent;
  let fixture: ComponentFixture<HeaderFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
