import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { IEducation } from '../interface/IEducation';
import { EstadosUIService } from './estados-ui.service';
@Injectable({
  providedIn: 'root',
})
export class EducServiceService {
  url_api: string = 'http://localhost:8080/educations';
  constructor(private http: HttpClient, private uiService: EstadosUIService) {}

  public getAllEduc(): Observable<IEducation[] | any> {
    return this.http
      .get(this.url_api)
      .pipe(catchError(this.handleError<IEducation[]>('getAllEduc', [])));
  }
  public addEduc(education: IEducation): void {
    this.http
      .post(this.url_api + '/create', education )
      .pipe(catchError(this.handleError<any>('addEduc', [])))
      .subscribe((res) => {
        console.log(res);
      });
  }
  public delEduc(id: number) {
    this.http
      .delete(this.url_api + `/del/${id}`)
      .pipe(catchError(this.handleError<any>('delEduc', [])))
      .subscribe((res) => {
        console.log(res)
        // TODO: showToast
      });
  }
  public editEduc(education: IEducation) {
    const { id } = education
    this.http.put(this.url_api + `/edit/${id}`, education).pipe(catchError(this.handleError<any>('editEduc', [])))
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
