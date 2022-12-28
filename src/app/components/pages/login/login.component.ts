import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',  '../../../../bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  email :string = ""
  password:string = ""
  constructor(private auth:AuthService){}
  
  ngOnInit(){

  }
  onSubmit(f:NgForm){
   this.auth.login(f.value.email, f.value.password) 
  }
}
