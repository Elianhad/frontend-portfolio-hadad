import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { IExperience } from 'src/app/interface/IExperience';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ExperienceServiceService } from 'src/app/service/experience-service.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
  
export class ExperienceComponent implements OnInit {
  isFormActive: boolean = false;
  isUrlDashboard: boolean = false;
  elementToEditFrom!: IExperience
  experiences!: IExperience[] 
  
  constructor(private route: ActivatedRoute, private experienceService :ExperienceServiceService, private stateService:EstadosUIService) { }

  ngOnInit(): void {
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });
    this.getExperience()
    this.stateService.stateExp.subscribe(
      (state) => (this.isFormActive = state.visibility)
    );
  }
  private getExperience() {
    this.experienceService.getAllExp().subscribe((res)=> {
      this.experiences = res  
    })
  }
  openForm() {
    this.stateService.changeStateFormExp(true)
  }
  editar(experience:IExperience) {
    this.elementToEditFrom = experience
    this.openForm()
  }
  eliminar(id:any) {
    // eliminar 
    this.experienceService.delExp(id)
  }
}
