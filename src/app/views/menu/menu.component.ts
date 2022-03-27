import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private usuarioLogado : any;

  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.getUsuarioLogado()
  }

  imprimirPersonalizado() {
  }

  imprimirCurriculo() {
  }

  redirecionarPerfil() {
    this.router.navigate(['perfil'])
  }
}
