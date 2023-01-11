import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css']
})
export class FormDashboardComponent implements OnInit{
  @Input() formSelect:string = ''

  formEducation:FormGroup = new FormGroup({})
  formSkills:FormGroup = new FormGroup({})
  constructor( private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.formEducation = this.formBuilder.group({
      nameEd: ['', Validators.max(20)],
      campus: ['', Validators.min(20)],
      // TODO: revisar logica para validar fecha
      date: ['', [Validators.required, Validators.toString]]
    })
    this.formSkills = this.formBuilder.group({
      nameSkill: ['', [Validators.compose([Validators.required, Validators.max(20)])]],
      image: ['', Validators.required],
      percentage: [Number, Validators.required]
    })
  }

  get nameEd():string {
    return this.formEducation.value('nameEd')
  }
  get campus():string {
    return this.formEducation.value('campus')
  }
  get date():Date {
    return this.formEducation.value('date')
  }
  get nameSkill():string{
    return this.formSkills.value('nameSkill')
  }
  get image():string{
    return this.formSkills.value('image')
  }
  get percentage():number{
    return this.formSkills.value('percentage')
  }

  onSubmitEducationForm(event:Event){
    event.preventDefault
    console.log(this.formEducation.value)
  }
  onSubmitSkillForm(event:Event){
    event.preventDefault
    console.log(this.formSkills.value)
  }
}

