import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VideoUploaderComponent } from './components/video-uploader/video-uploader.component';
import { VideoListComponent } from './components/video-list/video-list.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'upload-video',
        component: VideoUploaderComponent
    },
    {
        path: 'videos',
        component: VideoListComponent
    },
    {
        path: '*',
        component: LoginComponent
    }
];
