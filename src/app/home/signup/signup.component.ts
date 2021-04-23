import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlatformDetectorService } from './../../core/plataform/platform-detector.service';
import { SignupService } from './service/signup.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './model/new-user';
import { UserNotTakenValidatorService } from './service/user-not-taken-validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UserNotTakenValidatorService ]
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput', {static: false}) emailInput: ElementRef<HTMLInputElement>

    constructor(
      private signUpService: SignupService,
      private router: Router,
      private userNotTakenValidatorService: UserNotTakenValidatorService,
      private platformDetectorService: PlatformDetectorService,
      private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });
      this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
    }

    signUp() {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signUpService
      .signup(newUser)
      .subscribe(
          () => this.router.navigate(['']),
          err => console.log(err)
      );
    }

}
