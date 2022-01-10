import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

import { take } from 'rxjs/operators';
import { UserNameValidator } from 'src/app/core/validators/username-validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userNameValidator: UserNameValidator
  ) { }

  public get c(): {[key: string]: AbstractControl} {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: [
        '',
        Validators.required,
        this.userNameValidator.alreadyExists.bind(this.userNameValidator)
      ],
      userPass: [
        '',
        Validators.required
      ]
    })
  }

  public onSubmit(): void {
    if (this.signupForm.valid) {
      this.userService.signup(this.signupForm.value)
        .pipe(
          take(1)
        )
        .subscribe((response: HttpResponse<any>) => {
          console.log(`${JSON.stringify(response.body)}`);
        });
    }
  }
}
