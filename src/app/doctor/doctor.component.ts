import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

//import * as $ from 'jquery';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  doctors: any
  categories = [
    ["anesthesiologist",1],
    ["arthroscopy-surgeon",1],
    ["bariatric-surgeon",2],
    ["cardiologist",8],
    ["chest-specialist",1],
    ["dental-surgeon",5],
    ["dermatologist",3],
    ["hair-transplant-doctors",3],
    ["diabetes-specialist",2],
    ["endocrinologist",2],
    ["ent-specialist",5],
    ["cochlear-implant-surgeons",5],
    ["septoplasty-doctors",5],
    ["sinus-doctors",5],
    ["tonsillectomy-doctors",5],
    ["stapedectomy-specialists",5],
    ["tympanoplasty-doctors",5],
    ["eye-specialist",3],
    ["adenoidectomy-surgeons",3],
    ["cataract-surgeons",3],
    ["glaucoma-specialists",3],
    ["lasik-eye-surgeons",3],
    ["squint-specialists",3],
    ["gastroenterologist",6],
    ["general-physician",4],
    ["general-surgeon",4],
    ["appendix-surgeons",4],
    ["fissure-surgeons",4],
    ["fistula-doctors",4],
    ["hernia-surgeons",4],
    ["lipoma-doctors",4],
    ["piles-doctors",1],
    ["pilonidal-sinus-doctors",4],
    ["gynecologist",7],
    ["abortion-doctors",7],
    ["bartholin-cyst-doctors",7],
    ["hymenoplasty-doctors",7],
    ["hysterectomy-doctors",7],
    ["mtp-doctors",7],
    ["ovarian-cyst-doctors",7],
    ["vaginal-tightening-doctors",7],
    ["vaginoplasty-surgeons",7],
    ["hematologist",1],
    ["hip-replacement-surgeon",1],
    ["ivf-specialist",1],
    ["knee-replacement-surgeon",1],
    ["laparoscopic-surgeon",2],
    ["gallstone-doctors",2],
    ["liver-specialist",1],
    ["maxillofacial-surgeon",1],
    ["nephrologist",2],
    ["neurologist",6],
    ["obstetrician",1],
    ["oncologist",6],
    ["orthopedic-doctor",5],
    ["acl-surgeons",5],
    ["carpal-tunnel-doctors",5],
    ["knee-surgeon",5],
    ["pediatrician",7],
    ["physiotherapist",1],
    ["plastic-surgeon",5],
    ["breast-implant-surgeons",5],
    ["breast-lift-surgeons",5],
    ["breast-reduction-surgeons",5],
    ["flap-surgery-doctors",5],
    ["gynecomastia-surgeons",5],
    ["labiaplasty-surgeons",5],
    ["liposuction-surgeons",5],
    ["rhinoplasty-surgeons",5],
    ["psychiatrist",2],
    ["psychologist",1],
    ["spine-surgeon",1],
    ["urologist",4],
    ["vascular-surgeon",2],
    ["diabetic-foot-ulcer-doctors",2],
    ["varicocele-surgeons",2]
]
  doctorFor = "Doctors"
  maxLen = 20
  response: any
  doctorSearch: any
  page = 0
  pageUrl = 'http://127.0.0.1:3000/user/doctors'
  headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  // apiURL = 'https://reqres.in/api/users?page=1&per_page=20'
  apiURL = 'http://127.0.0.1:3000/user/doctors'
  
    constructor(private http: HttpClient){
      this.pageUrl = 'http://127.0.0.1:3000/user/doctors/?';
      this.http.get(this.apiURL+"/?page=0", { 'headers': this.headers }).subscribe(data => {
            this.doctors = data;
            console.log(data)
          })
    }

    nextPage(){
      if (this.doctors.length > 19){
        this.page = this.page + 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.doctors = data;
          console.log(data)
        })
      }
    }

    previousPage(){
      if(this.page > 0){
        this.page = this.page - 1
        console.log(this.page)
        this.http.get(this.pageUrl+"page="+this.page.toString(), { 'headers': this.headers }).subscribe(data => {
          this.doctors = data;
          console.log(data)
        })
      }
    }
    
    changeData(name: any){
      this.doctorFor = name.charAt(0).toUpperCase()+name.slice(1);
      this.page = 0
      this.pageUrl = 'http://127.0.0.1:3000/user/doctors/category/?name='+name+'&';
      console.log(name)
      this.http.get(this.apiURL+"/category/?name="+name, { 'headers': this.headers }).subscribe(data => {
        this.doctors = data;
        console.log(data)
      })  
    }

    // filters(){

    // }

}
