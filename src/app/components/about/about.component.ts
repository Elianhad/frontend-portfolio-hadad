import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interface/IProfile';
import { ProfileServiceService } from 'src/app/service/profile-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Input() isInDashboard: boolean = false;
  isFormActive: boolean = false;
  aboutText: String =
    'Agrega una descripción. Has saber por qué deben contratarte.';
  profile!: IProfile;
  about: string = '';
  constructor(private profileService: ProfileServiceService) { }
  ngOnInit() {
    this.getProfile()
  }
  private getProfile() {
    this.profileService.getProfile().subscribe((res:any) => {
      const respuesta = res[0]?.profile
      if (respuesta === undefined) return
      this.profile = respuesta
      console.log(respuesta)
      this.checkProfileDataAndPutDefault(respuesta)
    })
  }
  private checkProfileDataAndPutDefault(profile: IProfile) {
    this.aboutText = profile.about ?? this.aboutText;
  }
  toggleForm(value: boolean) {
    this.isFormActive = value;
  }
  submitAbout() {
    this.aboutText = this.about
    this.profile.about = this.about;
    this.profileService.putProfile(this.profile);
    this.isFormActive = false
    this.about = '';
  }
}
