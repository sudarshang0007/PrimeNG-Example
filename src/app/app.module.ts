import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { AppDashboardComponent } from './component/app-dashboard/app-dashboard.component';
import { MyNavComponent } from './component/my-nav/my-nav.component';
import { AboutusComponent } from './component/mainContent/aboutus/aboutus.component';
import { AcademicComponent } from './component/mainContent/academic/academic.component';
import { ActivitiesComponent } from './component/mainContent/activities/activities.component';
import { StudentComponent } from './component/mainContent/student/student.component';
import { TnPcellComponent } from './component/mainContent/tn-pcell/tn-pcell.component';
import { AlumniComponent } from './component/mainContent/alumni/alumni.component';
import { CommitteeComponent } from './component/mainContent/committee/committee.component';
import { GalleryComponent } from './component/mainContent/gallery/gallery.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdmissionComponent } from './component/mainContent/admission/admission.component';
import { PrincipalComponent } from './component/mainContent/aboutus/principal/principal.component';
import { FacultyComponent } from './component/mainContent/aboutus/faculty/faculty.component';
import { ContactComponent } from './component/mainContent/aboutus/contact/contact.component';
import { CardModule } from 'primeng/card';
import { GalleryViewerComponent } from './component/GalleryPopup/gallery-viewer/gallery-viewer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentDetailsComponent } from './component/mainContent/student/student-details/student-details.component';
import { HeaderFlagComponent } from './component/header-flag/header-flag.component';
import { GrievanceComponent } from './component/mainContent/grievance/grievance.component';
import { AddComponent } from './component/mainContent/grievance/add/add.component';
import { LoginComponent } from './component/mainContent/grievance/login/login.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { StudentHistoryComponent } from './component/mainContent/grievance/student-history/student-history.component';
import { FormsModule } from '../../node_modules/@angular/forms';
// import { NgxSpinnerModule } from 'ngx-spinner';

import { NoticePaneComponent } from './component/app-dashboard/notice-pane/notice-pane.component';
import { CareerComponent } from './component/mainContent/career/career.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AppDashboardComponent,
    AboutusComponent,
    AcademicComponent,
    ActivitiesComponent,
    StudentComponent,
    TnPcellComponent,
    AlumniComponent,
    CommitteeComponent,
    GalleryComponent,
    AdmissionComponent,
    PrincipalComponent,
    FacultyComponent,
    ContactComponent,
    GalleryViewerComponent,
    StudentDetailsComponent,
    HeaderFlagComponent,
    GrievanceComponent,
    AddComponent,
    LoginComponent,
    StudentHistoryComponent,
    NoticePaneComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    GalleriaModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    CardModule,
    MatTabsModule,
    //NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
