import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''
  password: string = ''
 
  constructor( private auth : AuthService ) {}
 
  onSubmit(event:any){
    this.email = event.email
    this.password = event.password
    this.auth.login(this.email, this.password)
  }
}
