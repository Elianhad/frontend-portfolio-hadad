import { Component } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css',  '../../../bootstrap.min.css']
})
export class EducationComponent {
 educaciones: IEducation[] | null = null
 constructor(portfolioInfo:PortfolioService){
  this.educaciones = portfolioInfo.getEducation()
 }
}
