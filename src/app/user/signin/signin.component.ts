import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.signinForm.controls;
  }
  
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
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

  public onSubmit(): void {}

}
