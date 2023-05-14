import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login-model',
  templateUrl: './login-model.component.html',
  styleUrls: ['./login-model.component.css'],
  providers:[NavbarComponent]
})
export class LoginModelComponent {

  loginForm = new FormGroup({email: new FormControl(),
    password: new FormControl()}) 

  constructor(private router: Router, private auth: AuthenticationService, private navbar: NavbarComponent) { }
  login() {
      const val = this.loginForm.value;
      this.navbar.login(val.email, val.password);
  }
}
