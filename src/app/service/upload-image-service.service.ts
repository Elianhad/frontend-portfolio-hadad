import { Injectable } from '@angular/core';
import { Storage } from '../../firebase';
import { deleteObject, ref, StorageReference, uploadBytesResumable,  } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadImageServiceService {
  imageUrlRef!: String;
  progress: number | null = null;
  loading: boolean = false;
  constructor() { }
  
  async updaloadImg(fileName: string | undefined, file: File) {
    const storageRef = ref(Storage, fileName);
    return (await uploadBytesResumable(storageRef, file))
  }
  deleteImg(ref:StorageReference){
    return deleteObject(ref)
  }

}
