import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css',  '../../../bootstrap.min.css']
})
export class HeroComponent {
  fotoperfil :string = '../../../assets/img/foto-perfil.jpg'
}
