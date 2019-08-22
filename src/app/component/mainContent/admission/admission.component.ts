import { Component, OnInit } from '@angular/core';
import { admissionLink } from 'src/app/constant/admission.constant';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  readonly admissionLink = admissionLink;
  constructor() { }

  ngOnInit() {
  }

}
