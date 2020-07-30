import { Component, OnInit } from '@angular/core';
import { committeeList } from 'src/app/constant/commitee.constant';

 @Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {

  readonly committeeList = committeeList;
  constructor() { }

  ngOnInit() {
  }

}
