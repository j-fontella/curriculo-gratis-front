import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OnComponent } from './views/login/on/on.component';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import { GerarCurriculoComponent } from './views/gerar-curriculo/gerar-curriculo.component';
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import { PerfilComponent } from './views/perfil/perfil.component';
import { MenuComponent } from './views/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    OnComponent,
    GerarCurriculoComponent,
    PerfilComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CardModule,
        ButtonModule,
        HttpClientModule,
        InputTextModule,
        InputTextareaModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
