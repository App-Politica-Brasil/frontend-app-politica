import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  public imprime() {
    alert("voce se registrou no site mais brabo que tem")
    
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email : ["", [Validators.email, Validators.required]],
      password : ["", [Validators.minLength(8), Validators.required]],
      repeatPassword : ["", [Validators.required]]
    })
  }
}
