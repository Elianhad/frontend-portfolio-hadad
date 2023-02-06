import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISkills } from 'src/app/interface/ISkills';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css', '../../../bootstrap.min.css'],
})
export class SkillsComponent {
  @Output()
  emitFormSkill: EventEmitter<boolean> = new EventEmitter();

  habilidades: ISkills[] | null = null;

  skills: string = 'skills';

  constructor(infoPortfolio: PortfolioService, private stateService:EstadosUIService) {
    this.habilidades = infoPortfolio.getSkills();
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
