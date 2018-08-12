import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-flag',
  templateUrl: './header-flag.component.html',
  styleUrls: ['./header-flag.component.css']
})
export class HeaderFlagComponent implements OnInit {
  @Input() firstMessage: string='erter';

  @Input() secondMessage: string='fgdf';

  constructor() { }

  ngOnInit() {
  }

}
