import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../bootstrap.min.css']
})
export class ContactComponent {
  inputs:{} = {}
  constructor(private formBuild:FormBuilder){
    
  }
  formContacto:FormGroup= this.formBuild.group({
    name: "",
    email: ""
  })

  // TODO: crear funcion para captar los datos y enviarlos al servicio

  onSubmit(values:{}){
    
    console.log(values)
  }
  
}
