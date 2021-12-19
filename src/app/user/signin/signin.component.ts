import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signinForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
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

  public onSubmit(): void {
    if (this.signinForm.valid) {
      this.userService.signin(this.signinForm.value)
        .pipe(
          take(1)
        )
        .subscribe((response: HttpResponse<any>) => {
          console.log(`${JSON.stringify(response.body)}`);
        });
    }
  }

}
