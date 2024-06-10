import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';
import { DropzoneMaterialModule } from '@ngx-dropzone/material';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-video-uploader',
  standalone: true,
  imports: [
    MatFormFieldModule,
    DropzoneCdkModule,
    DropzoneMaterialModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './video-uploader.component.html',
  styleUrl: './video-uploader.component.scss'
})
export class VideoUploaderComponent {
  handleDragOver() {

  }
  handleDrop() {

  }

  onFileSelected() {
    
  }
}
