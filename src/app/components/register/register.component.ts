import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../_models/user';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.min(15), Validators.max(65)])],
      email: ['', Validators.compose([Validators.required, Validators.email])]
    });
  }

  isFieldValid(field: string) {
    return !this.registerForm.get(field).valid && this.registerForm.get(field).touched;
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.user = this.registerForm.value;
      console.log(this.user);
    }
  }

  ngOnInit() {
  }

}
