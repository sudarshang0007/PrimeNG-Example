import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnPcellComponent } from './tn-pcell.component';

describe('TnPcellComponent', () => {
  let component: TnPcellComponent;
  let fixture: ComponentFixture<TnPcellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnPcellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnPcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
