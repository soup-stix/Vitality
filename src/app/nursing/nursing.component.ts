import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nursing',
  templateUrl: './nursing.component.html',
  styleUrls: ['./nursing.component.css']
})
export class NursingComponent {
  nurses: any
  response: any
  searchNurse: any
  page = 0
  pageUrl = 'http://127.0.0.1:3000/user/nurses'
  headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')

  apiURL = 'http://127.0.0.1:3000/user/nurses'
    constructor(private http: HttpClient){
      this.pageUrl = 'http://127.0.0.1:3000/user/nurses/?';
      this.http.get(this.apiURL+"/?page=0", { 'headers': this.headers }).subscribe(data => {
            this.nurses = data;
            console.log(data)
          })
    }

    nextPage(){
      if (this.nurses.length > 19){
        this.page = this.page + 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.nurses = data;
          console.log(data)
        })
      }
    }

    previousPage(){
      if(this.page > 0){
        this.page = this.page - 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.nurses = data;
          console.log(data)
        })
      }
    }
}
