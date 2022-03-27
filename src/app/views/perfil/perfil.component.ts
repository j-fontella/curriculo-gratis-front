import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {UtilsService} from "../../services/utils.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  private usuarioLogado : any = null;



  constructor(private loginService : LoginService, private utils : UtilsService, private router : Router) {

  }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.getUsuarioLogado();
    let requisicao = this.loginService.getUsuario(this.usuarioLogado.prk, this.usuarioLogado.token);
    this.utils.processarRequisicaoPreenchimento(requisicao, "Erro ao processar a operação, recarregue a tela, tente novamente e caso persista contate o suporte")
  }

  atualizarPerfil() {
    let jsonRequisicao = this.utils.getJsonRequisicao(['endereco'])
    let requisicao = this.loginService.atualizar(jsonRequisicao);
    this.utils.processarRequisicao(requisicao, "Usuário atualizado com sucesso", "atualização de usuário.", "menu");
  }

  getEnderecoPorCEP() {
      this.utils.formataDadosEndereco()
  }

}
