import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string){
    return this.http.post('/api/login', {email, password})
    // this is just the HTTP call, 
    // we still need to handle the reception of the token
    // .shareReplay();
  }

  // private setSession(authResult: any) {
  //   const expiresAt = moment().add(authResult.expiresIn,'second');

  //       localStorage.setItem('id_token', authResult.idToken);
  //       localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  // } 

}
function moment() {
  throw new Error('Function not implemented.');
}

