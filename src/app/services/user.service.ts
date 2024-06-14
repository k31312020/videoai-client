import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }
  login(user: Partial<{username: string, password: string}>): Observable<{response: {token: string, message?: string}}> {
    return this.http.post<{response: {token: string, message?: string}}>(`${this.baseUrl}/v1/login`, user)
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
