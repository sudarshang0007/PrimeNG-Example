import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROOT_URL } from '../../../../constant/app.constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data = new FormData();
  title: any;
  name: any;
  contact: any;
  type: any;
  details: any;
  date: any;
  reporterType: any;

  @Output('command') command: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpClient: HttpClient,private ngxSpinner:NgxSpinnerService) { }

  ngOnInit() {
    this.date = new Date();
  }

  insertGrievance(): void {

    this.data.set('title', this.title);
    this.data.append('name', this.name);
    this.data.append('contact', this.contact);
    this.data.append('type', this.type);
    this.data.append('details', this.details);
    this.data.append('date', this.date);
    this.data.append('reporterType', this.reporterType);

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');

    this.ngxSpinner.show();

    this.httpClient.post(ROOT_URL + '/controller/insertGrievance.php', this.data, { headers: headers })
      .subscribe(response => {
        this.command.emit('add');
        alert(response['status'] === 'success' ? 'Data uploaded successfully !' : 'We are facing difficulties to process the data');
        this.ngxSpinner.hide();
      }, error => {
        alert('Error occured while uploading data !');
        this.ngxSpinner.hide();
      });
  }


}
