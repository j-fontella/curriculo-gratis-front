import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {UtilsService} from "../../../services/utils.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-on',
  templateUrl: './on.component.html',
  styleUrls: ['./on.component.scss']
})
export class OnComponent implements OnInit {

  public operacao = true;
  private textoBotao = "Entrar";
  private textoLink = "Criar nova conta.";

  constructor(
    private loginService: LoginService,
    private utils : UtilsService,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    let camposRegistro = document.querySelectorAll(".campoRegistro");
    for (let i = 0; i < camposRegistro.length; i++) {
      camposRegistro[i].setAttribute("style", "display: none");
    }
  }

  public acaoBotao(){
    this.operacao ? this.logarUsuario() : this.registrarUsuario();
  }

  public alterarTextoRegistro(): void {
    this.operacao = !this.operacao;
    this.atualizarTextos();
    let labelRegistro = document.querySelector("#labelRegistro");
    if (labelRegistro) {
      labelRegistro.textContent = this.textoLink;
    }
    let botaoRegistro = document.querySelector("#botaoLogin span");
    if (botaoRegistro) {
      botaoRegistro.textContent = this.textoBotao;
    }
    let msgErro = document.querySelector("#msgErro") as HTMLElement;
    msgErro.innerHTML = "";

  }

  private atualizarTextos() {
    this.textoBotao = this.operacao ? "Entrar" : "Registrar";
    this.textoLink = this.operacao ? "Criar nova conta." : "Fazer Login";
    let camposRegistro = document.querySelectorAll(".campoRegistro");
    for (let i = 0; i < camposRegistro.length; i++) {
      let display = this.operacao ? "display: none" : "display: block";
      camposRegistro[i].setAttribute("style", display);
    }
  }

  esqueciSenha() {

  }

  getEnderecoPorCEP() {
    this.utils.formataDadosEndereco();
  }

  private logarUsuario() {
    // @ts-ignore
    let body = this.utils.getJsonRequisicao([]);
    let requisicao = this.loginService.logarUsuario(body)
    this.utils.processarRequisicao(requisicao, null, "login.", "menu");
  }



  public registrarUsuario(){
      let body = this.utils.getJsonRequisicao(['endereco']);
      let requisicao = this.loginService.cadastrarUsuario(body)
      this.utils.processarRequisicao(requisicao, "Usuário registrado com sucesso", "registro de usuário.", null)
    }


}
