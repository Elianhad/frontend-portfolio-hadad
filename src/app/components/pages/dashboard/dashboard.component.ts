import { Component, OnInit } from '@angular/core';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../../bootstrap.min.css'],
})
export class DashboardComponent implements OnInit {
  isFormSkill: boolean = false;
  isFormEducation: boolean = false;

  constructor(private uiState: EstadosUIService) {}

  ngOnInit(): void {}
  stateChilFormEd(event: boolean) {
    this.isFormEducation = event;
  }
  stateChildFormSkill(event: boolean) {
    this.isFormSkill = event;
  }
}
