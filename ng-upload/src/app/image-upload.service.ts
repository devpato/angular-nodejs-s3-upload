import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post('http://localhost:3000/api/v1/upload', imageForm);
  }
}
