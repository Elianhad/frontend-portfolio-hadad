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

  skills:string = 'skills'
  isFormVisible:boolean = false


 constructor(infoPortfolio:PortfolioService) {
  this.habilidades = infoPortfolio.getSkills()
 }

 makeFormVisible(event:boolean):void{
  this.isFormVisible = event
  console.log(this.isFormVisible)

 }
 makeFormInvisible(event:boolean){
  this.isFormVisible = event
  console.log(this.isFormVisible)
 }
 editarSkill(event:any){
  // TODO: logica para enviar a formulario para edicion
  console.log(event);
 }
 eliminarHabilidad(event:any){
  console.log(event);
  // TODO: logica para borrar habilidad desde service
 }
}
