import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Getapi} from './getapi';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  
  baseUrl: string = 'http://localhost:8080/customer';
  getUsers() {
    return this.http.get<Getapi>(this.baseUrl);
  }
  getUserById(Id) {
    return this.http.get<Getapi>(this.baseUrl +'/'+ Id);
  }
  deleteUserById(Id)
  {
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.delete<Getapi>(this.baseUrl, Id);
  }
}
//JSON.stringify(data)