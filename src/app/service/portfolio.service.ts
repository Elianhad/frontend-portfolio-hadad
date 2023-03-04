import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ISkills } from '../interface/ISkills';
import { IEducation } from '../interface/IEducation';

import { habilidades } from '../mocks/skills.mock';
import { education } from '../mocks/education.mock';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  skills: ISkills[] | null = null;
  educations: IEducation[] | null = null;

  constructor() {}
  getEducation() {
    return (this.educations = education);
  }
  postEducation(data: IEducation) {
    console.log(data);
  }
 
  deleteEducacion(id: number) {
    console.log(id);
  }
  putEducacion(id: number) {
    console.log(id);
  }
  getSkills() {
    return (this.skills = habilidades);
  }
  postSkill(data: ISkills) {
    console.log(data);
  }
  deleteSkill(id: number) {
    console.log(id);
  }
  putSkill(id: number) {
    console.log(id);
  }
}
