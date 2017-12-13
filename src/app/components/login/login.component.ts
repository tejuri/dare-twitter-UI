import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginCredentials } from './login';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    ngForm : NgForm;
    loginCredentials = new LoginCredentials();
    invalidUsername : any = '';
    invalidPassword: any = '';
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) { 
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    isFieldValid(field: string) {
        return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
    }

    onSubmit() {
        if(this.loginForm.valid){
            console.log(this.loginForm.value);
        }
    }

    ngOnInit() {
    }

    submit() {
        if (this.loginCredentials.username === '') {
            this.invalidUsername = 'is-invalid';
        }

        if (this.loginCredentials.password === '') {
            this.invalidPassword = 'is-invalid';
        }
    }

    login() {}

}
