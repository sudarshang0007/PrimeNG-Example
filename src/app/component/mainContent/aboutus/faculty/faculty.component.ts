import { Component, OnInit } from '@angular/core';
import { facultyDetails } from '../../../../constant/applicationDetails.constant';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  readonly facultyDetails = facultyDetails;

  constructor() {

  }

  ngOnInit() {

  }

}
