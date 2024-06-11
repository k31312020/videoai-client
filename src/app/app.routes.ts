import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VideoUploaderComponent } from './components/video-uploader/video-uploader.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'upload',
                component: VideoUploaderComponent
            },
            {
                path: '',
                component: VideoListComponent
            },
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '*',
        component: HomeComponent
    }
];
