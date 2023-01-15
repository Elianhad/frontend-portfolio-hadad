import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../../../bootstrap.min.css'],
})
export class EducationComponent implements OnInit {
  education: string = 'education';
  isFormVisible: boolean = false;
  educaciones: IEducation[] | null = null;

  itemAEditar:IEducation | null = null

  constructor(private portfolioInfo: PortfolioService) {
    this.educaciones = portfolioInfo.getEducation();
  }
  ngOnInit(): void {}

  makeFormVisible(event: boolean): void {
    this.isFormVisible = !this.isFormVisible;
  }
  makeFormInvisible(event: boolean) {
    this.isFormVisible = !this.isFormVisible;
    
  }
  editarEducacion(event: any) {
    //  evento al formulario para setValue y edición
    this.isFormVisible = !this.isFormVisible;
    const educacionAEditar:any = this.educaciones?.filter( ed => ed.id === event)
    this.itemAEditar = educacionAEditar?.[0]
  }
  eliminarEducacion(event: any) {
    // TODO: realizar logica de eliminación a traves de service
    console.log(event);
  }
}
