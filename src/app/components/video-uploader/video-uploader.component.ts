import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-video-uploader',
  standalone: true,
  imports: [
    MatFormFieldModule,
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
