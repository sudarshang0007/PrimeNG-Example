import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../../../node_modules/@angular/common/http';
import { ROOT_URL } from '../../../../constant/app.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  password: any;
  username: any;

  data= new FormData();


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  loginUser(): void {
  
  
    this.data.set('username',this.username);
    this.data.append('password',this.password);

    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
   
    this.httpClient.post(ROOT_URL+'/controller/Login.php',this.data,{headers: headers })
      .subscribe(response => console.log(response));
  }

}
