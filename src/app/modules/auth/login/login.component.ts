import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  profileForm!: FormGroup
  @ViewChild("passinput") passinput!: any

  constructor(private fb: FormBuilder) {}

  teste() {
    alert("você logou no melhor app do brasil")
  }

  toggleVisibility(element: HTMLInputElement) {
    element.type === "password" ? element.type = "text" : element.type = "password";
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email : ["", [Validators.email, Validators.required]],
      password : ["", [Validators.minLength(8), Validators.required]]
    })
  }
}
