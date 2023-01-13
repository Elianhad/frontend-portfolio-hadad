import { Component } from '@angular/core';
import { IEducation } from 'src/app/interface/IEducation';
import { PortfolioService } from 'src/app/service/portfolio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css',  '../../../bootstrap.min.css']
})
export class EducationComponent {

 education:string = 'education'
 isFormVisible:boolean = false
 educaciones: IEducation[] | null = null
 constructor(portfolioInfo:PortfolioService){
  this.educaciones = portfolioInfo.getEducation()
 }

 makeFormVisible(event:boolean):void{
  this.isFormVisible = event
  console.log(this.isFormVisible)

 }
 makeFormInvisible(event:boolean){
  this.isFormVisible = event
  console.log(this.isFormVisible)
 }

}
