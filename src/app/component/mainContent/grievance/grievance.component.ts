import { Component, OnInit } from '@angular/core';
import { GrievanceServiceService } from '../../../grievance-service.service';
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-grievance',
  templateUrl: './grievance.component.html',
  styleUrls: ['./grievance.component.css']
})
export class GrievanceComponent implements OnInit {


  username: string;
  email: string;
  isLoggedIn = false;
  complaintList: any;

  constructor(private grievanceService: GrievanceServiceService,private ngxSpinner:NgxSpinnerService) {
    this.setUserProfile();
  }

  ngOnInit() {
    this.fetchGrievanceList();
  }

  logout(): void {
    sessionStorage.removeItem('userLoggedIn');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('email');
    this.setUserProfile();
  }


  fetchGrievanceList(): void {
    this.ngxSpinner.show();
    this.grievanceService.listStudentHistory()
      .subscribe((response) => {
        this.complaintList = JSON.parse(JSON.stringify(response));
        this.ngxSpinner.hide();
      },
        error => { console.log(error); this.ngxSpinner.hide();},
        () => { }
      );
  }

  // list to child components to perform synch actions
  requestForUpdate($event: any) {
    switch ($event) {
      case 'add':
        this.fetchGrievanceList();
        break;

      default:
        break;
    }
  }

  // Login Form will return the info
  manageProfile(user: any) {
    sessionStorage.setItem('userLoggedIn', 'Y');
    sessionStorage.setItem('userName', user.name);
    sessionStorage.setItem('email', user.email);

    this.setUserProfile();
  }

  // It will set the userprofile to local storage
  setUserProfile(): any {
    if (sessionStorage.getItem('userLoggedIn')) {
      this.username = sessionStorage.getItem('userName');
      this.email = sessionStorage.getItem('email');
      this.isLoggedIn = true;
      let loginwindow = document.getElementById('popupclose');
      if (loginwindow) {
        loginwindow.click();
      }
    } else {
      this.username = undefined;
      this.email = undefined;
      this.isLoggedIn = false;

    }
  }

}
