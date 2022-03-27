import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../services/utils.service";
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";

@Component({
  selector: 'app-gerar-curriculo',
  templateUrl: './gerar-curriculo.component.html',
  styleUrls: ['./gerar-curriculo.component.scss']
})
export class GerarCurriculoComponent implements OnInit {
  private experienciaCadastrada = 0;
  private idiomaCadastrado = 0;
  private qualificacaoCadastrada = 0;

  constructor(private utils : UtilsService) { }

  ngOnInit(): void {
  }

  gerar() {

  }
  public getEnderecoPorCEP() {
    this.utils.formataDadosEndereco();
  }

  setVisibilidadeRemoverExperiencia(){
    console.log(this.experienciaCadastrada)
    let p = document.querySelector(`#removerExperiencia`)
    let display = this.experienciaCadastrada == 0 ? "display: none" : "display: block";
    // @ts-ignore
    p.setAttribute("style", display)
  }

  setVisibilidadeRemoverIdioma(){
    console.log(this.experienciaCadastrada)
    let p = document.querySelector(`#removerIdioma`)
    let display = this.idiomaCadastrado == 0 ? "display: none" : "display: block";
    // @ts-ignore
    p.setAttribute("style", display)
  }

  setVisibilidadeRemoverQualificacao(){
    let p = document.querySelector(`#removerQualificacao`)
    let display = this.qualificacaoCadastrada == 0 ? "display: none" : "display: block";
    // @ts-ignore
    p.setAttribute("style", display)
  }

  removerExperiencia() {
    let div = document.querySelector(`#experiencia${this.experienciaCadastrada-1}`)
    if(div){
      div.remove();
      this.experienciaCadastrada--;
      this.setVisibilidadeRemoverExperiencia()
    }
  }

  addInput(div : any, contador : any, id : string, label: string, type : string = "text", colwidth : string = "col-12", textArea = false){
    let ilabel = document.createElement("label");
    ilabel.htmlFor = `${id}${contador}`;
    ilabel.textContent = `${label}:`;
    let inptarea = textArea ? "textarea" : "input";
    let input : any = document.createElement(inptarea);
    input.id = `${id}${contador}`;
    input.classList.add(colwidth);
    if(!textArea)
      input.type = type;
    div.appendChild(ilabel);
    div.appendChild(input);
  }

  addQualificacao(){
    let divQualificacao = document.querySelector('#qualificacao');
    let div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("mb-3");
    div.id = `qualificacao${this.qualificacaoCadastrada}`
    div.setAttribute("style", "border: 1px solid black")
    // @ts-ignore
    divQualificacao.appendChild(div);
    this.addInput(div, this.qualificacaoCadastrada, "qualificacaoCadastrada", "Qualificação")
    this.qualificacaoCadastrada++
    this.setVisibilidadeRemoverQualificacao()
  }

  removerQualificacao() {
    let div = document.querySelector(`#qualificacao${this.qualificacaoCadastrada-1}`)
    if(div){
      div.remove();
      this.qualificacaoCadastrada--;
      this.setVisibilidadeRemoverQualificacao();
    }
  }

  addIdioma(){
    let divIdiomas = document.querySelector('#idioma');
    let div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("mb-3");
    div.id = `idioma${this.idiomaCadastrado}`
    div.setAttribute("style", "border: 1px solid black")
    // @ts-ignore
    divIdiomas.appendChild(div);
    this.addInput(div, this.idiomaCadastrado, "idiomaCadastrado", "Idioma")
    this.idiomaCadastrado++
    this.setVisibilidadeRemoverIdioma()
  }

  removerIdioma() {
    let div = document.querySelector(`#idioma${this.idiomaCadastrado-1}`)
    if(div){
      div.remove();
      this.idiomaCadastrado--;
      this.setVisibilidadeRemoverIdioma();
    }
  }

  addExperiencia() {
    let divExperiencias = document.querySelector('#experiencia');
    let div = document.createElement("div");
    div.classList.add("col-12");
    div.classList.add("mb-3");
    div.id = `experiencia${this.experienciaCadastrada}`
    div.setAttribute("style", "border: 1px solid black")

    // @ts-ignore
    divExperiencias.appendChild(div);
    this.addInput(div, this.experienciaCadastrada, "empresa", "Empresa")
    this.addInput(div,this.experienciaCadastrada, "cargo", "Cargo")
    this.addInput(div,this.experienciaCadastrada, "dataInicial", "Data inicial", "date")
    this.addInput(div,this.experienciaCadastrada, "dataFinal", "Data final", "date")
    this.addInput(div,this.experienciaCadastrada, "experiencia", "Detalhes", "text", "col-12", true)

    this.experienciaCadastrada++;
    this.setVisibilidadeRemoverExperiencia()
  }


}
