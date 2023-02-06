import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
  
  login(email:string, password:string){
    // TODO: hacer logica de inicio de sesion con JWT
    console.log(email, password)
    
  }
}
