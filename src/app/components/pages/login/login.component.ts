import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

import { IUsuario } from 'src/app/interface/IUsuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',  '../../../../bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  email:string = ''
  password:string = ''
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  onSubmit(event:any){
    this.email = event.email
    this.password = event.password
    this.auth.login(this.email, this.password)
  }
}
