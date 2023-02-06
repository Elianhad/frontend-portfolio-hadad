import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ISkills } from 'src/app/interface/ISkills';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../../bootstrap.min.css'],
})
export class SkillsComponent implements OnInit {
  @Output()
  emitFormSkill: EventEmitter<boolean> = new EventEmitter();
  isUrlDashboard:boolean= false
  habilidades: ISkills[] | null = null;

  skills: string = 'skills';

  constructor(private infoPortfolio: PortfolioService, private stateService:EstadosUIService, private route:ActivatedRoute) {
  
  }
  ngOnInit():void{
    this.habilidades = this.infoPortfolio.getSkills();
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });

  }

  makeFormVisible(event: boolean): void {
    this.stateService.changeStateFormSkill(event)
  }
  
  editarSkill(event: any) {
    // TODO: logica para enviar a formulario para edicion
    console.log(event);
  }
  eliminarHabilidad(event: any) {
    console.log(event);
    // TODO: logica para borrar habilidad desde service
  }
}
