import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { UploadImageServiceService } from 'src/app/service/upload-image-service.service';
@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.css', '../../../bootstrap.min.css'],
})
export class FormSkillsComponent implements OnInit {
  formSkills: FormGroup = new FormGroup({});
  nameSkill!: FormControl;
  imagen!: FormControl;
  percentage!: FormControl;

  imgfile!: File;
  constructor(
    private formBuilder: FormBuilder,
    private stateService: EstadosUIService,
    private uploadService: UploadImageServiceService
  ) {
    this.formSkills = this.formBuilder.group({
      nameSkill: '',
      imagen: '',
      percentage: Number,
    });
  }

  ngOnInit(): void {}
  onSubmitSkillForm(event: any) {
    this.uploadService.updaloadImg(this.imgfile?.name, this.imgfile);
  }
  handleImage($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      this.imgfile = $event.target.files[0];
    }
  }

  makeFormInVisible() {
    this.stateService.changeStateFormSkill(false);
  }
}
