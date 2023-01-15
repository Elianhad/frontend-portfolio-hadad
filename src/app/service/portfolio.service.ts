import { Injectable } from '@angular/core';
import { ISkills } from '../interface/ISkills';
import { habilidades } from '../mocks/skills.mock';
import { IEducation } from '../interface/IEducation';
import { education } from '../mocks/education.mock';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  skills:ISkills[] | null = null
  educations:IEducation[] | null = null
  
  constructor() { }

  getSkills(){
    return this.skills = habilidades
  }
  getEducation(){
    return this.educations= education
  }
  deleteEducacion(id:number){
      console.log(id)
  }

}
