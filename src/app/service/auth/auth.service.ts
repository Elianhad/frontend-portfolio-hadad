import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';
import { EstadosUIService } from '../estados-ui.service';
import { catchError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = "http://localhost:8080/login";
  private token!:string;
  constructor(private http : HttpClient, private router: Router, private estadosUI: EstadosUIService) { }
  
  login(email:string, password:string){
    //  logica de inicio de sesion con res de JWT
    this.http.post(this.API_URL, { email, password }).pipe(catchError((error: HttpErrorResponse) => {
      this.estadosUI.showToast(error.error);
      return of() // Aquí se accede al mensaje de error devuelto por el servidor
    })).subscribe((res:any) => {
      this.token = res.token
      localStorage.setItem('token', this.token)
      this.router.navigate(["/dashboard"])
    })
  }
  public isLogin(): boolean {
    return localStorage.getItem('token') !== undefined
  }

}
