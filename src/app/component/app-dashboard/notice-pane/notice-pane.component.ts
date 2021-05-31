import { Component, OnInit } from '@angular/core';
import { notices } from 'src/app/constant/notice.constant';

@Component({
  selector: 'app-notice-pane',
  templateUrl: './notice-pane.component.html',
  styleUrls: ['./notice-pane.component.css']
})
export class NoticePaneComponent implements OnInit {

  readonly notices= notices;
  constructor() { }

  ngOnInit() {
  }

}
