import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ArgProgLogo: string = '../../../assets/img/argentina-programa-logo.png';
  transition: string = '';
  display: string = 'd-none';

  onClick() {
    if (this.transition === 'menu-transition') {
      this.transition = '';
      this.display = 'd-none';
    } else {
      this.transition = 'menu-transition';
      this.display = '';
    }
  }
}
