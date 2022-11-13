import { Injectable } from '@angular/core';
import { ROOT_URL } from './constant/app.constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GrievanceServiceService {


  constructor(private httpClient: HttpClient) { }

  listStudentHistory(): Observable <any> {
   return  this.httpClient.get(ROOT_URL + '/controller/Config.php');
  }

}
