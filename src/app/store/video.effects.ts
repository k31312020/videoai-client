import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { VideoService } from '../services/video.service';
import * as videoActions from './video.actions';

export const loadVideos = createEffect(
  (actions$ = inject(Actions), videoService = inject(VideoService)) => {
    return actions$.pipe(
      ofType(videoActions.getVideos),
      exhaustMap(() =>
        videoService.getVideos().pipe(
          map((res:any) => videoActions.videosFetched({videos: res?.response?.videos || []})),
          catchError((error: { message: string }) =>
            of(videoActions.fetchFailed())
          )
        )
      ));
  },
  { functional: true }
);