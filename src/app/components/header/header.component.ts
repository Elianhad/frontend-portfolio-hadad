import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ArgProgLogo: string = '../../../assets/img/argentina-programa-logo.png';
  transition: string = '';
  display: string = 'd-none';
  isLogin:boolean = false
  constructor(private auth: AuthService, private router:Router){}
  ngOnInit(): void {
      this.isLogin = this.auth.isLogin()
  }
  onClick() {
    if (this.transition === 'menu-transition') {
      this.transition = '';
      this.display = 'd-none';
    } else {
      this.transition = 'menu-transition';
      this.display = '';
    }
  }
  onClickCloseSession() {
    this.auth.logout()
    this.router.navigate(['/home'])

  }
}
