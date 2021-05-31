import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePaneComponent } from './notice-pane.component';

describe('NoticePaneComponent', () => {
  let component: NoticePaneComponent;
  let fixture: ComponentFixture<NoticePaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticePaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
