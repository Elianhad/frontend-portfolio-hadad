import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';
import { EstadosUIService } from '../estados-ui.service';
import { catchError, of } from 'rxjs';
import { Buffer } from 'buffer';
@Injectable({
  providedIn: 'root',
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
    })).subscribe((res: any) => {
      if (localStorage.getItem('token') !== undefined) {
        localStorage.removeItem('token')
      }
      this.token = res.token
      localStorage.setItem('token', this.token)
      this.router.navigate(["/dashboard"])
    })
  }
  logout() {
    localStorage.removeItem('token')
  }
  public isLogin(): boolean {
    const token = localStorage.getItem('token')
    let isToken:boolean = false
    if (token) {
      isToken = this.isTokenExpired(token)  
    }
    return isToken
  }
  private isTokenExpired(token:any):boolean {
    const parts: string = token.split('.')
    const decodedToken = Buffer.from(parts[1], 'base64').toString()
    const decodedTOJson = JSON.parse(decodedToken)
  
    const dateOfToken = new Date(decodedTOJson.exp).valueOf()
    const dateNow = Date.now()
    const dateToCompare = new Date(dateNow).valueOf()
    
    return dateOfToken < dateToCompare
  }
 
}
