import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosUIService } from './estados-ui.service';
import { Observable, catchError, of } from 'rxjs';
import { IExperience } from '../interface/IExperience';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ExperienceServiceService {
  constructor(private http: HttpClient, private uiService: EstadosUIService) {}

  public getAllExp(): Observable<IExperience[] | any> {
    return this.http
      .get(environment.api_url_base + 'experiencia')
      .pipe(catchError(this.handleError<IExperience[]>('getAllExp', [])));
  }

  public addExp(experience: IExperience): void {
    this.http
      .post(environment.api_url_base + 'experiencia', experience)
      .pipe(catchError(this.handleError<any>('addExp')))
      .subscribe((res) => {
        this.uiService.showToast('Creado con éxito');
      });
  }
  public delExp(id: number) {
    this.http
      .delete(environment.api_url_base + `experiencia/del/${id}`)
      .pipe(catchError(this.handleError<any>('delExp')))
      .subscribe((res) => {
        this.uiService.showToast('Eliminado con éxito');
      });
  }
  public editExp(experience: IExperience) {
    console.log(experience);
    const { id } = experience;
    this.http
      .put(environment.api_url_base + `experiencia/editar/${id}`, experience)
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
  
