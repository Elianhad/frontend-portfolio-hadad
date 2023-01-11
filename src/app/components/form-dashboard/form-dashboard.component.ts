import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css']
})
export class FormDashboardComponent {
  @Input() paramsPage: string = ''
  

  formEducation:FormGroup | undefined
  formSkills:FormGroup | undefined
  formProjects:FormGroup | undefined
  constructor( private formBuilder:FormBuilder){
    this.formEducation = this.formBuilder.group({
      name: ['', Validators.max(20)],
      campus: ['', Validators.min(20)],
      // TODO: revisar logica para validar fecha
      date: ['', [Validators.required, Validators.toString]]
    })
    this.formSkills = this.formBuilder.group({
      name: ['', [Validators.required, Validators.max(20)]],
      image: ['', Validators.required],
      percentage: [Number, Validators.required]
    })
    }
}
