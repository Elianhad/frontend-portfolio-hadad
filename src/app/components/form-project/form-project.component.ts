import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadTaskSnapshot, getDownloadURL } from 'firebase/storage';
import { IProject } from 'src/app/interface/IProject';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css'],
})
export class FormProjectComponent {
  projectForm!: FormGroup;
  @Input()
  projectToEdit!: IProject;

  imgfile!: File;
  uploadTask!: UploadTaskSnapshot;
  filePathImg!: string;
  completeUpload: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadImageServiceService,
    private stateService: EstadosUIService
  ) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      nameProject: ['', Validators.required],
      description: ['', Validators.required],
      imageProject: [File, Validators.required],
      dateOfDevelop: ['', Validators.required],
      linkTo: ['', Validators.required],
      skillsProject: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.projectForm.valid) return;
    console.log(this.projectForm.value);
    this.onCloseForm()
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
      .then((snapshot) => {
        this.stateService.showToast('La imagen se está cargando');
        getDownloadURL(ref).then((path) => (this.filePathImg = path));
      })
      .catch((err) => {
        console.log(err);
        this.stateService.showToast('Hubo un error de carga');
      })
      .finally(() => {
        this.completeUpload = true;
        this.stateService.showToast('Imagen cargada correctamente');
      });
  }
  onDeleteImg() {
    this.uploadService
      .deleteImg(this.uploadTask.ref)
      .then(() => (this.filePathImg = ''))
      .finally(() => console.log('Se completo eliminación'));
  }
  
  onCloseForm() {
   this.stateService.changeStateProject(false)
  }
}
