import { Injectable } from '@angular/core';
import { storage } from '../../firebase';
import { deleteObject, ref, StorageReference, uploadBytesResumable,  } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadImageServiceService {
  imageUrlRef!: String;
  progress: number | null = null;
  loading: boolean = false;
  storageReference!:StorageReference
  constructor() { }
  
  async updaloadImg(fileName: string | undefined, file: File) {
    const storageRefImg = ref(storage, `images/${fileName}`)
    return (await uploadBytesResumable(storageRefImg, file))
  }
  deleteImg(ref:StorageReference){
    return deleteObject(ref)
  }

}
