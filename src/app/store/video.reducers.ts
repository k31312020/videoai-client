import { createReducer, on } from '@ngrx/store';
import { fetchFailed, getVideos, videosFetched } from './video.actions';
import { Video } from '../types/video';

export const initialState: {videos: Video[]} ={videos: []};

export const videoReducers = createReducer(
  initialState,
  on(getVideos, (state) => (initialState)),
  on(videosFetched, (state, {videos}) => ({videos})),
  on(fetchFailed, (state) => (initialState)),
);