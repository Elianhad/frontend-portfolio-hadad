import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interface/IUsuario';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  @Output() emit:EventEmitter<IUsuario> = new EventEmitter()

  formLogin:FormGroup
  
  constructor(private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.min(6), Validators.pattern('')])]
      
    })
  }
  ngOnInit(): void {
      
  }
  get email (){
    return this.formLogin.get('email')
  }
  get password (){
    return this.formLogin.get('password')
  }
  onSubmit(event:Event){
    // TODO: realizar logica de login
    event.preventDefault()
    if(this.formLogin.valid){
      this.emit.emit(this.formLogin.value)
    }
  }
}
