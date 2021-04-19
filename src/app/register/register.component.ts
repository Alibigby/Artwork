import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  onSubmit(){
    console.log(123);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
}
