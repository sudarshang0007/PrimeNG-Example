import { Component, AfterViewInit } from '@angular/core';
import { importantLinks } from '../../constant/importantLinks.constant';
import { admissionLink } from 'src/app/constant/admission.constant';
import { $ } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements AfterViewInit{
  
  readonly imporatantLinks;
  readonly admissionLink = admissionLink;

  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 }
  ];
  constructor(){
   this.imporatantLinks= importantLinks;
  }
  ngAfterViewInit(): void {
    document.getElementById('admission_notice').click();
  }
}
