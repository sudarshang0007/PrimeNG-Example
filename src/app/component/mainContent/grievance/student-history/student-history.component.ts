import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { ROOT_URL } from '../../../../constant/app.constant';
import { GrievanceServiceService } from '../../../../grievance-service.service';

@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.css']
})
export class StudentHistoryComponent implements OnInit {

  @Input('historyList') historyList: any;
  @Input('isLoggedIn') isLoggedIn: boolean;
  activeGrievance: any;


  constructor(private httpClient: HttpClient,
    private grievanceService: GrievanceServiceService) {
  }

  ngOnInit() {
  }

  viewDetailsofGrievance(index: any): void {
    this.activeGrievance = this.historyList[index];
   // console.log(this.activeGrievance);
  }

}
