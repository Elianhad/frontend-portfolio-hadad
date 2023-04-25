import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDownloadURL, UploadTaskSnapshot, StorageReference } from 'firebase/storage';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ProfileServiceService } from 'src/app/service/profile-service.service';
import { IProfile } from 'src/app/interface/IProfile';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
  
  /**
   * TODO:
   * reload auto tras modificar perfil
   */
export class HeroComponent implements OnInit {

  @Input() isInDashboard: boolean = false;
  formProfile: FormGroup;
  isFormActive: boolean = false;
  
  profile: IProfile = {
    name: '',
    image: '',
    profession: '',
  }
  // manage of image
  newImageUrl: string = '';
  imgfile!: File;
  uploadTask!: UploadTaskSnapshot;
  filePathImg!: string;
  completeUpload: boolean = false;
  isUploading: boolean = false;
  // default profile
  private profileDefault: IProfile = {
    name: 'Agrega tu nombre',
    image: '../../../assets/img/blank-profile.png',
    profession: 'Agrega a qué te dedicas',
  }
  constructor(
    private uploadService: UploadImageServiceService,
    private formBuilder: FormBuilder,
    private stateService: EstadosUIService,
    private profileService:ProfileServiceService
  ) {
    this.formProfile = this.formBuilder.group({
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
  ngOnInit(): void {
    this.getProfile()
  }
  private getProfile() {
    this.profileService.getProfile().subscribe((res:any) => {
      const respuesta = res[1].profile
      console.log(respuesta)
      this.checkProfileDataAndPutDefault(respuesta)
    })
  }
  private checkProfileDataAndPutDefault(profile: IProfile) {
    this.profile.id = profile.id
    this.profile.name = profile.name ?? this.profileDefault.name
    this.profile.image = profile.image ?? this.profileDefault.image
    this.profile.profession = profile.profession ?? this.profileDefault.profession
  }
  toggleForm(value: boolean) {
    this.isFormActive = value;
    if (!value) {
      this.formProfile.reset()
    }
  }
  get image() {
    return this.formProfile.get('image')
  }
  get name() {
    return this.formProfile.get('name');
  }
  get job() {
    return this.formProfile.get('job');
  }

  async submitProfile($event: any) {
    $event.preventDefault();
    // add IProfile to structure and methods to uploading to database
    if (!this.formProfile.valid) return
    const newProfile = {
      id: this.profile.id,
      name: this.formProfile.value.name,
      image: this.filePathImg ?? this.profile.image,
      profession: this.formProfile.value.job
    }
    this.profileService.putProfile(newProfile)
    this.getProfile()
    this.toggleForm(false)
  }
  async handleImage($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      this.imgfile = $event.target.files[0];
    }
    this.uploadTask = await this.uploadService.updaloadImg(
      this.imgfile?.name,
      this.imgfile
    );
    const ref = this.uploadTask.ref;
    this.uploadTask.task
      .then(() => {
        this.isUploading = true;
        this.stateService.showToast('La imagen se está cargando');
        getDownloadURL(ref).then((path) => (this.filePathImg = path));
      })
      .catch((err) => {
        console.log(err);
        this.stateService.showToast('Hubo un error de carga');
      })
      .finally(() => {
        this.completeUpload = true;
        this.isUploading = false;
        this.stateService.showToast('Imagen cargada correctamente');
      });
  }
  onDeleteImg() {
    this.uploadService
      .deleteImg(this.uploadTask.ref)
      .then(() => (this.filePathImg = ''))
      .finally(() =>  this.stateService.showToast('Imagen eliminada') )
  }
}
