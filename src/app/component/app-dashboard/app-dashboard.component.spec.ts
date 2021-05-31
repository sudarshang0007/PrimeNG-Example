
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoticePaneComponent } from '../../component/app-dashboard/notice-pane/notice-pane.component';
import { AppDashboardComponent } from './app-dashboard.component';

describe('AppDashboardComponent', () => {
  let component: AppDashboardComponent;
  let fixture: ComponentFixture<AppDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDashboardComponent, NoticePaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
