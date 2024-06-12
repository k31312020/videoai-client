import { createAction, props } from '@ngrx/store';

export const getVideos = createAction('[Video List Component] get videos');
export const fetchFailed = createAction('[Video List Component] get videos');
export const videosFetched = createAction('[Video List Component] videos fetched', props<{videos: []}>());