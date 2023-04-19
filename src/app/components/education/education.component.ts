import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { IEducation } from 'src/app/interface/IEducation';
import { EducServiceService } from 'src/app/service/educ-service.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: string = 'education';
  educaciones: IEducation[] | null = null;
  isUrlDashboard: boolean = false;
  @Output() educationSelectedEmit:EventEmitter<IEducation> = new EventEmitter()

  constructor(
    // import service of states
    private edService:EducServiceService,
    private uiState: EstadosUIService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // subscribe to the state of visibility of form
    this.getEducation()
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });
  }

  makeFormVisible(): void {
    this.uiState.changeStateFormEd(true);
  }
  getEducation() {
    this.edService.getAllEduc().subscribe(ed => {
      console.log(ed)
      this.educaciones = ed
    })
  }
  editar(seleccion: IEducation) {
    
  }
  eliminar(event: any) {
    //  logica de eliminación a traves de service
    this.edService.delEduc(event)
  }
}
