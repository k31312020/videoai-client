import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos() {
    const token = sessionStorage.getItem("token")
    if (token) {
      const headers = new HttpHeaders({ "Authorization": token });
      return this.http.get("http://localhost:5000/v1/videos", { headers })
    } else {
      return new Observable<Object>()
    }
  }

  uploadVideo(video: { file: File, name?: string }) {
    const token = sessionStorage.getItem("token")
    if (token) {
      const headers = new HttpHeaders({ "Authorization": token });
      let data = new FormData()
      data.append("filename", video.name || '')
      data.append("file", video.file)
      let formdata = data
      return this.http.post('http://localhost:5000/v1/upload', formdata, {
        headers, reportProgress: true,
        observe: 'events'
      })
    } else {
      return
    }
  }
}
