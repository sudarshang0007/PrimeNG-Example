import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './component/app-dashboard/app-dashboard.component';
import { AboutusComponent } from './component/mainContent/aboutus/aboutus.component';
import { AcademicComponent } from './component/mainContent/academic/academic.component';
import { AdmissionComponent } from './component/mainContent/admission/admission.component';
import { StudentComponent } from './component/mainContent/student/student.component';
import { TnPcellComponent } from './component/mainContent/tn-pcell/tn-pcell.component';
import { CommitteeComponent } from './component/mainContent/committee/committee.component';
import { ActivitiesComponent } from './component/mainContent/activities/activities.component';
import { AlumniComponent } from './component/mainContent/alumni/alumni.component';
import { GalleryComponent } from './component/mainContent/gallery/gallery.component';
import { PrincipalComponent } from './component/mainContent/aboutus/principal/principal.component';
import { FacultyComponent } from './component/mainContent/aboutus/faculty/faculty.component';
import { ContactComponent } from './component/mainContent/aboutus/contact/contact.component';

const routes: Routes = [
  { path: '', component: AppDashboardComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'student', component: StudentComponent },
  { path: 'TnPcell', component: TnPcellComponent },
  { path: 'alumni', component: AlumniComponent },
  { path: 'committee', component: CommitteeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
