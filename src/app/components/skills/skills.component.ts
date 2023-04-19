import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ISkills } from 'src/app/interface/ISkills';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { SkillServiceService } from 'src/app/service/skill-service.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Output()
  emitFormSkill: EventEmitter<boolean> = new EventEmitter();
  isUrlDashboard:boolean= false
  habilidades!: ISkills[]
  skills: string = 'skills';

  constructor( private stateService:EstadosUIService, private route:ActivatedRoute, private skillServ:SkillServiceService) {
  
  }
  ngOnInit():void{
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });

  }

  makeFormVisible(event: boolean): void {
    this.stateService.changeStateFormSkill(event)
  }
  getSkill() {
    this.skillServ.getAllSkill().subscribe( res => this.habilidades = res )
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
