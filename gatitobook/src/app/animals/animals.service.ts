import { environment } from './../../environments/environment';
import { TokenService } from './../authentication/token.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal, Animals } from './animals';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';
@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${userName}/photos`);
  }

  findByID(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }
}
