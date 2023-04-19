import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { IEducation } from 'src/app/interface/IEducation';
import { EducServiceService } from 'src/app/service/educ-service.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css'],
})
export class FormEducationComponent implements OnInit {
  formEducation: FormGroup = new FormGroup({});

  constructor(
    private formbuilder: FormBuilder,
    private stateService: EstadosUIService,
    private educServ:EducServiceService
  ) {}

  ngOnInit(): void {
    this.formEducation = this.formbuilder.group({
      name: [
        '',
        [
          Validators.compose([
            Validators.min(5),
            Validators.max(30),
            Validators.required,
          ]),
        ],
      ],
      campus: [
        '',
        [
          Validators.compose([
            Validators.min(5),
            Validators.max(30),
            Validators.required,
          ]),
        ],
      ],
      date: [Date, Validators.required],
    });
  }
  onSubmitEducationForm(event: Event) {
    event.preventDefault;
    if (!this.formEducation.valid) return;
    const newEducation: IEducation = {
      name: this.formEducation.value.name,
      campus: this.formEducation.value.campus,
      date: this.formEducation.value.date,
    };
    console.log(newEducation);
    
    this.educServ.addEduc(newEducation)
    this.formEducation.reset()
    this.stateService.changeStateFormEd(false)
  }
  makeFormInvisible() {
    this.stateService.changeStateFormEd(false);
  }
}
