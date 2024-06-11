import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  login(user: {username: string, password: string}): Observable<{response: {token: string, message?: string}}> {
    return this.http.post<{response: {token: string, message?: string}}>("http://localhost:5000/v1/login", user)
  }
  isAuthenticated(): boolean {
    const token = sessionStorage.getItem("token")
    if (token) {
      return true
    } else {
      return false
    }
  }
}
