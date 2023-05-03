import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IProfile } from 'src/app/interface/IProfile';
import { ProfileServiceService } from 'src/app/service/profile-service.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() isInDashboard: boolean = false;
  isFormActive: boolean = false;
  aboutText: String = 'Agrega una descripción. Has saber por qué deben contratarte.'
  profile!:IProfile
  about: FormControl = new FormControl(
    '',
  );
  subject$ = new Subject();
  constructor(private profileService: ProfileServiceService) { }
  ngOnInit() {
    this.subject$.subscribe({
      next:() => this.getProfile()
    })
    
  }
  getProfile() {
    return this.profileService.getProfile().subscribe((res:any) => {
      const respuesta = res[0]?.profile
      this.profile = respuesta
      console.log(respuesta.about);
      if (respuesta.about) {
        this.aboutText = respuesta
      }
    })
  }
  toggleForm(value: boolean) {
    this.isFormActive = value;
  }
  submitAbout($event: any) {
    console.log($event.target.value)
    //this.profile.about = $event.target.value
    //this.profileService.putProfile(this.profile);
    this.toggleForm(false)
    this.about.reset()
  }
}
