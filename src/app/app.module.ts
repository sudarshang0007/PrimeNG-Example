import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
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
import {CardModule} from 'primeng/card';



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
    ContactComponent
  ],
  imports: [
    BrowserModule,
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
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
