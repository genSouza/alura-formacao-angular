import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Comments } from './comment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  findComment(id: number): Observable<Comments> {
    return this.http.get<Comments>(`${API}/photos/${id}/comments`);
  }

  includeComment(id: number, commentText: string): Observable<Comment> {
    return this.http.post<Comment>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
