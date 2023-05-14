import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  isToast: boolean = false
  msg!:string 
 
  constructor(private auth: AuthService, private uiState: EstadosUIService) { }
  
  ngOnInit() {
    this.uiState.toast$.subscribe( (res:any) => {
      this.msg = res
      this.isToast = true
      setTimeout(() => {
        this.isToast = false
      }, 3000 )
      })
  }
  onSubmit(event:any){
    this.email = event.email
    this.password = event.password
    this.auth.login(this.email, this.password)
 
  }
}
