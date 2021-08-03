import { environment } from './../../../environments/environment';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  createNewUser(user: NewUser){
    return this.http.post(`${API}/user/signup`, user);
  }

  checkUserExists(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`);
  }
}
