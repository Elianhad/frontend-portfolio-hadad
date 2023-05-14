import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { IProject } from 'src/app/interface/IProject';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects!: IProject[];
  @Input()
  isInDashboard: boolean = false;
  isFormActive!: boolean
  editProjectFrom!: IProject;
  constructor(
    private serviceProject: ProjectServiceService,
    private stateService: EstadosUIService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.stateService.stateProject.subscribe(
      (state) => (this.isFormActive = state.visibility)
    );
    this.cdr.detectChanges();

    this.getAllProjects();
  }
  private getAllProjects() {
    this.serviceProject.getAllProjects().subscribe((res) => {
      this.projects = res;
    });
    this.cdr.markForCheck()
  }
  editar(project: IProject) {
    this.editProjectFrom = project;
    this.openFormProject()
  }
  eliminar(id: any) {
    this.serviceProject.delProyect(id);
    this.cdr.markForCheck()
  }
  openFormProject() {
    this.stateService.changeStateProject(true)
  }
}
