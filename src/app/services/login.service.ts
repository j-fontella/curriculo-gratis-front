import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "http://localhost:8081/login/";

  constructor(private httpClient : HttpClient, private router : Router) { }

  public cadastrarUsuario(body:any){
    let uri = this.apiUrl + "registrar/"
    return this.httpClient.post(uri,body)
  }


  public logarUsuario(body:any) {
    let uri = this.apiUrl + "on"
    return this.httpClient.post(uri, body).pipe(
      tap(
        (loginResponse) => (
          sessionStorage.setItem("ust" , JSON.stringify(loginResponse))
        )))
  }

  public getUsuarioLogado(){
      let userStatus = JSON.parse(<string>sessionStorage.getItem('ust'));
      if(!userStatus || !userStatus.token || !userStatus.prk){
        alert("Faça o login novamente")
        return this.router.navigate(['on'])
      }
      return userStatus
  }

  getUsuario(prk: any, token : any) {
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        "token" : token
      })
    }
    let uri = this.apiUrl + `getUsuario/${prk}`
    return this.httpClient.get(uri,httpOptions)
  }

  atualizar(body : any) {
    let uri = this.apiUrl + "atualizar"
    let usuarioLogado = this.getUsuarioLogado()
    body.prk = usuarioLogado.prk
    console.log(body)
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        "token" : usuarioLogado.token
      })
    }
    return this.httpClient.patch(uri,body,httpOptions);
  }
}
