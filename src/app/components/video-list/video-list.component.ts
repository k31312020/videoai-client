import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  constructor(private videoService: VideoService) {}
  baseUrl = "http://localhost:5000/uploads/"
  videos:any = []
  ngOnInit() {
   this.videoService.getVideos()?.subscribe((res:any) => {
      this.videos = res.response.videos
   })
  }
}
