import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[HomeComponent ]
})

export class NavbarComponent {

  showLogin:boolean;
  showSignup:boolean;
  showLogout:boolean;
  public user = 'Guest';
  apiUrl = 'http://127.0.0.1:3000/user/'
  headers= new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  loginForm = new FormGroup({email: new FormControl(Validators.required),
    password: new FormControl(Validators.required)} ) 

  constructor(private home: HomeComponent, private cookieService: CookieService,private http: HttpClient) {
    var cookie = this.cookieService.get('userData');
    var temp;
    console.log(cookie)
    if (cookie){
      temp = JSON.parse(cookie);
    }
    if (temp.user != ""){
      this.user = temp.user;
      this.home.setUser(temp.user);
      this.showLogout = true;
      this.showLogin = false;
      this.showSignup = false;
    }
    else{
      this.user = 'Guest';
      this.home.setUser("Guest");
      this.showLogout = false;
      this.showLogin = true;
      this.showSignup = true;
    }

  }


  toggle(){
    console.log('toggle', this.home.review);
    this.home.review = !this.home.review;
    console.log('toggle', this.home.review);
  }

  async print(){
    await this.http.post(this.apiUrl+"login", {email:"anandarul47@gmail.com", password:"anand"},{ 'headers': this.headers }).subscribe((res) => {
      var data = JSON.parse(JSON.stringify(res))
      console.log(data.userData);
      if (data.status == "success"){
        this.cookieService.set('userData', JSON.stringify({"user": data.userData}));
        this.user = data.userData;
        this.showLogout = true;
        this.showLogin = false;
        this.showSignup = false;
      }
      else{
        this.cookieService.set('userData', JSON.stringify({"user": ""}));
        this.user = "Guest";
        this.showLogout = false;
        this.showLogin = true;
        this.showSignup = true;
      } 
    })
    console.log(this.cookieService.getAll());
  }

  async logout(){
    this.cookieService.set('userData', JSON.stringify({"user": ""}));
    this.user = "Guest";
    this.showLogout = false;
    this.showLogin = true;
    this.showSignup = true;
    alert("Logged out successfully");
  }

  public async login(e: string, p: string){
    await this.http.post(this.apiUrl+"login", {email: e, password:p},{ 'headers': this.headers }).subscribe((res) => {
      var data = JSON.parse(JSON.stringify(res))
      console.log(data.userData);
      if (data.status == "success"){
        this.cookieService.set('userData', JSON.stringify({"user": data.userData}));
        this.user = data.userData;
        this.showLogout = true;
        this.showLogin = false;
        this.showSignup = false;
      }
      else{
        this.cookieService.set('userData', JSON.stringify({"user": ""}));
        this.user = "Guest";
        this.showLogout = false;
        this.showLogin = true;
        this.showSignup = true;
      } 
      console.log(this.cookieService.getAll());
      window.location.reload();
    })
    // console.log(this.cookieService.getAll());
    // window.location.reload();
  }

  signup(e: any, p: any, u: any) {
    console.log(e, p, u);
    this.http.post(this.apiUrl+"signup", {email: e, password:p, userName:u},{ 'headers': this.headers }).subscribe((res) => {
      var data = JSON.parse(JSON.stringify(res));
      console.log(data);
      if (data.status == "success"){
        alert("Signup Successful");
      }
      else if (data.status == "present"){
        alert("Signup Failed, User with this email already exists");
      }
    })
  }

}
