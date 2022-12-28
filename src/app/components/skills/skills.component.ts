import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/interface/ISkills';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css',  '../../../bootstrap.min.css']
})
export class SkillsComponent {
  habilidades: ISkills[] | null = null

 constructor(infoPortfolio:PortfolioService) {
  this.habilidades = infoPortfolio.getSkills()
 }
}
