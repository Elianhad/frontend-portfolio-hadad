import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subject } from 'rxjs';
import { IEducation } from 'src/app/interface/IEducation';
import { EducServiceService } from 'src/app/service/educ-service.service';
import { EstadosUIService } from 'src/app/service/estados-ui.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit {
  education: string = 'education';
  @Input()
  educaciones: IEducation[] = [{
    name: '',
    campus: '',
  }];
  subject$ = new Subject<void>();
  isUrlDashboard: boolean = false;

  @Output()
  educationSelectedEmit: EventEmitter<IEducation> =
    new EventEmitter<IEducation>();
 
  constructor(
    // import service of states
    private edService: EducServiceService,
    private uiState: EstadosUIService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // subscribe to the state of visibility of form
    this.route.url.subscribe((value: UrlSegment[]) => {
      this.isUrlDashboard = value[0].path === 'dashboard';
    });
    this.getEducation()
    this.cdr.detectChanges()
  }

  makeFormVisibletoToAdd(): void {
    this.uiState.changeStateFormEd(true);
  }
  getEducation() {
    this.edService.getAllEduc().subscribe((res) => {
      this.educaciones = res;
      this.subject$.next() // emite el evento para que el cambio sea detectado
    });
  }
  editar(seleccion: IEducation) {
    // emision de la selección al padre dashboard para pasarlo al form ¿opcciones???
    this.educationSelectedEmit.emit(seleccion);
    // visibilizar el formulario
    this.uiState.changeStateFormEd(true);
    // avisar al componente que traiga nueva peticion del servidor para re-renderizar
    this.subject$.next();
  }
  eliminar(event: any) {
    //  logica de eliminación a traves de service
    this.edService.delEduc(event);
    this.subject$.next();
  }
}
