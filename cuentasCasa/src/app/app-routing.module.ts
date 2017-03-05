import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'
import { ArticuloComponent } from './articulo/articulo.component'
import { AddArticuloComponent } from './articulo/add-articulo/add-articulo.component'
import { CuestionarioComponent } from './cuestionario/cuestionario.component'

const rutas: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'articulo', component: ArticuloComponent },
    { path: 'articuloEdit/:id',component:AddArticuloComponent},
    { path: 'articuloAdd',component: AddArticuloComponent},
    { path: 'cuestionario',component: CuestionarioComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }