import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { getVideos } from '../../store/video.actions';
import { Observable } from 'rxjs';
import { Video } from '../../types/video';
import { environment } from '../../../environments/environment';

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
  baseUrl = environment.staticUrl
  ngOnInit() {
    this.store.dispatch(getVideos())
  }
}
