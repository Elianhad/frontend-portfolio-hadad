import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadTaskSnapshot, getDownloadURL } from 'firebase/storage';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
import { ISkills } from 'src/app/interface/ISkills';
// TODO: add spinner uploading image
@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.css', '../../../bootstrap.min.css'],
})
export class FormSkillsComponent implements OnInit {
  formSkills: FormGroup;

  imgfile!: File;

  uploadTask!: UploadTaskSnapshot;
  filePathImg!: string;
  completeUpload: boolean = false;
  isUploading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: EstadosUIService,
    private uploadService: UploadImageServiceService,
    private portfolioService: PortfolioService
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

  ngOnInit(): void {}
  async onSubmitSkillForm($event: SubmitEvent) {
    //TODO: submit form
    $event.preventDefault;
    if (!this.formSkills.valid) return;
    const newSkills: ISkills = {
      name: this.formSkills.value.nameSkill,
      image: this.filePathImg,
      percentage: this.formSkills.value.percentage,
      id: Math.random(),
    };
    this.portfolioService.postSkill(newSkills);
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
        this.isUploading = true;
        getDownloadURL(ref).then((path) => (this.filePathImg = path));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.completeUpload = true;
        this.isUploading = false;
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
  }
}
