import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadTaskSnapshot, getDownloadURL } from 'firebase/storage';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
import { ISkills } from 'src/app/interface/ISkills';
import { SkillServiceService } from 'src/app/service/skill-service.service';
@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.css'],
})
export class FormSkillsComponent implements OnInit {
  formSkills: FormGroup;
  deleteIcon:string = "../../../assets/icons8-delete.png"
  NO_IMAGE:string = "../../../assets/img/no-image.webp"
  @Input()
  elementToEdit: ISkills = {
      nameSkill: '',
      imageSkill: '',
      percentageSkill: ''
  }

  imgfile!: File;
  uploadTask!: UploadTaskSnapshot;
  filePathImg!: string;
  completeUpload: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: EstadosUIService,
    private uploadService: UploadImageServiceService,
    private skillServ: SkillServiceService
  ) {
    this.formSkills = this.formBuilder.group({
      nameSkill: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      imagen: ['', Validators.required],
      percentage: [
        Number,
        Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(100),
        ]),
      ],
    });
  }

  ngOnInit(): void {
    if (this.elementToEdit?.nameSkill.length > 1) {
      this.formSkills.patchValue({
        nameSkill: this.elementToEdit.nameSkill,
        imagen: this.elementToEdit.imageSkill,
        percentage: this.elementToEdit.percentageSkill
      })

    }
  }
  async onSubmitSkillForm($event: SubmitEvent) {
    //TODO: submit form
    $event.preventDefault;
    if (!this.formSkills.valid) return;
    const newSkills: ISkills = {
      nameSkill: this.formSkills.value.nameSkill,
      imageSkill: this.filePathImg,
      percentageSkill: this.formSkills.value.percentage,
    };
    if (this.elementToEdit?.nameSkill.length > 1) {
      newSkills.id = this.elementToEdit.id
      newSkills.imageSkill= newSkills.imageSkill ? newSkills.imageSkill : this.elementToEdit.imageSkill 
      this.skillServ.editskill(newSkills)
      this.makeFormInVisible()
      return
    }
    this.skillServ.addSkill(newSkills);
    this.makeFormInVisible()
  }
  get nameSkill() {
    return this.formSkills.get('nameSkill');
  }
  get percentage() {
    return this.formSkills.get('percentage');
  }
  get imagen() {
    return this.formSkills.get('imagen');
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
      .finally(() => console.log('se completo eliminación'));
  }
  makeFormInVisible() {
    this.stateService.changeStateFormSkill(false);
    this.formSkills.reset()
    this.elementToEdit.imageSkill = ''
    this.elementToEdit.nameSkill = ''
    this.elementToEdit.percentageSkill= ''
  }
}
