import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadTaskSnapshot, getDownloadURL } from 'firebase/storage';
import { IProject } from 'src/app/interface/IProject';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ProjectServiceService } from 'src/app/service/project-service.service';
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
    private stateService: EstadosUIService,
    private projectService:ProjectServiceService
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
    if (this.projectToEdit?.nameProject) {
      this.projectForm.patchValue({
        nameProject: this.projectToEdit.nameProject,
        description: this.projectToEdit.description,
        dateOfDevelop: this.projectToEdit.dateOfDevelop,
        linkTo: this.projectToEdit.linkTo,
        imageProject: this.projectToEdit.imageProject,
        skillsProject: this.projectToEdit.skillsProject,
      })
    }
  }

  onSubmit($event:any) {
    $event.preventDefault()
    if (!this.projectForm.valid) return;
    const newProject:IProject = {
      nameProject: this.projectForm.value.nameProject,
      description: this.projectForm.value.description,
      dateOfDevelop: this.projectForm.value.dateOfDevelop,
      linkTo: this.projectForm.value.linkTo,
      imageProject: this.filePathImg,
      skillsProject: this.projectForm.value.skillProject,
    }
    if (this.projectToEdit) {
      newProject.id = this.projectToEdit.id
      newProject.nameProject = newProject.nameProject ? newProject.nameProject : this.projectToEdit.nameProject
      newProject.description = newProject.description ? newProject.description : this.projectToEdit.description
      newProject.dateOfDevelop = newProject.dateOfDevelop ? newProject.dateOfDevelop : this.projectToEdit.dateOfDevelop
      newProject.linkTo = newProject.linkTo ? newProject.linkTo : this.projectToEdit.linkTo
      newProject.imageProject = newProject.imageProject ? newProject.imageProject : this.projectToEdit.imageProject
      newProject.skillsProject = newProject.skillsProject ? newProject.skillsProject : this.projectToEdit.skillsProject
      
      this.projectService.editProject(newProject)
      this.onCloseForm()
      this.projectToEdit = {
        nameProject: "",
        description: "",
        linkTo: "",
        imageProject: "",
        skillsProject: [],
      }
      return
    }
    this.projectService.addProject(newProject)
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
    this.projectForm.reset()
  }
}
