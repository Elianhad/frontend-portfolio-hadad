import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDownloadURL, UploadTaskSnapshot } from 'firebase/storage';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() isInDashboard: boolean = false;
  formForPhoto: FormGroup;
  isFormActive: boolean = false;
  fotoperfil: string = '../../../assets/img/foto-perfil.jpg';
  pathImg!: File;
  newImageUrl: string = '';
  uploadTask!: UploadTaskSnapshot;
  isUploading: boolean = false;
  constructor(
    private uploadService: UploadImageServiceService,
    private formBuilder: FormBuilder,
    private estadosUI: EstadosUIService
  ) {
    this.formForPhoto = this.formBuilder.group({
      name: ['', Validators.compose([Validators.min(3), Validators.required])],
      job: [
        '',
        Validators.compose([
          Validators.min(3),
          Validators.required,
          Validators.max(20),
        ]),
      ],
      image: '',
    });
  }

  toggleForm(value: boolean) {
    this.isFormActive = value;
  }
  get image() {
    return this.formForPhoto.get('image');
  }
  get name() {
    return this.formForPhoto.get('name');
  }
  get job() {
    return this.formForPhoto.get('job');
  }

  async submitProfile($event: any) {
    $event.preventDefault();
    // TODO: add IProfile to structure and methods to uploading to database
  }
  async handleImage($event: any) {
    if ($event.target?.files && $event.target?.file[0]) {
      this.pathImg = $event.target.files[0];
    }
    this.uploadTask = await this.uploadService.updaloadImg(
      this.pathImg?.name,
      this.pathImg
    );
    const ref = this.uploadTask.ref;
    this.uploadTask.task
      .then((snapshot) => {
        this.isUploading = true;
        getDownloadURL(ref).then((path) => (this.newImageUrl = path));
      })
      .catch((error) => {
        console.log(error);
        // TODO: MANEJO DE ERRORES
      })
      .finally(() => {
        this.isUploading = false;
      });
  }
  onDeleteImg() {
    this.uploadService
      .deleteImg(this.uploadTask.ref)
      .then(() => (this.newImageUrl = ''))
  }
}
