import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    InicioComponent,
    AddArticuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
