import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VideoService } from '../../services/video.service';
import { Store } from '@ngrx/store';
import { getVideos } from '../../store/video.actions';
import { Observable } from 'rxjs';
import { Video } from '../../types/video';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  videos$: Observable<Video[]> = this.store.select(state => state.video.videos);
  constructor(private store: Store<{ video: {videos: Video[]} }>) {}
  baseUrl = "http://localhost:5000/uploads/"
  videos:any = []
  ngOnInit() {
    this.store.dispatch(getVideos())
  //  this.videoService.getVideos()?.subscribe((res:any) => {
  //     this.videos = res.response.videos
  //  })
  }
}
