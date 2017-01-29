# Instalacion de angular material 2

Pagina web de la libreria https://material.angular.io/

## Instalar la libreria 

Lo primer es descargar la libreria.

```
npm install --save @angular/material
```

## Configurarlo en angular 

Aqui vamos a activar el modulo, dentro de angular 2. 

``` typescript


import { MaterialModule } from '@angular/material';
// other imports 
@NgModule({
  imports: [MaterialModule.forRoot()],
  ...
})
export class PizzaPartyAppModule { }

```

## Configurar los stilos en angular cli

Aqui vamos a configurar la hoja de stilos

styles.css

```css
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css'
```

# angular-in-memory-web-api

Es una libreria, de los datos  https://github.com/angular/in-memory-web-api

## Instalar la dependencia

```
npm install --save angular-in-memory-web-api
```

## Creamos el servicio

Primero creamos un servicio mokeado

``` typescript
import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: '1', name: 'Windstorm' },
      { id: '2', name: 'Bombasto' },
      { id: '3', name: 'Magneta' },
      { id: '4', name: 'Tornado' }
    ];
    return {heroes};
  }
} 
```
> Ejemplo de los datos

## Configuramos el modulo en memoria.

Establecemos el sistema de modulo, 

``` typescript

import {InMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMenMenuService} from './memory/InMenMenu.service'

    InMemoryWebApiModule.forRoot(InMenMenuService)
```

## Los iconos

ponemos en la siguiente dirección, en el fichero index.html
``` html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Hammerjs

Instalación de hammerjs

```
npm install --save hammerjs 
npm install --save-dev @types/hammerjs
```

Ponemos el import hammerjs, en el app.module.ts

```typescript
import 'hammerjs';
```

# Enrutador

Vamos a configurar el enrutador.

## Modulo del enrutador

Creamos el fichero **app-routing.module.ts** 

``` typescript
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
```

## Configurar el modulo

Se añade al modulo.

``` typescript
@ngModule
import[AppRoutingModule]

```

## Como poner una opcion de menu con material.

* **routerLink:** Es donde indicamos que esta la ruta.
* **router-outlet:** Donde se van a cargar los datos. 

``` html
<md-toolbar>
<button md-icon-button [mdMenuTriggerFor]="menu">
  <md-icon>more_vert</md-icon>
</button>
<md-menu #menu="mdMenu">
  <button md-menu-item routerLink="/inicio"> 
    <md-icon>home</md-icon>
    <span>Inicio</span> 
  </button>
</md-menu>
  {{title}}
</md-toolbar>
<router-outlet></router-outlet>

```

## Pasos a seguir para actualizar angular-cli

``` bash
// Borrar el directorio node_modules
npm install --save-dev angular-cli@latest
npm install
ng init
```
> Hacer siempre una copia de seguridad ya que nos pregunta por sobrescribir algunos ficheros.

## Pasar para instalar angular-flex

Vamos a instalar un nuevo componente el loyaout flex.

``` bash
npm install @angular/flex-layout -save
```
> Integrarlo con angular-cli https://github.com/angular/flex-layout/wiki/Integration-with-Angular-CLI

