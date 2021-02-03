import { Component } from '@angular/core';
import { ImageUploadService } from './image-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageObj: File;
  imageUrl: string;

  constructor(private imageUploadService: ImageUploadService) {}

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    console.log(this.imageObj,'hello')
    this.imageUploadService.imageUpload(imageForm).subscribe(res => {
      console.log(res)
      this.imageUrl = res['image'];
      console.log(this.imageUrl)
    });
  }
}
