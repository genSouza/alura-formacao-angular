import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private newUserService: NewUserService) {}

  userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) => this.newUserService.checkUserExists(userName)),
        map((userExists) => (userExists ? { existingUser: true } : null)),
        first()
      );
    };
  }
}
