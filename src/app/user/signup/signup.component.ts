import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: [
        '',
        Validators.required
      ],
      userPass: [
        '',
        Validators.required
      ]
    })
  }

  public onSubmit(): void {
    
  }
}
