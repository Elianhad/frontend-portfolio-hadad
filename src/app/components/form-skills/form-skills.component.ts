import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.css', '../../../bootstrap.min.css'],
})
export class FormSkillsComponent implements OnInit {
  formSkills: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private stateService: EstadosUIService
  ) {
    this.formSkills = this.formBuilder.group({
      nameSkill: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.min(5),
            Validators.max(30),
          ]),
        ],
      ],
      image: ['', [Validators.required]],
      percentage: [Number, [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onSubmitSkillForm(event: any) {
    this.formSkills.setValue(event);
  }
  makeFormInVisible() {
    this.stateService.changeStateFormSkill(false);
  }
}
