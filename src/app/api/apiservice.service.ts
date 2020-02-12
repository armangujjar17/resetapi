import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Getapi} from './getapi';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  httpOptions={responseType:'Text' as 'JSON'}
  baseUrl: string = 'http://localhost:8080/customer';
  getUsers() {
    return this.http.get<Getapi>(this.baseUrl);
  }
  getUserById(id: number) {
    return this.http.get<Getapi>(this.baseUrl + id);
  }
}
