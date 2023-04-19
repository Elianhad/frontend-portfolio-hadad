import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isFormSkill: boolean = false;
  isFormEducation: boolean = false;
  itemEducationSelected: IEducation | null = null;
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
  receiveSelectedItem(event:any) {
    console.log(event);
    this.itemEducationSelected = event;
  }
}
