import { Component } from '@angular/core';
import { importantLinks } from '../../constant/importantLinks.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent {
  
  readonly imporatantLinks;

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 }
  ];
  constructor(){
   this.imporatantLinks= importantLinks;
  }
}
