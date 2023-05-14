import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { ISkills } from 'src/app/interface/ISkills';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ProfileServiceService } from 'src/app/service/profile-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isFormSkill: boolean = false;
  isFormEducation: boolean = false;
  itemEducationSelected!: IEducation;
  itemSkillSelected!: ISkills;
  isInDashboard: boolean = true;
  isToast: boolean = false;
  msg!: string;

  constructor(private uiState: EstadosUIService, private profileService:ProfileServiceService) {}

  ngOnInit(): void {
    this.uiState.stateFE.subscribe(
      (state) => (this.isFormEducation = state.visibility)
    );
    this.uiState.stateSK.subscribe(
      (state) => (this.isFormSkill = state.visibility)
    );
    this.uiState.toast$.subscribe((res: any) => {
      this.msg = res;
      this.isToast = true;
      setTimeout(() => {
        this.isToast = false;
      }, 1500);
    });
  }

  receiveSelectedItemEdu(event: any) {
    this.itemEducationSelected = event;
  }
  receiveSelectedItemSkill(event: any) {
    this.itemSkillSelected = event;
  }
}
