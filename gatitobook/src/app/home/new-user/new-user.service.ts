import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  createNewUser(user: NewUser){
    return this.http.post('http://localhost:3000/user/signup', user);
  }

  checkUserExists(userName: string) {
    return this.http.get(`http://localhost:3000/user/exists/${userName}`);
  }
}
