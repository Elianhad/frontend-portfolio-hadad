import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadImageServiceService {
  imageUrlRef!: String;
  progress: number | null = null;
  loading: boolean = false;
  constructor() {}
  updaloadImg(fileName: string | undefined, file: File) {
    const storageRef = ref(Storage, fileName);
    const taskUpload = uploadBytesResumable(storageRef, file);
    this.loading = true;
    taskUpload.on(
      'state_changed',
      (snapshot) =>
        (this.progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      (e) => new Error('Hubo un error'),
      () =>
        getDownloadURL(taskUpload.snapshot.ref)
          .then((downloadURL) => (this.imageUrlRef = downloadURL))
          .finally(() => (this.loading = false))
    );
  }
  getImageUrl() {
    return this.imageUrlRef;
  }
}
