import { Injectable } from '@angular/core';
import { ROOT_URL } from './constant/app.constant';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class GrievanceServiceService {


  constructor(private httpClient: HttpClient) { }

  listStudentHistory(): Observable <any> {
   return  this.httpClient.get(ROOT_URL + '/controller/Config.php');
  }

}
