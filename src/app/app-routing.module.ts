import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnComponent} from "./views/login/on/on.component";
import {GerarCurriculoComponent} from "./views/gerar-curriculo/gerar-curriculo.component";
import {PerfilComponent} from "./views/perfil/perfil.component";
import {MenuComponent} from "./views/menu/menu.component";

const routes: Routes = [
  {
    path : 'on',
    component : OnComponent
  },
  {
    path : 'gerar',
    component : GerarCurriculoComponent
  },
  {
    path : 'perfil',
    component : PerfilComponent
  },
  {
    path : 'menu',
    component : MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
