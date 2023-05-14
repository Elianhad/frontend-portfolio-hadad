import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { EstadosUIService } from './estados-ui.service';
import { IProject } from '../interface/IProject';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  constructor(private http: HttpClient, private uiService: EstadosUIService) {}

  public getAllProjects(): Observable<IProject[] | any> {
    return this.http
      .get(environment.api_url_base + 'projects')
      .pipe(catchError(this.handleError<IProject[]>('getAllProjects')));
  }

  public addProject(project: IProject): void {
    this.http
      .post(environment.api_url_base + 'project', project)
      .pipe(catchError(this.handleError<any>('addProject')))
      .subscribe((res) => {
        console.log(res);
        this.uiService.showToast('Creado con éxito');
      });
  }
  public delProyect(id: number) {
    this.http
      .delete(environment.api_url_base + `project/del/${id}`)
      .pipe(catchError(this.handleError<any>('delExp')))
      .subscribe((res) => {
        this.uiService.showToast('Eliminado con éxito');
      });
  }
  public editProject(project: IProject) {
    const { id } = project;
    this.http
      .put(environment.api_url_base + `project/editar/${id}`, project)
      .pipe(catchError(this.handleError<any>('editExp')))
      .subscribe((res) => {
        this.uiService.showToast('Ha sido modificado con éxito');
      });
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // send error to infraestructure
      this.uiService.showToast(error.error);

      console.log(`${operation} falló:`, error);
      //let the app keep running  an empty result
      return of(result as T);
    };
  }
}
