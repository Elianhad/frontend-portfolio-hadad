import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { IEducation } from 'src/app/interface/IEducation';
import { EducServiceService } from 'src/app/service/educ-service.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {
  education: string = 'education';
  educaciones$:Observable<any> = new Observable()
  isUrlDashboard: boolean = false;
  @Output() educationSelectedEmit:EventEmitter<IEducation> = new EventEmitter<IEducation>()

  constructor(
    // import service of states
    private edService:EducServiceService,
    private uiState: EstadosUIService,
    private route: ActivatedRoute,
    private cdr:ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {
    // subscribe to the state of visibility of form
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });
    this.getEducation()
    this.cdr.markForCheck()
  }

  makeFormVisibletoToAdd(): void {
    this.uiState.changeStateFormEd(true);
  }
  getEducation() {
    this.educaciones$ = this.edService.getAllEduc()
  }
  editar(seleccion: IEducation) {
    // emision de la selección al padre dashboard para pasarlo al form ¿opcciones???
    this.educationSelectedEmit.emit(seleccion)
    // visibilizar el formulario
    this.uiState.changeStateFormEd(true)
  }
  eliminar(event: any) {
    //  logica de eliminación a traves de service
    this.edService.delEduc(event)
  }
}
