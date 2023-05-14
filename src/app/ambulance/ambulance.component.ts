import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent {
  doctors: any
  response: any
  apiURL = 'https://reqres.in/api/users?page=2'
    constructor(private http: HttpClient){
      this.response = this.http.get(this.apiURL);
      console.log(this.response);
      this.http.get<any>(this.apiURL).subscribe(data => {
            this.doctors = data['data'];
            console.log(data)
          })
        }
}
