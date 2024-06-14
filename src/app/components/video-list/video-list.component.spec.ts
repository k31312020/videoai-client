import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';

import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { getVideos } from '../../store/video.actions';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoListComponent],
      providers: [provideMockStore({initialState: {video: {videos: []}}})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dispatch on init and should have no videos', () => {
    let store = TestBed.inject(Store)
    let storeSpy = spyOn(store, 'dispatch');
    component.ngOnInit()
    expect(storeSpy).toHaveBeenCalled()
    component.videos$.subscribe(videos => {
      expect(videos.length).toBe(0);
    })
  });

  it('should call dispatch on init with getVideos', () => {
    let store = TestBed.inject(Store)
    let storeSpy = spyOn(store, 'dispatch');
    component.ngOnInit()
    expect(storeSpy).toHaveBeenCalledWith(getVideos())
  });
});
