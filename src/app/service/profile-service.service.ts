import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { EstadosUIService } from './estados-ui.service';
import { IProfile } from '../interface/IProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  API_URL:string = "http://localhost:8080/"

  constructor(private http: HttpClient, private uiService:EstadosUIService) { }
  
  public getProfile() {
    return this.http.get(this.API_URL + 'user').pipe(catchError(this.handleError('getProfile', [])))
  }
  public putProfile(profile: IProfile) {
    const { id } = profile
    return this.http.put(this.API_URL + `profile/editar/${id}`, profile).pipe(catchError(this.handleError('putProfile', [])))
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
