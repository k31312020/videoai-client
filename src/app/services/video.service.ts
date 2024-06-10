import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos() {
    const token = sessionStorage.getItem("token")
    if (token) {
      const headers = new HttpHeaders({"Authorization": token});
      return this.http.get("http://localhost:5000/v1/videos", {headers})
    } else {
      return
    }
  }
}
