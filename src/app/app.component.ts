import { Component } from '@angular/core';
import{ApiserviceService} from './api/apiservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudTest';
  Id=8;
  constructor( private ApiService : ApiserviceService) { }
  getUser(){
    this.ApiService.getUsers()
    .subscribe( data => {
      console.log("Hello");
    console.log(data);

    });
  }
  getById()
  {
    this.ApiService.getUserById(this.Id).subscribe(data =>
      {
        console.log(data);
      })
  }
  deleteById()
  {
    this.ApiService.deleteUserById(this.Id)
    .subscribe(data =>
      {
        console.log(data);
      })
  }
}
