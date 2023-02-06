import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  itemAEditar:IEducation | null = null

  constructor(private portfolioInfo: PortfolioService, private uiState:EstadosUIService) {
    this.educaciones = portfolioInfo.getEducation();
  }
  ngOnInit(): void {}

  makeFormVisible(): void {
    this.uiState.changeStateFormEd(true)
  }

  editarEducacion(event: any) {
    //  evento al formulario para setValue y edición
    const educacionAEditar:any = this.educaciones?.filter( ed => ed.id === event)
    this.itemAEditar = educacionAEditar?.[0]
  }
  eliminarEducacion(event: any) {
    // TODO: realizar logica de eliminación a traves de service
    console.log(event);
  }
}
