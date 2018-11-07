import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../../../node_modules/@angular/common/http';
import { ROOT_URL } from '../../../../constant/app.constant';

@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.css']
})
export class StudentHistoryComponent implements OnInit {

  historyList: any;
  activeGrievance: any;

  constructor(private httpClient: HttpClient) {
    this.listStudentHistory();  
  }

  ngOnInit() {
  }

  listStudentHistory(): void {
    this.httpClient.get(ROOT_URL+'/controller/Config.php')
      .subscribe(response => this.historyList = JSON.parse(JSON.stringify(response)));
  }

  viewDetailsofGrievance(index: any): void {
    this.activeGrievance = this.historyList[index];
    console.log(this.activeGrievance);
  }

}
