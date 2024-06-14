import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploaderComponent } from './video-uploader.component';
import { VideoService } from '../../services/video.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VideoUploaderComponent', () => {
  let component: VideoUploaderComponent;
  let fixture: ComponentFixture<VideoUploaderComponent>;
  const videoService = jasmine.createSpyObj("VideoService", ["uploadVideo"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoUploaderComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: VideoService,
          useValue: videoService
        }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show upload button when there is no file', (() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeFalsy();
  }));

  it('should call uploadVideo when upload is clicked', (() => {
    component.selected = {file: new File([''], "test")}
    fixture.detectChanges();
    let button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    button.dispatchEvent(new Event('click', {}))
    expect(videoService.uploadVideo).toHaveBeenCalled();
  }));
});
