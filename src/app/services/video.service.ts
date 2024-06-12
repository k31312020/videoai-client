import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getVideos() {
    const token = sessionStorage.getItem("token")
    if (token) {
      const headers = new HttpHeaders({ "Authorization": token });
      return this.http.get(`${this.baseUrl}/v1/videos`, { headers })
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
      return this.http.post(`${this.baseUrl}/v1/upload`, formdata, {
        headers, reportProgress: true,
        observe: 'events'
      })
    } else {
      return
    }
  }
}
