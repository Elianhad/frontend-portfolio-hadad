import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { EstadosUIService } from './estados-ui.service';
import { IProfile } from '../interface/IProfile';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http: HttpClient, private uiService:EstadosUIService) { }
  
  public getProfile() {
    return this.http.get(environment.api_url_base + 'user').pipe(catchError(this.handleError('getProfile', [])))
  }
  public putProfile(profile: IProfile) {
    console.log(profile)
    const { id } = profile
    return this.http.put(environment.api_url_base + `profile/editar/${id}`, profile).pipe(catchError(this.handleError('putProfile', [])))
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
