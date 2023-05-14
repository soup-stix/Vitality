import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from 'express';
import { AuthenticationService } from '../authentication.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { zip } from 'rxjs';

@Component({
  selector: 'app-signup-model',
  templateUrl: './signup-model.component.html',
  styleUrls: ['./signup-model.component.css'],
})
export class SignupModelComponent {
  signupForm = new FormGroup({email: new FormControl(),
    password: new FormControl(),
    username: new FormControl()}) 

  constructor(private navbar: NavbarComponent) { 
  }

  signup(){
    var val = this.signupForm.value;
    this.navbar.signup(val.email, val.password, val.username);
  }
  
}
