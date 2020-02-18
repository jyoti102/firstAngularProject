import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jyoti: FormGroup;

  constructor() { }

  ngOnInit() {
    this.jyoti = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.email
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
  }

}
