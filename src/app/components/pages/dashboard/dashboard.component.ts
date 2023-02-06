import { Component, OnInit } from '@angular/core';
import { EstadosUIService, State } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../../bootstrap.min.css'],
})
export class DashboardComponent implements OnInit {
  isFormSkill: boolean = false;
  isFormEducation:boolean= false

  constructor(private uiState: EstadosUIService) {}

  ngOnInit(): void {
    this.uiState.stateFE.subscribe( state => this.isFormEducation = state.visibility)
    this.uiState.stateSK.subscribe(state => this.isFormSkill = state.visibility)
  }
}
