import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  profileForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  teste() {
    alert("você logou no melhor app do brasil")
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email : ["", [Validators.email, Validators.required]],
      password : ["", [Validators.minLength(8), Validators.required]]
    })
  }
}
