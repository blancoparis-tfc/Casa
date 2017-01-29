import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { CategoriaService, Categoria } from '../categoria.service'
import { Articulo, ArticuloService } from '../articulo.service'
import { Operacion } from '../../core/service.utils'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css'],
  providers: [CategoriaService, ArticuloService]
})
export class AddArticuloComponent implements OnInit {

  operacion = Operacion.CREAR;
  categorias: Categoria[] = [];
  public articulo: Articulo = new Articulo(null, '', '', 0, 0);
  constructor(
    private snackBar: MdSnackBar
    , private router: Router
    , private route: ActivatedRoute
    , private categoriaService: CategoriaService
    , private articuloService: ArticuloService) {
  }
  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
    this.route.params.filter(params => params['id'] != null)
      .switchMap((params: Params) => this.articuloService.get(params['id']))
      .subscribe(data => {
        this.articulo = data;
        this.operacion = Operacion.MODIFICAR;
      });
  }
  guardar() {
    if (this.operacion == Operacion.CREAR) {
      this.articuloService.crear(this.articulo).subscribe(data => {
        this.snackBar.open("Se ha creado correctamente el articulo", "OK", { duration: 2000, })
        this.volver();
      });
    }else{
        this.articuloService.actualizar(this.articulo).subscribe(data => {
        this.snackBar.open("Se ha modficado correctamente el articulo", "OK", { duration: 2000, })
        this.volver();
      });
    }
  }
  volver() {
    this.router.navigate(['/articulo']);
  }
}
