import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Configuraciones propias
import { AppRoutingModule } from './app-routing.module'

// Librerias añadidas
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import 'hammerjs';

import { AppComponent } from './app.component';

import { InMen } from './InMen.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { InicioComponent } from './inicio/inicio.component'

import './rxjs-extensions';
import { AddArticuloComponent } from './articulo/add-articulo/add-articulo.component';
import { environment } from '../environments/environment';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { PreguntaComponent } from './cuestionario/pregunta/pregunta.component';
import { FocusDirectiveDirective } from './core/focus-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    InicioComponent,
    AddArticuloComponent,
    CuestionarioComponent,
    PreguntaComponent,
    FocusDirectiveDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    environment.importaciones,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
