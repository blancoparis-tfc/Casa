import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { CategoriaService, Categoria } from '../categoria.service'
import { Articulo, ArticuloService } from '../articulo.service'
import { Router } from '@angular/router'
import {environment} from '../../../environments/environment'
@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css'],
  providers: [CategoriaService, ArticuloService]
})
export class AddArticuloComponent implements OnInit {

  categorias: Categoria[] = [];
  public articulo: Articulo = new Articulo(null, '', '', 0, 0);
  constructor(
    private snackBar: MdSnackBar
    , private router: Router
    , private categoriaService: CategoriaService
    , private articuloService: ArticuloService) {
  }
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }
  guardar() {
    this.articuloService.crear(this.articulo).subscribe(data => {
      this.snackBar.open("Operacion guardad correctamente", "OK", {duration: 2000, })
      this.volver();
    });
  }
  volver() {
    this.router.navigate(['/articulo']);
  }
}
