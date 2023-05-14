import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IExperience } from 'src/app/interface/IExperience';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ExperienceServiceService } from 'src/app/service/experience-service.service';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css'],
})
export class FormExperienceComponent implements OnInit {
  @Input()
  isFormActive: boolean = false;
  @Input()
  experienceToEdit!: IExperience;
  form!: FormGroup;

  constructor(
    private stateUI: EstadosUIService,
    private experienceService: ExperienceServiceService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    if (this.experienceToEdit) {
      this.form.patchValue({
        titulo: this.experienceToEdit.title,
        descripcion: this.experienceToEdit.description,
        fecha: this.experienceToEdit.date,
      })
    }
    console.log(this.experienceToEdit)
  }
  onClickClose() {
    this.stateUI.changeStateFormExp(false);
    this.form.reset();
  }
  submitForm($event: any) {
    if (!this.form.valid) return;
    if (this.experienceToEdit) {
      this.experienceToEdit = {
        title: this.form.value.titulo,
        description: this.form.value.descripcion,
        date: this.form.value.fecha,
      };
      this.experienceService.editExp(this.experienceToEdit);
      this.onClickClose();
    }
    const newExperience = {
      title: this.form.value.titulo,
      description: this.form.value.descripcion,
      date: this.form.value.fecha,
    };
    this.experienceService.addExp(newExperience);
    this.onClickClose();
  }
}
