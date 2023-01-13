import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-form-dashboard',
  templateUrl: './form-dashboard.component.html',
  styleUrls: ['./form-dashboard.component.css', '../../../bootstrap.min.css']
})
export class FormDashboardComponent implements OnInit{
  @Input() formSelect:string = ''
  @Output() stateFormIsInvisible:EventEmitter<boolean>= new EventEmitter()
  formEducation:FormGroup = new FormGroup({})
  formSkills:FormGroup = new FormGroup({})

  urlName:string='';
  isDashboard:boolean = false
  
  constructor( private formBuilder:FormBuilder, private rutaActiva:ActivatedRoute ){}


  ngOnInit(): void {
    this.formEducation = this.formBuilder.group({
      nameEd: ['', Validators.max(20)],
      campus: ['', Validators.min(20)],
      // TODO: revisar logica para validar fecha
      date: ['', Validators.required]
    })
    this.formSkills = this.formBuilder.group({
      nameSkill: ['', [Validators.compose([Validators.required, Validators.max(20)])]],
      image: ['', Validators.required],
      percentage: [Number, Validators.required]
    })
    this.rutaActiva.url.subscribe((value:UrlSegment[])=>{
      if(value[0]){
        this.urlName = value[0].path
        this.isDashboard = this.urlName === 'dashboard'
      }
    })
    
  }

  onSubmitEducationForm(event:Event){
    event.preventDefault
    console.log(this.formEducation.value)
  }
  onSubmitSkillForm(event:Event){
    event.preventDefault
    console.log(this.formSkills.value)
  }
  makeFormInvisible(){
    this.stateFormIsInvisible.emit(false)
  }
}

