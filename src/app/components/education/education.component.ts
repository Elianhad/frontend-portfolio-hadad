import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css',  '../../../bootstrap.min.css']
})
export class EducationComponent implements OnInit {

 education:string = 'education'
 isFormVisible:boolean = false
 educaciones: IEducation[] | null = null
 
 constructor(private portfolioInfo:PortfolioService){
  this.educaciones = portfolioInfo.getEducation()
 }
 ngOnInit(): void {
     
 }

 makeFormVisible(event:boolean):void{
  this.isFormVisible = event
 }
 makeFormInvisible(event:boolean){
  this.isFormVisible = event
 }
 editarEducacion(event:any){
  // TODO: enviar evento al formulario para setValue y edición
  console.log(event)
 }
 eliminarEducacion(event:any){ 
  // TODO: realizar logica de eliminación a traves de service
  console.log(event)
 }

}
