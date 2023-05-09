import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { IExperience } from 'src/app/interface/IExperience';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  isFormActive: boolean = false;
  isUrlDashboard: boolean = false;
  elementToEditFrom!: IExperience
  experiences: IExperience[] = [{
    id: 0,
    titulo: "Desarrollador de software en casa",
    descripcion: "Creacción de app, y demás cosas",
    fecha: new Date(Date.now())
  }]
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });    
  }
  getExperience(): IExperience[] {
    return this.experiences;
  }
  openForm() {
    this.isFormActive = true;
  }
  editar(experience:IExperience) {
    this.openForm()
    this.elementToEditFrom = experience
  }
  eliminar(id:number | undefined) {
    // eliminar 
  }
  makeFormVisibletoToAdd() {
    this.isFormActive = true
  }
}
