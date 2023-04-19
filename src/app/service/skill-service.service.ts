import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosUIService } from './estados-ui.service';
import { Observable, of, catchError } from 'rxjs';
import { ISkills } from '../interface/ISkills';
@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
  url_api: string = 'http://localhost:8080/skills';
  constructor(private http: HttpClient, private uiService: EstadosUIService) {}

  public getAllSkill(): Observable<ISkills[] | any> {
    return this.http
      .get(this.url_api)
      .pipe(catchError(this.handleError<ISkills[]>('getAllSkill', [])));
  }
  public addSkill(skill: ISkills): void {
    this.http
      .post(this.url_api + '/create', skill )
      .pipe(catchError(this.handleError<any>('addSkill', [])))
      .subscribe((res) => {
        console.log(res);
        this.uiService.showToast("Se ha agregado correctamente")
      });
  }
  public delSkill(id: number | undefined) {
    if (id === undefined) {
      this.uiService.showToast("Hubo un error")
      return
    }
    this.http
      .delete(this.url_api + `/del/${id}`)
      .pipe(catchError(this.handleError<any>('delSkill', [])))
      .subscribe((res) => {
        console.log('Desde subscribe del', res);
      });
  }
  public editskill(skill: ISkills) {
    const { id } = skill
    this.http.put(this.url_api + `/edit/${id}`, skill).pipe(catchError(this.handleError<any>('editSkill', [])))
      .subscribe(res => {
      this.uiService.showToast("Ha sido modificado con éxito")
    })
     
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
