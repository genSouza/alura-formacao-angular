import { UserExistsService } from './user-exists.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { lowerCaseValidator } from './lowerCase.validator';
import { userPasswordValidator } from './user-password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService: UserExistsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, lowerCaseValidator],
          [this.userExistsService.userAlreadyExists()],
        ],
        password: ['', [Validators.required, Validators.minLength(7)]],
      },
      {
        validators: [userPasswordValidator],
      }
    );
  }

  createNewUser() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.createNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (err) => {
          console.log(err);
        }
      );
    }else {
      console.log('form is invalid');
    }
  }
}
