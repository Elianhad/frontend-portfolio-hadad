import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { ISkills } from 'src/app/interface/ISkills';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isFormSkill: boolean = false;
  isFormEducation: boolean = false;
  itemEducationSelected!: IEducation
  itemSkillSelected!:ISkills
  isInDashboard: boolean = true
  
  constructor(private uiState: EstadosUIService) {}

  ngOnInit(): void {
    this.uiState.stateFE.subscribe(
      (state) => (this.isFormEducation = state.visibility)
    );
    this.uiState.stateSK.subscribe(
      (state) => (this.isFormSkill = state.visibility)
    );
  }
  receiveSelectedItemEdu(event:any) {
    this.itemEducationSelected = event;
  }
  receiveSelectedItemSkill(event: any) {
    this.itemSkillSelected = event;
  }
}
