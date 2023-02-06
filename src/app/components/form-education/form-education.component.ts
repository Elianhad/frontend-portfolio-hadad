import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosUIService } from 'src/app/service/estados-ui.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css', '../../../bootstrap.min.css'],
})
export class FormEducationComponent implements OnInit {
  formEducation: FormGroup = new FormGroup({});

  constructor(private formbuilder: FormBuilder, private stateService:EstadosUIService) {}

  ngOnInit(): void {
    this.formEducation = this.formbuilder.group({
      nameEd: [
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
  onSubmitEducationForm(event: any) {
    this.formEducation.setValue(event);
  }
  makeFormInvisible(){
    this.stateService.changeStateFormEd(false)
  }
}
