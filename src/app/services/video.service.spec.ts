import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
