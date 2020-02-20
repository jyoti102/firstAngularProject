import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jyoti: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.jyoti = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('[A-Za-z]+@[A-Za-z]+[\.][A-Za-z]{3,4}') //("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20}')
      ]),
    });
  }

  validateForm() {
    console.log(this.jyoti.valid)
    if(this.jyoti.valid)
    this.router.navigateByUrl('/home')
  }

}
