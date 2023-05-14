import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
  hospitals: any
  categories = [
    ["angioplasty",1],
    ["appendix",10],
    ["arthroscopic-surgery",1],
    ["bariatric-surgery",10],
    ["bartholin-cyst",1],
    ["bph-surgery",1],
    ["brain-tumor-surgery",1],
    ["breast-implant",3],
    ["breast-lift-surgery",1],
    ["bypass-surgery",2],
    ["carpal-tunnel-surgery",1],
    ["cataract-surgery",2],
    ["chemotherapy",1],
    ["cochlear-implant-surgery",1],
    ["circumcision",9],
    ["colonoscopy",3],
    ["dental-braces",2],
    ["dental-cap",2],
    ["dental-cleaning",2],
    ["tooth-implant",2],
    ["dental-xray",2],
    ["diabitic-foot-ulcer",10],
    ["dialysis",2],
    ["dvt",10],
    ["fistula-surgery",2],
    ["fissure-surgery",3],
    ["flap-surgery",1],
    ["gallbladder-stone-operation",12],
    ["gastric-bypass-surgery",1],
    ["gastroscopy",3],
    ["glaucoma",3],
    ["gynecomastia-surgery",10],
    ["hair-fall-treatment",1],
    ["hair-transplant-surgery",10],
    ["hair-weaving",1],
    ["heart-valve-replacement-surgery",1],
    ["hernia-surgery",10],
    ["hip-replacement-surgery",10],
    ["hydrocele-surgery",10],
    ["hymenoplasty-surgery",1],
    ["hypospadias-surgery",1],
    ["iui-treatment",1],
    ["ivf-treatment",2],
    ["kidney-stone",9],
    ["kidney-transplant",1],
    ["knee-replacement-surgery",10],
    ["labiaplasty",1],
    ["laparoscopic-surgery",1],
    ["laser-eye-surgery",10],
    ["laser-hair-removal",1],
    ["liposuction",10],
    ["open-heart-surgery",1],
    ["plastic-surgery",2],
    ["piles-surgery",3],
    ["root-canal-treatment",2]
]

  hospitalFor = "Hospitals"
  maxLen = 20
  response: any
  hospitalSearch: any
  page = 0
  pageUrl = 'http://127.0.0.1:3000/user/hospitals'
  headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  // apiURL = 'https://reqres.in/api/users?page=1&per_page=20'
  apiURL = 'http://127.0.0.1:3000/user/hospitals'
    constructor(private http: HttpClient){
      // this.hospitals = this.http.get<any>(this.apiURL);
      // console.log(this.hospitals);
      this.pageUrl = 'http://127.0.0.1:3000/user/hospitals/?';
      this.http.get(this.apiURL+"/?page=0", { 'headers': this.headers }).subscribe(data => {
            this.hospitals = data;
            console.log(data)
          })
    }

    nextPage(){
      if (this.hospitals.length > 19){
        this.page = this.page + 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.hospitals = data;
          console.log(data)
        })
      }
    }

    previousPage(){
      if(this.page > 0){
        this.page = this.page - 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.hospitals = data;
          console.log(data)
        })
      }
    }
    
    changeData(name: any){
      this.hospitalFor = name.charAt(0).toUpperCase()+name.slice(1);
      this.page = 0
      this.pageUrl = 'http://127.0.0.1:3000/user/hospitals/category/?name='+name+'&';
      console.log(name)
      this.http.get(this.apiURL+"/category/?name="+name, { 'headers': this.headers }).subscribe(data => {
        this.hospitals = data;
        console.log(data)
      })  
    }

    // filters(){

    // }
}
