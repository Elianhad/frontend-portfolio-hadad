import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { IEducation } from 'src/app/interface/IEducation';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../../bootstrap.min.css'],
})
export class EducationComponent implements OnInit {
  education: string = 'education';
  educaciones: IEducation[] | null = null;
  isUrlDashboard: boolean = false;
  itemAEditar: IEducation | null = null;

  constructor(
    private portfolioInfo: PortfolioService,
    private uiState: EstadosUIService,
    private route: ActivatedRoute
  ) {
    this.educaciones = portfolioInfo.getEducation();
  }
  ngOnInit(): void {
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });
  }

  makeFormVisible(): void {
    this.uiState.changeStateFormEd(true);
  }

  eliminarEducacion(event: any) {
    // TODO: realizar logica de eliminación a traves de service
    console.log(event);
  }
}
