import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../../../node_modules/@angular/common/http';
import { ROOT_URL } from '../../../../constant/app.constant';
import { GrievanceServiceService } from '../../../../grievance-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: any;
  username: any;
  responsetext = '';

  @Output('user')
  user: EventEmitter<any> = new EventEmitter<any>();
  data = new FormData();
  loginButtondisabled=false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  loginUser(): void {
    // disable Login Button
    this.loginButtondisabled = true;

    // 1. set values to formdata
    this.data.set('username', this.username);
    this.data.append('password', btoa(this.password));

    //2. set formdata header
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');

    // 3. send post request and fetch user data
    this.httpClient.post(ROOT_URL + '/controller/Login.php', this.data, { headers: headers })
      .subscribe(
        response => {
          console.log(response)
          this.responsetext = 'Login Successful !';
          this.user.emit(response);
          this.loginButtondisabled = false;
        },
        error => {
          this.responsetext = 'Invalid details, please enter valid credentials !';
          console.log(error);
          this.loginButtondisabled = false;
        }, () => {
          var fomr = document.getElementById('loginForm') as HTMLFormElement;
          this.responsetext = '';
          fomr.reset();
        });
  }



}
