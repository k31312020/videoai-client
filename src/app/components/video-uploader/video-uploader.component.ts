import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { VideoService } from '../../services/video.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpEventType } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-video-uploader',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  templateUrl: './video-uploader.component.html',
  styleUrl: './video-uploader.component.scss'
})
export class VideoUploaderComponent {
  selected: {file?: File, name?: string} = {}
  filename = new FormControl('')
  progress = 0

  constructor(private videoService: VideoService, private snackbar: MatSnackBar) {}

  handleDragOver() {
    
  }
  handleDrop() {
    
  }

  onFileSelected(e: Event) {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files.length) {
      this.selected = {
        file: files[0],
        name: files[0].name
      }
      this.filename.setValue(this.selected.name || '')
    }
  }

  upload() {
    this.selected.name = this.filename.value || ''
    if (this.selected.file) {
      this.videoService.uploadVideo({file: this.selected.file, name: this.selected.name})?.subscribe((res:any) => {
        if (res.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * res.loaded / res.total)
        } 
        if (res.type === HttpEventType.Response) {
          this.snackbar.open("File uploaded succefully", "close", {duration: 3000});
          this.selected = {}
          this.progress = 0
        }
      })
    }
  }
}
